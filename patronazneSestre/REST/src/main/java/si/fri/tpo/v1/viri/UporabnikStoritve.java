package si.fri.tpo.v1.viri;

import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.*;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import si.fri.tpo.entitete.Uporabnik;
import si.fri.tpo.entitete.Vloga;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesniki_ws.UporabnikREST;

@RequestScoped
@Path("uporabnik")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON, "application/xml" })
public class UporabnikStoritve implements UporabnikREST {
	@EJB
	private FasadniSBLocal fasada;
	
	
	@POST
	@Path("")
	public void createUporabnik(Uporabnik uporabnik) {
		fasada.shraniNovegaUporabnika(uporabnik);
		
	}

	@GET
	@Path("")
	public List<Uporabnik> returnUporabniks() {
		
		return fasada.najdiUporabniks();
	}

	@DELETE
	@Path("{id}")
	public void deleteUporabnik(@PathParam("id") int id) {
		fasada.deleteUporabnik(id);
		
		
	}

	@PUT
	@Path("")
	public void updateUporabnik(Uporabnik uporabnik) {
		fasada.updateUporabnika(uporabnik);
		

	}

	@GET
	@Path("{id}")
	public Uporabnik returnUporabnik(@PathParam("id") int id) {
		return fasada.najdiUporabnik(id);
	}
	

}
