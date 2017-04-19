package si.fri.tpo.v1.viri;

import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import si.fri.tpo.entitete.Okolis;
import si.fri.tpo.entitete.Pacient;
import si.fri.tpo.entitete.Posta;
import si.fri.tpo.entitete.SorodstvenoRazmerje;
import si.fri.tpo.entitete.Spol;
import si.fri.tpo.vmesnikiSB.NoAuthSBLocal;
import si.fri.tpo.vmesniki_ws.RegistracijaREST;

@RequestScoped
@Path("registracija")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON, "application/xml" })
@Api(value = "Storitve za registracijo")
public class RegistracijaStoritve implements RegistracijaREST{

	@EJB
	private NoAuthSBLocal noAuth;
	
	@Override
	@POST
	@Path("")
	@ApiOperation(value = "Dodaj pacienta", notes = "Doda pacienta v bazo ob registraciji", code = 200)
	public void createPacient(Pacient pacient) {
	
		noAuth.createPacient(pacient);
		
	}
	
	@Override
	@GET
	@Path("/{id}")
	@ApiOperation(value = "Aktivira uporabnika", notes = "Uporabniku dodeli vlogo pacient, da lahko dostopa do storitev portala.", code = 200)
	public void activateUporabnik(@PathParam("id") int id) throws Throwable{

		noAuth.aktivirajUporabnika(id);
	
	}
	
	@GET
	@Path("/okolisByPosta/{id}")
	@ApiOperation(value = "Vrni okolis glede na posto", notes = "Vrne seznam okolisev glede na podan id od poste", code = 200,response = Okolis.class)
	public List<Okolis> returnOkolissByPosta(@PathParam("id")int id) {
		
		return noAuth.returnOkolissByPosta(id);
	
	}
	
	@GET
	@Path("/posta")
	@ApiOperation(value = "Vrni poste", notes = "Vrne seznam post iz baze", code = 200,response = Posta.class)
	public List<Posta> returnPostas() {
		
		return noAuth.returnPostas();
	}
	
	@GET
	@Path("/spol")
	@ApiOperation(value = "Vrni spole", notes = "Vrne seznam spolov iz baze", code = 200,response = Spol.class)
	public List<Spol> returnSpols() {
			
		return noAuth.returnSpols();
	
	}
	
	@GET
	@Path("/sorodstvenoRazmerje")
	@ApiOperation(value = "Vrni sorodstvena razmerja", notes = "Vrne seznam sorodstvenih razmerij iz baze", code = 200,response = SorodstvenoRazmerje.class)
	public List<SorodstvenoRazmerje> returnSorodstvenoRazmerjes() {
		
		return noAuth.returnSorodstvenoRazmerjes();
	
	}
}
