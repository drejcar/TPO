package si.fri.tpo.v1.viri;

import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.*;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import si.fri.tpo.entitete.Pacient;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesniki_ws.PacientREST;

@RequestScoped
@Path("pacient")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON })
public class PacientStoritve implements PacientREST {

	@EJB
	private FasadniSBLocal fasada;
	
	@POST
	@Path("")
	public void createPacient(Pacient pacient) {
		fasada.createPacient(pacient);
		fasada.odstraniZrno();

	}

	@GET
	@Path("")
	public List<Pacient> returnPacients() {
		List<Pacient> list = fasada.returnPacients();
		fasada.odstraniZrno();
		return list;
	}

	@DELETE
	@Path("{id}")
	public void deletePacient(@PathParam("id") int id) {
		fasada.deletePacient(id);
		fasada.odstraniZrno();

	}

	@PUT
	@Path("")
	public void updatePacient(Pacient pacient) {
		fasada.updatePacient(pacient);
		fasada.odstraniZrno();

	}

	@GET
	@Path("{id}")
	public Pacient returnPacient(@PathParam("id") int id) {
		Pacient pc = fasada.returnPacient(id);
		fasada.odstraniZrno();
		return pc;
	}

}
