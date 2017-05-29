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
import si.fri.tpo.entitete.ZdravstveniDelavec;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesniki_ws.ZdravstveniDelavecREST;

@RequestScoped
@Path("zdravstveniDelavec")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON, "application/xml" })
@Api(value = "Storitve za zdravstvene delavce")
public class ZdravstveniDelavecStortve implements ZdravstveniDelavecREST {

	@EJB
	private FasadniSBLocal fasada;
	
	
	@POST
	@Path("")
	@ApiOperation(value = "Dodaj zdravstvenega delavca", notes = "Doda zdravstvenega delavca v bazo", code = 200)
	public void createZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec) {
		fasada.createZdravstveniDelavec(zdravstveniDelavec);
		

	}

	@DELETE
	@Path("{id}")
	@ApiOperation(value = "Brisi zdravstvenega delavca", notes = "Brise zdravstvenega delavca iz baze", code = 200)
	public void deleteZdravstveniDelavec(@PathParam("id") int id) {
		fasada.deleteZdravstveniDelavec(id);
		

	}

	@GET
	@Path("")
	@ApiOperation(value = "Vrni zdravstvene delavce", notes = "Vrne seznam zdravstvenih delavcev",code = 200, response = ZdravstveniDelavec.class)
	public List<ZdravstveniDelavec> returnZdravstveniDelavecs() {
		
		return fasada.returnZdravstveniDelavecs();
	}

	@PUT
	@Path("")
	@ApiOperation(value = "Posodobi zdravstvenega delavca", notes = "Posodobi zdravstvenega delavca v bazi", code = 200)
	public void updateZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec) {
		fasada.updateZdravstveniDelavec(zdravstveniDelavec);
		

	}
	
	@GET
	@Path("{id}")
	@ApiOperation(value = "Vrne zdravstvenega delavca", notes = "Vrne zdravstvenega delavca iz baze", code = 200, response = ZdravstveniDelavec.class)
	public ZdravstveniDelavec returnZdravstveniDelavec(@PathParam("id") int id) {
		
		return fasada.returnZdravstveniDelavec(id);
	}
	
	@GET
	@Path("/byOkolis/{id}")
	@ApiOperation(value = "Pridobi zdravstvenega delavca glede na okoliš", notes = "Pridobi zdravstvenega delavca iz baze glede na njegov okoliš", code = 200)
	public List<ZdravstveniDelavec> returnPatronazneSestre(@PathParam("id") int id){
		
		return fasada.returnPatronazneSestre(id);
	}
	
	@GET
	@Path("/byIzv/{id}")
	@ApiOperation(value="Pridobi zdravstvene delavce glede na izvajalcaZdrastvenih storitev", notes="uporablja se za pridobivanje sester",code = 200,response = ZdravstveniDelavec.class)
	public List<ZdravstveniDelavec> returnPatronazneSestrePoIzv(@PathParam("id") int id){
		return fasada.returnPatronazneSestrePoIzv(id);
		
	}
}
