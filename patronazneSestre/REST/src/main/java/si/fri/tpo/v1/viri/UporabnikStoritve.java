package si.fri.tpo.v1.viri;

import java.util.List;

import javax.annotation.security.PermitAll;
import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.*;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;
import javax.ws.rs.core.Response.Status;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import si.fri.tpo.entitete.Uporabnik;
import si.fri.tpo.entitete.Vloga;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesniki_ws.UporabnikREST;

@RequestScoped
@Path("uporabnik")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON, "application/xml" })
@Api(value = "Storitve za uporabnike")
public class UporabnikStoritve implements UporabnikREST {
	@EJB
	private FasadniSBLocal fasada;
	
	
	@POST
	@Path("")
	@ApiOperation(value = "Dodaj uporabnika", notes = "Doda uporabnika v bazo", code = 200)
	public void createUporabnik(Uporabnik uporabnik) {
		fasada.shraniNovegaUporabnika(uporabnik);
	}

	@GET
	@Path("")
	@ApiOperation(value = "Vrni uporabnike", notes = "Vrne uporabnike iz baze", code = 200, response = Uporabnik.class)
	public List<Uporabnik> returnUporabniks() {
		
		return fasada.najdiUporabniks();
	}

	@DELETE
	@Path("{id}")
	@ApiOperation(value = "Brisi uporabnika", notes = "Brise uporabnika iz baze", code = 200)
	public void deleteUporabnik(@PathParam("id") int id) {
		fasada.deleteUporabnik(id);
		
		
	}

	@PUT
	@Path("")
	@ApiOperation(value = "Posodobi uporabnika", notes = "Posodobi uporabnika v bazi", code = 200)
	public void updateUporabnik(Uporabnik uporabnik) {
		fasada.updateUporabnika(uporabnik);
		

	}

	@GET
	@Path("{id}")
	@ApiOperation(value = "Vrni uporabnika", notes = "Vrne uporabnika iz baze", code = 200, response = Uporabnik.class)
	public Uporabnik returnUporabnik(@PathParam("id") int id) {
		return fasada.najdiUporabnik(id);
	}

	@GET
	@Path("/login/{mail}")
	public Uporabnik returnUporabnikMail(@PathParam("mail") String email) {
		
		return fasada.returnUporabnikEmail(email);
	}
	
	

}
