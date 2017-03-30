package si.fri.tpo.v1.viri;

import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.*;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import si.fri.tpo.entitete.Kontakt;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesniki_ws.KontaktREST;

@RequestScoped
@Path("kontakt")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON, "application/xml" })
public class KontaktStoritve implements KontaktREST {

	@EJB
	private FasadniSBLocal fasada;
	
	@POST
	@Path("")
	public void createKontakt(Kontakt kontakt) {
		fasada.createKontakt(kontakt);
		
	}

	@GET
	@Path("")
	public List<Kontakt> returnKontakts() {
		return fasada.returnKontakts();
	}

	@DELETE
	@Path("{id}")
	public void deleteKontakt(@PathParam("id") int id) {
		fasada.deleteKontakt(id);
		

	}

	@PUT
	@Path("")
	public void updateKontakt(Kontakt kontakt) {
		fasada.updateKontakt(kontakt);
		

	}

	@GET
	@Path("{id}")
	public Kontakt returnKontakt(@PathParam("id") int id) {
		return fasada.returnKontakt(id);
	}

}
