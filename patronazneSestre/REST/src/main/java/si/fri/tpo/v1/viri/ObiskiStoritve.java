package si.fri.tpo.v1.viri;

import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import org.joda.time.LocalDate;

import si.fri.tpo.entitete.Obisk;
import si.fri.tpo.entitete.PorociloAplikacijaInjekcije;
import si.fri.tpo.entitete.PorociloKontrolaZdravstvenegaStanja;
import si.fri.tpo.entitete.PorociloObiskNosecnice;
import si.fri.tpo.entitete.PorociloObiskNovorojencka;
import si.fri.tpo.entitete.PorociloObiskOtrocnice;
import si.fri.tpo.entitete.PorociloOdvzemKrvi;
import si.fri.tpo.entitete.PorociloPreventivaStarostnika;
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
	@GET
	@Path("/nadomescanjekonec/{id}")
	public void endNadomescanje(@PathParam("id") int id){
		fasada.endNadomescanje(id);
	}
	//-----------------porocila-----------------------
	@PUT
	@Path("/porociloaplikacijainjekcije")
	public void updPorInek(PorociloAplikacijaInjekcije porocilo){
		fasada.updPorInek(porocilo);
	}
	@PUT
	@Path("/porocilozdrstanja")
	public void updPorZdrSta(PorociloKontrolaZdravstvenegaStanja porocilo){
		fasada.updPorZdrSta(porocilo);
	}
	@PUT
	@Path("/porociloobisknosecnice")
	public void updPorNos(PorociloObiskNosecnice porocilo){
		fasada.updPorNos(porocilo);
	}
	@PUT
	@Path("/porociloobisknovorojencka")
	public void updPorNov(PorociloObiskNovorojencka porocilo){
		fasada.updPorNov(porocilo);
	}
	@PUT
	@Path("/porociloobiskotrocnice")
	public void updPorOtr(PorociloObiskOtrocnice porocilo){
		fasada.updPorOtr(porocilo);
	} 
	@PUT
	@Path("/porociloodvzemkrvi")
	public void updPorKri(PorociloOdvzemKrvi porocilo){
		fasada.updPorKri(porocilo);
	}
	@PUT
	@Path("/porocilopreventivastarostnika")
	public void updPorStar(PorociloPreventivaStarostnika porocilo){
		fasada.updPorStar(porocilo);
	}
}
