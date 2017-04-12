package si.fri.tpo.v1.viri;

import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.*;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import si.fri.tpo.entitete.IzvajalecZdravstvenihStoritev;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesniki_ws.IzvajalecZdravstvenihStoritevREST;

@RequestScoped
@Path("izvajalecZdravstvenihStoritev")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON, "application/xml" })
@Api(value = "Storitve za izvajalca zdravstvenih storitev")
public class IzvajalecZdravstvenihStoritevStoritve implements IzvajalecZdravstvenihStoritevREST {

	@EJB
	private FasadniSBLocal fasada;
	
	@POST
	@Path("")
	@ApiOperation(value = "Dodaj izvajalca zdravstvenih storitev", notes = "Doda izvajalca zdravstvenih storitev v bazo", code = 200)
	public void createIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev) {
		fasada.createIzvajalecZdravstvenihStoritev(izvajalecZdravstvenihStoritev);
		

	}

	@GET
	@Path("")
	@ApiOperation(value = "Vrni seznam izvajalcev zdravstvenih storitev", notes = "Vrne seznam vseh izvajalcev zdravstvenih storitev", code = 200, response = IzvajalecZdravstvenihStoritev.class)
	public List<IzvajalecZdravstvenihStoritev> returnIzvajalecZdravstvenihStoritevs() {
		
		
		return fasada.returnIzvajalecZdravstvenihStoritevs();
	}

	@DELETE
	@Path("{id}")
	@ApiOperation(value = "Brisi izvajalca zdravstvenih storitev", notes = "Pobrise specificnega izvajalca zdravstvenih storitev preko id-ja", code = 200)
	public void deleteIzvajalecZdravstvenihStoritev(@PathParam("id") int id) {
		fasada.deleteIzvajalecZdravstvenihStoritev(id);
		

	}

	@PUT
	@Path("")
	@ApiOperation(value = "Posodobi izvajalca zdravstvenih storitev", notes = "Posodobi izvajalca zdravstvenih storitev", code = 200)
	public void updateIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev) {
		fasada.updateIzvajalecZdravstvenihStoritev(izvajalecZdravstvenihStoritev);
		

	}

	@GET
	@Path("{id}")
	@ApiOperation(value = "Vrni izvajalca zdravstvenih storitev", notes = "Vrne izvajalca zdravstvenih storitev iz bazo", code = 200, response = IzvajalecZdravstvenihStoritev.class)
	public IzvajalecZdravstvenihStoritev returnIzvajalecZdravstvenihStoritev(@PathParam("id") int id) {
		
		
		return fasada.returnIzvajalecZdravstvenihStoritev(id);
	}

}
