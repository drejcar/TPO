package si.fri.tpo.v1.viri;

import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.*;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import si.fri.tpo.entitete.Uporabnik;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesniki_ws.UporabnikREST;

@RequestScoped
@Path("uporabnik")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON })
public class UporabnikStoritve implements UporabnikREST {
	@EJB
	private FasadniSBLocal fasada;
	
	
	@POST
	@Path("")
	public void createUporabnik(Uporabnik uporabnik) {
		fasada.shraniNovegaUporabnika(uporabnik);
		fasada.odstraniZrno();
	}

	@GET
	@Path("")
	public List<Uporabnik> returnUporabniks() {
		List<Uporabnik> list = fasada.najdiUporabniks();
		fasada.odstraniZrno();
		return list;
	}

	@DELETE
	@Path("{id}")
	public void deleteUporabnik(@PathParam("id") int id) {
		fasada.deleteUporabnik(id);
		fasada.odstraniZrno();
		
	}

	@PUT
	@Path("")
	public void updateUporabnik(Uporabnik uporabnik) {
		fasada.updateUporabnika(uporabnik);
		fasada.odstraniZrno();

	}

	@GET
	@Path("{id}")
	public Uporabnik returnUporabnik(@PathParam("id") int id) {
		Uporabnik upr = fasada.najdiUporabnik(id);
		fasada.odstraniZrno();
		return upr;
	}

}
