package si.fri.tpo.v1.viri;

import java.util.Date;
import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.*;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.sun.mail.iap.Response;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import si.fri.tpo.entitete.DelovniNalog;
import si.fri.tpo.entitete.Obisk;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesniki_ws.DelovniNalogREST;

@RequestScoped
@Path("delovniNalog")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON, "application/xml" })
@Api(value = "Storitve za delovni nalog")
public class DelovniNalogStoritve implements DelovniNalogREST {

	@EJB
	private FasadniSBLocal fasada;
	
	@POST
	@Path("")
	@ApiOperation(value = "Kreiranje delovnega naloga", notes = "Doda delovni nalog v bazo")
	public void createDelovniNalog(DelovniNalog delovniNalog,
									@QueryParam("fixniDatum") int fixniDatum,	//0 - da | 1 - ne
									@QueryParam("obdobje") int obdobje,			//0 - en obisk | 1 - vec obiskov
									@QueryParam("od") Date od,					//prvi obisk
									@QueryParam("do") Date doo,					//zakjucek obdobja obiskov
									@QueryParam("interval") int interval,		//interval obiskov --> razmik med obiski
									@QueryParam("stObiskov") int stObiskov)		//stevilo planiranih obiskov
	{
	

		
		
		fasada.dodajDelovniNalog(delovniNalog);
		
	}

	@GET
	@Path("")
	@ApiOperation(value = "Vrni delovne naloge", notes = "Vrne seznam vseh delovnih nalog",code = 200, response = DelovniNalog.class)
	public List<DelovniNalog> returnDelovniNalogs() {
		return fasada.vrniDelovniNalogs();
	}

	@DELETE
	@Path("{id}")
	@ApiOperation(value = "Brisi delovni nalog", notes = "Pobrise specificni delovni nalog iz baze", code = 200)
	public void deleteDelovniNalog(@PathParam("id") int id) {
		fasada.deleteDelovniNalog(id);
		

	}

	@PUT
	@Path("")
	@ApiOperation(value = "Posodobi delovni nalog", notes = "Posodobi ze obstojec delovni nalog", code = 200)
	public void updateDelovniNalog(DelovniNalog delovniNalog) {
		fasada.updateDelovniNalog(delovniNalog);
		

	}

	@GET
	@Path("{id}")
	@ApiOperation(value = "vrni delovni nalog", notes = "Vrne specificni delovni nalog",code = 200, response = DelovniNalog.class)
	public DelovniNalog returnDelovniNalog(@PathParam("id") int id) {
		
		
		return fasada.vrniDelovniNalog(id);
	}

}
