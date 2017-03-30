package si.fri.tpo.v1.viri;

import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.*;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import si.fri.tpo.entitete.DelovniNalog;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesniki_ws.DelovniNalogREST;

@RequestScoped
@Path("delovniNalog")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON, "application/xml" })
public class DelovniNalogStoritve implements DelovniNalogREST {

	@EJB
	private FasadniSBLocal fasada;
	
	@POST
	@Path("")
	public void createDelovniNalog(DelovniNalog delovniNalog) {
		fasada.dodajDelovniNalog(delovniNalog);
		

	}

	@GET
	@Path("")
	public List<DelovniNalog> returnDelovniNalogs() {
		return fasada.vrniDelovniNalogs();
	}

	@DELETE
	@Path("{id}")
	public void deleteDelovniNalog(@PathParam("id") int id) {
		fasada.deleteDelovniNalog(id);
		

	}

	@PUT
	@Path("")
	public void updateDelovniNalog(DelovniNalog delovniNalog) {
		fasada.updateDelovniNalog(delovniNalog);
		

	}

	@GET
	@Path("{id}")
	public DelovniNalog returnDelovniNalog(@PathParam("id") int id) {
		
		
		return fasada.vrniDelovniNalog(id);
	}

}
