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
@Consumes({ MediaType.APPLICATION_JSON })
public class IzvajalecZdravstvenihStoritevStoritve implements IzvajalecZdravstvenihStoritevREST {

	@EJB
	private FasadniSBLocal fasada;
	
	@POST
	@Path("")
	public void createIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev) {
		fasada.createIzvajalecZdravstvenihStoritev(izvajalecZdravstvenihStoritev);
		fasada.odstraniZrno();

	}

	@GET
	@Path("")
	public List<IzvajalecZdravstvenihStoritev> returnIzvajalecZdravstvenihStoritevs() {
		List<IzvajalecZdravstvenihStoritev> list = fasada.returnIzvajalecZdravstvenihStoritevs();
		fasada.odstraniZrno();
		return list;
	}

	@DELETE
	@Path("{id}")
	public void deleteIzvajalecZdravstvenihStoritev(@PathParam("id") int id) {
		fasada.deleteIzvajalecZdravstvenihStoritev(id);
		fasada.odstraniZrno();

	}

	@PUT
	@Path("")
	public void updateIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev) {
		fasada.updateIzvajalecZdravstvenihStoritev(izvajalecZdravstvenihStoritev);
		fasada.odstraniZrno();

	}

	@GET
	@Path("{id}")
	public IzvajalecZdravstvenihStoritev returnIzvajalecZdravstvenihStoritev(@PathParam("id") int id) {
		IzvajalecZdravstvenihStoritev izs = fasada.returnIzvajalecZdravstvenihStoritev(id);
		fasada.odstraniZrno();
		return izs;
	}

}
