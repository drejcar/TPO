package si.fri.tpo.v1.viri;

import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.*;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import si.fri.tpo.entitete.ZdravstveniDelavec;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesniki_ws.ZdravstveniDelavecREST;

@RequestScoped
@Path("zdravstveniDelavec")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON, "application/xml" })
public class ZdravstveniDelavecStortve implements ZdravstveniDelavecREST {

	@EJB
	private FasadniSBLocal fasada;
	
	@GET
	@Path("{id}")
	public ZdravstveniDelavec returnZdravstveniDelavec(@PathParam("id") int id) {
		
		return fasada.returnZdravstveniDelavec(id);
	}

	@DELETE
	@Path("{id}")
	public void deleteZdravstveniDelavec(@PathParam("id") int id) {
		fasada.deleteZdravstveniDelavec(id);
		

	}

	@GET
	@Path("")
	public List<ZdravstveniDelavec> returnZdravstveniDelavecs() {
		
		return fasada.returnZdravstveniDelavecs();
	}

	@PUT
	@Path("")
	public void updateZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec) {
		fasada.updateZdravstveniDelavec(zdravstveniDelavec);
		

	}

	@POST
	@Path("")
	public void createZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec) {
		fasada.createZdravstveniDelavec(zdravstveniDelavec);
		

	}

}
