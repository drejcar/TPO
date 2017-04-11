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
import si.fri.tpo.entitete.Kontakt;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesniki_ws.KontaktREST;

@RequestScoped
@Path("kontakt")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON, "application/xml" })
@Api(value = "Storitve za kotaktno osebo")
public class KontaktStoritve implements KontaktREST {

	@EJB
	private FasadniSBLocal fasada;
	
	@POST
	@Path("")
	@ApiOperation(value = "Dodaj kontaktno osebo", notes = "Doda kontaktno osebo v bazo", code = 200)
	public void createKontakt(Kontakt kontakt) {
		fasada.createKontakt(kontakt);
		
	}

	@GET
	@Path("")
	@ApiOperation(value = "Vrni kontaktne osebe", notes = "Vrne seznam kontaktni oseb", code = 200, response = Kontakt.class)
	public List<Kontakt> returnKontakts() {
		return fasada.returnKontakts();
	}

	@DELETE
	@Path("{id}")
	@ApiOperation(value = "Brisi kontaktno osebo", notes = "Pobrise kontaktno osebo iz bazo", code = 200)
	public void deleteKontakt(@PathParam("id") int id) {
		fasada.deleteKontakt(id);
		

	}

	@PUT
	@Path("")
	@ApiOperation(value = "Posodobi kontaktno osebo", notes = "Posodobi kontaktno osebo v bazi", code = 200)
	public void updateKontakt(Kontakt kontakt) {
		fasada.updateKontakt(kontakt);
		

	}

	@GET
	@Path("{id}")
	@ApiOperation(value = "Vrni kontaktno osebo", notes = "Vraca specificno kontaktno osebo iz bazo", code = 200, response = Kontakt.class)
	public Kontakt returnKontakt(@PathParam("id") int id) {
		return fasada.returnKontakt(id);
	}

}
