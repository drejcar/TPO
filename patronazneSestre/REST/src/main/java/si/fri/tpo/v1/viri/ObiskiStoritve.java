package si.fri.tpo.v1.viri;

import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import org.joda.time.LocalDate;

import si.fri.tpo.entitete.Obisk;
import si.fri.tpo.entitete.ZdravstveniDelavec;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesniki_ws.ObiskiREST;

@RequestScoped
@Path("obiski")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON, "application/xml" })
public class ObiskiStoritve implements ObiskiREST {

	@EJB
	private FasadniSBLocal fasada;
	
	@GET
	@Path("/{id}")
	public Obisk vrniObisk(@PathParam("id") int id){
		return fasada.vrniObisk(id);
		
	}
	@GET
	@Path("/nadomescanje/{idMaticna}/{idNadomestna}")
	public void doNadomescanje(	@PathParam("idMaticna") int idMaticna, 
								@PathParam("idNadomestna") int idNadomestna,
								@QueryParam("od") String ood,
								@QueryParam("do") String doo){
		
		//pridobi vse obiske idMaticne znotraj intervala(predviden datum)
		
		LocalDate oood = LocalDate.parse(ood);
		LocalDate dooo = LocalDate.parse(doo);
		
		ZdravstveniDelavec nadomestnaSestra = fasada.najdiPravegaZdr(idNadomestna);
		
		List<Obisk> maticniObiski = fasada.getObiskiByMaticna(idMaticna,oood.toDate(),dooo.toDate(),nadomestnaSestra);
		
		//pridobi vse obiske idMaticne znotraj intervala(predviden datum) kjer je ze nadomestna
		
		//List<Obisk> nadomescanjaObiski = fasada.getObiskiNadomescanja(idMaticna, oood.toDate(), dooo.toDate());
				
		//dodeli vse obiske idNadomestna
		if(maticniObiski.isEmpty() != true){
			for(int i = 0; i < maticniObiski.size(); i++){
				Obisk o = maticniObiski.get(i);
				o.setNadomestnaSestra(nadomestnaSestra);
				fasada.updObisk(o);
			}
		}
		/*
		if(nadomescanjaObiski.isEmpty()!= true){
			for(int i = 0; i < nadomescanjaObiski.size(); i++){
				Obisk o = nadomescanjaObiski.get(i);
				o.setNadomestnaSestra(nadomestnaSestra);
				fasada.updObisk(o);
			}
		}
		*/
	}
}
