package si.fri.tpo.v1.viri;

import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.*;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import si.fri.tpo.entitete.Kontakt;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesniki_ws.KontaktREST;

@RequestScoped
@Path("kontakt")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON })
public class KontaktStoritve implements KontaktREST {

	@EJB
	private FasadniSBLocal fasada;
	
	@POST
	@Path("")
	public void createKontakt(Kontakt kontakt) {
		fasada.createKontakt(kontakt);
		fasada.odstraniZrno();
	}

	@GET
	@Path("")
	public List<Kontakt> returnKontakts() {
		List<Kontakt> list = fasada.returnKontakts();
		fasada.odstraniZrno();
		return list;
	}

	@DELETE
	@Path("{id}")
	public void deleteKontakt(@PathParam("id") int id) {
		fasada.deleteKontakt(id);
		fasada.odstraniZrno();

	}

	@PUT
	@Path("")
	public void updateKontakt(Kontakt kontakt) {
		fasada.updateKontakt(kontakt);
		fasada.odstraniZrno();

	}

	@GET
	@Path("{id}")
	public Kontakt returnKontakt(@PathParam("id") int id) {
		Kontakt kt = fasada.returnKontakt(id);
		fasada.odstraniZrno();
		return kt;
	}

}
