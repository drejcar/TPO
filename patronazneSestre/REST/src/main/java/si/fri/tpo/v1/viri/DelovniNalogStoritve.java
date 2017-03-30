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
@Consumes({ MediaType.APPLICATION_JSON })
public class DelovniNalogStoritve implements DelovniNalogREST {

	@EJB
	private FasadniSBLocal fasada;
	
	@POST
	@Path("")
	public void createDelovniNalog(DelovniNalog delovniNalog) {
		fasada.dodajDelovniNalog(delovniNalog);
		fasada.odstraniZrno();

	}

	@GET
	@Path("")
	public List<DelovniNalog> returnDelovniNalogs() {
		List<DelovniNalog> list = fasada.vrniDelovniNalogs();
		fasada.odstraniZrno();
		return list;
	}

	@DELETE
	@Path("{id}")
	public void deleteDelovniNalog(@PathParam("id") int id) {
		fasada.deleteDelovniNalog(id);
		fasada.odstraniZrno();

	}

	@PUT
	@Path("")
	public void updateDelovniNalog(DelovniNalog delovniNalog) {
		fasada.updateDelovniNalog(delovniNalog);
		fasada.odstraniZrno();

	}

	@GET
	@Path("{id}")
	public DelovniNalog returnDelovniNalog(@PathParam("id") int id) {
		DelovniNalog dn = fasada.vrniDelovniNalog(id);
		fasada.odstraniZrno();
		return dn;
	}

}
