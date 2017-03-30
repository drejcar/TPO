package si.fri.tpo.v1.viri;

import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.*;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import si.fri.tpo.entitete.IzvajalecZdravstvenihStoritev;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesniki_ws.IzvajalecZdravstvenihStoritevREST;

@RequestScoped
@Path("izvajalecZdravstvenihStoritev")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON, "application/xml" })
public class IzvajalecZdravstvenihStoritevStoritve implements IzvajalecZdravstvenihStoritevREST {

	@EJB
	private FasadniSBLocal fasada;
	
	@POST
	@Path("")
	public void createIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev) {
		fasada.createIzvajalecZdravstvenihStoritev(izvajalecZdravstvenihStoritev);
		

	}

	@GET
	@Path("")
	public List<IzvajalecZdravstvenihStoritev> returnIzvajalecZdravstvenihStoritevs() {
		
		
		return fasada.returnIzvajalecZdravstvenihStoritevs();
	}

	@DELETE
	@Path("{id}")
	public void deleteIzvajalecZdravstvenihStoritev(@PathParam("id") int id) {
		fasada.deleteIzvajalecZdravstvenihStoritev(id);
		

	}

	@PUT
	@Path("")
	public void updateIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev) {
		fasada.updateIzvajalecZdravstvenihStoritev(izvajalecZdravstvenihStoritev);
		

	}

	@GET
	@Path("{id}")
	public IzvajalecZdravstvenihStoritev returnIzvajalecZdravstvenihStoritev(@PathParam("id") int id) {
		
		
		return fasada.returnIzvajalecZdravstvenihStoritev(id);
	}

}
