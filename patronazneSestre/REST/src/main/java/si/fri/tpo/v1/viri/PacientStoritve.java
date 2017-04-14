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
import si.fri.tpo.entitete.Pacient;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesniki_ws.PacientREST;

@RequestScoped
@Path("pacient")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON, "application/xml" })
@Api(value = "Storitve za pacienta")
public class PacientStoritve implements PacientREST {

	@EJB
	private FasadniSBLocal fasada;
	
	@POST
	@Path("")
	@ApiOperation(value = "Dodaj pacienta", notes = "Doda pacienta v bazo", code = 200)
	public void createPacient(Pacient pacient) {
		fasada.createPacient(pacient);
		

	}

	@GET
	@Path("")
	@ApiOperation(value = "Vrni paciente", notes = "Vrne seznam pacientov", code = 200, response = Pacient.class)
	public List<Pacient> returnPacients() {
		return fasada.returnPacients();
	}

	@DELETE
	@Path("{id}")
	@ApiOperation(value = "Pobrisi pacienta", notes = "Brisi pacienta iz bazo", code = 200)
	public void deletePacient(@PathParam("id") int id) {
		fasada.deletePacient(id);
		

	}

	@PUT
	@Path("")
	@ApiOperation(value = "Posodobi pacienta", notes = "Posodobi pacienta v bazi", code = 200)
	public void updatePacient(Pacient pacient) {
		fasada.updatePacient(pacient);
		

	}

	@GET
	@Path("{id}")
	@ApiOperation(value = "Vrni pacienta", notes = "Vrne pacienta iz baze", code = 200, response = Pacient.class)
	public Pacient returnPacient(@PathParam("id") int id) {
		return fasada.returnPacient(id);
	}

	@GET
	@Path("/zz/{stevilka}")
	@ApiOperation(value="Vrni pacienta glede na zz", notes = "Vrne pacienta glede na njegovo stevilko zdravstvenega zavarovanja", code = 200, response = Pacient.class)
	public Pacient returnPacientZZ(@PathParam("stevilka")int stevilkaZZ) {
		return fasada.returnPacientZZ(stevilkaZZ);
	}

}
