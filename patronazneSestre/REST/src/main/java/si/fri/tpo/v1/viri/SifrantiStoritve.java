package si.fri.tpo.v1.viri;

import java.util.List;

import javax.annotation.security.PermitAll;
import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.*;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import si.fri.tpo.entitete.Bolezen;
import si.fri.tpo.entitete.Material;
import si.fri.tpo.entitete.Okolis;
import si.fri.tpo.entitete.Posta;
import si.fri.tpo.entitete.SorodstvenoRazmerje;
import si.fri.tpo.entitete.Spol;
import si.fri.tpo.entitete.Vloga;
import si.fri.tpo.entitete.VrstaObiska;
import si.fri.tpo.entitete.Zdravilo;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesniki_ws.SifrantiREST;

@RequestScoped
@Path("sifranti")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON, "application/xml" })
@Api(value = "Storitve za sifrante")
public class SifrantiStoritve implements SifrantiREST {

	@EJB
	private FasadniSBLocal fasada;
	
	// *** create sifrante ***
	
	@POST
	@Path("/zdravilo")
	@ApiOperation(value = "Dodaj zdravilo", notes = "Doda zdravilo v bazo", code = 200)
	public void createZdravilo(Zdravilo zdravilo) {
		fasada.createZdravilo(zdravilo);
		

	}

	@POST
	@Path("/material")
	@ApiOperation(value = "Dodaj material", notes = "Doda material v bazo", code = 200)
	public void createMaterial(Material material) {
		fasada.createMaterial(material);
		

	}

	@POST
	@Path("/spol")
	@ApiOperation(value = "Dodaj spol", notes = "Doda spol v bazo", code = 200)
	public void createSpol(Spol spol) {
		fasada.createSpol(spol);
		

	}

	@POST
	@Path("/okolis")
	@ApiOperation(value = "Dodaj okolis", notes = "Doda okolis v bazo", code = 200)
	public void createOkolis(Okolis okolis) {
		fasada.createOkolis(okolis);
		

	}

	@POST
	@Path("/posta")
	@ApiOperation(value = "Dodaj posto", notes = "Doda posto v bazo", code = 200)
	public void createPosta(Posta posta) {
		fasada.createPosta(posta);
		

	}

	@POST
	@Path("/vloga")
	@ApiOperation(value = "Dodaj vlogo", notes = "Doda vlogo v bazo", code = 200)
	public void createVloga(Vloga vloga) {
		fasada.createVloga(vloga);
		

	}

	@POST
	@Path("/vrstaObiska")
	@ApiOperation(value = "Dodaj vrsto obiska", notes = "Doda vrsto obiska v bazo", code = 200)
	public void createVrstaObiska(VrstaObiska vrstaObiska) {
		fasada.createVrstaObiska(vrstaObiska);
		

	}

	@POST
	@Path("/sorodstvenoRazmerje")
	@ApiOperation(value = "Dodaj sorodstveno razmerje", notes = "Doda sorodstveno razmerje v bazo", code = 200)
	public void createSorodstvenoRazmerje(SorodstvenoRazmerje sorodstvenoRazmerje) {
		fasada.createSorodstvenoRazmerje(sorodstvenoRazmerje);
		

	}

	@POST
	@Path("/bolezen")
	@ApiOperation(value = "Dodaj bolezen", notes = "Doda bolezen v bazo", code = 200)
	public void createBolezen(Bolezen bolezen) {
		fasada.createBolezen(bolezen);
		
	}
	
	// *** vracanje seznama sifrantov ***
	
	@GET
	@Path("/zdravilo")
	@ApiOperation(value = "Vrni zdravila", notes = "Vrne seznam zdravila iz baze", code = 200,response = Zdravilo.class)
	public List<Zdravilo> returnZdravilas() {
		
		
		return fasada.returnZdravilas();
	}

	@GET
	@Path("/material")
	@ApiOperation(value = "Vrni material", notes = "Vrne seznam materiala iz baze", code = 200,response = Material.class)
	public List<Material> returnMaterials() {
		
		
		return fasada.returnMaterials();
	}

	@GET
	@Path("/spol")
	@ApiOperation(value = "Vrni spole", notes = "Vrne seznam spolov iz baze", code = 200,response = Spol.class)
	public List<Spol> returnSpols() {
		
		
		return fasada.returnSpols();
	}

	@GET
	@Path("/okolis")
	@ApiOperation(value = "Vrni okolis", notes = "Vrne seznam okolisev iz baze", code = 200,response = Okolis.class)
	public List<Okolis> returnOkoliss() {
		
		
		return fasada.returnOkoliss();
	}

	@GET
	@Path("/okolisByPosta/{id}")
	@ApiOperation(value = "Vrni okolis glede na posto", notes = "Vrne seznam okolisev glede na podan id od poste", code = 200,response = Okolis.class)
	public List<Okolis> returnOkolissByPosta(@PathParam("id")int id) {
		
		return fasada.returnOkolissByPosta(id);
	}
	
	@GET
	@Path("/posta")
	@ApiOperation(value = "Vrni poste", notes = "Vrne seznam post iz baze", code = 200,response = Posta.class)
	public List<Posta> returnPostas() {
		
		return fasada.returnPostas();
	}

	@GET
	@Path("/vloga")
	@ApiOperation(value = "Vrni vloge", notes = "Vrne seznam vlog iz baze", code = 200,response = Vloga.class)
	public List<Vloga> returnVlogas() {
		return fasada.returnVlogas();
		
	}

	@GET
	@Path("/vrstaObiska")
	@ApiOperation(value = "Vrni vrste obiskov", notes = "Vrne seznam vrst obiskov iz baze", code = 200,response = VrstaObiska.class)
	public List<VrstaObiska> returnVrstaObiskas() {
		
		
		return fasada.returnVrstaObiskas();
	}

	@GET
	@Path("/sorodstvenoRazmerje")
	@ApiOperation(value = "Vrni sorodstvena razmerja", notes = "Vrne seznam sorodstvenih razmerij iz baze", code = 200,response = SorodstvenoRazmerje.class)
	public List<SorodstvenoRazmerje> returnSorodstvenoRazmerjes() {
		
		
		return fasada.returnSorodstvenoRazmerjes();
	}

	@GET
	@Path("/bolezen/")
	@ApiOperation(value = "Vrni bolezni", notes = "Vrne seznam bolezni iz baze", code = 200,response = Bolezen.class)
	public List<Bolezen> returnBolezens() {
		
		return fasada.returnBolezens();
	}
	
	// *** brisanje specificnega sifranta ***
	
	@DELETE
	@Path("/zdravilo/{id}")
	@ApiOperation(value = "Brisi zdravilo", notes = "Brisi zdravilo iz baze", code = 200)
	public void deleteZdravilo(@PathParam("id")int id) {
		fasada.deleteZdravilo(id);
		

	}

	@DELETE
	@Path("/material/{id}")
	@ApiOperation(value = "Brisi material", notes = "Brisi material iz baze", code = 200)
	public void deleteMaterial(@PathParam("id")int id) {
		fasada.deleteMaterial(id);
		

	}

	@DELETE
	@Path("/spol/{id}")
	@ApiOperation(value = "Brisi spol", notes = "Brisi spol iz baze", code = 200)
	public void deleteSpol(@PathParam("id")int id) {
		fasada.deleteSpol(id);
		

	}

	@DELETE
	@Path("/okolis/{id}")
	@ApiOperation(value = "Brisi okolis", notes = "Brisi okolis iz baze", code = 200)
	public void deleteOkolis(@PathParam("id")int id) {
		fasada.deleteOkolis(id);
		

	}

	@DELETE
	@Path("/posta/{id}")
	@ApiOperation(value = "Brisi posto", notes = "Brisi posto iz baze", code = 200)
	public void deletePosta(@PathParam("id")int id) {
		fasada.deletePosta(id);
		

	}

	@DELETE
	@Path("/vloga/{id}")
	@ApiOperation(value = "Brisi vlogo", notes = "Brisi vlogo iz baze", code = 200)
	public void deleteVloga(@PathParam("id")int id) {
		fasada.deleteVloga(id);
		

	}

	@DELETE
	@Path("/vrstaObiska/{id}")
	@ApiOperation(value = "Brisi vrsto obiska", notes = "Brisi vrsto obiska iz baze", code = 200)
	public void deleteVrstaObiska(@PathParam("id")int id) {
		fasada.deleteVrstaObiska(id);
		

	}

	@DELETE
	@Path("/sorodstvenoRazmerje/{id}")
	@ApiOperation(value = "Brisi sorodstveno razmerje", notes = "Brisi sorodstveno razmerje iz baze", code = 200)
	public void deleteSorodstvenoRazmerje(@PathParam("id")int id) {
		fasada.deleteSorodstvenoRazmerje(id);
		

	}

	@DELETE
	@Path("/bolezen/{id}")
	@ApiOperation(value = "Brisi bolezen", notes = "Brisi bolezen iz baze", code = 200)
	public void deleteBolezen(@PathParam("id")int id) {
		fasada.deleteBolezen(id);
		
	}
	
	// *** update sifrant ***
	
	@PUT
	@Path("/zdravilo")
	@ApiOperation(value = "Posodobi zdravilo", notes = "Posodobi zdravilo v bazi", code = 200)
	public void updateZdravilo(Zdravilo zdravilo) {
		fasada.updateZdravilo(zdravilo);
		

	}

	@PUT
	@Path("/material")
	@ApiOperation(value = "Brisi material", notes = "Brisi material iz baze", code = 200)
	public void updateMaterial(Material material) {
		fasada.updateMaterial(material);
		
	}

	@PUT
	@Path("/spol")
	@ApiOperation(value = "Brisi spol", notes = "Brisi spol iz baze", code = 200)
	public void updateSpol(Spol spol) {
		fasada.updateSpol(spol);
		

	}

	@PUT
	@Path("/okolis")
	@ApiOperation(value = "Brisi okolis", notes = "Brisi okolis iz baze", code = 200)
	public void updateOkolis(Okolis okolis) {
		fasada.updateOkolis(okolis);
		

	}

	@PUT
	@Path("/posta")
	@ApiOperation(value = "Brisi posto", notes = "Brisi posto iz baze", code = 200)
	public void updatePosta(Posta posta) {
		fasada.updatePosta(posta);
		

	}

	@PUT
	@Path("/vloga")
	@ApiOperation(value = "Brisi vlogo", notes = "Brisi vlogo iz baze", code = 200)
	public void updateVloga(Vloga vloga) {
		fasada.updateVloga(vloga);
		

	}

	@PUT
	@Path("/vrstaObiska")
	@ApiOperation(value = "Brisi vrsto obiska", notes = "Brisi vrsto obiska iz baze", code = 200)
	public void updateVrstaObiska(VrstaObiska vrstaObiska) {
		fasada.updateVrstaObiska(vrstaObiska);
		

	}

	@PUT
	@Path("/sorodstvenoRazmerje")
	@ApiOperation(value = "Brisi sorodstveno razmerje", notes = "Brisi sorodstveno razmerje iz baze", code = 200)
	public void updateSorodstvenoRazmerje(SorodstvenoRazmerje sorodstvenoRazmerje) {
		fasada.updateSorodstvenoRazmerje(sorodstvenoRazmerje);
		

	}
	
	@PUT
	@Path("/bolezen/")
	@ApiOperation(value = "Brisi bolezen", notes = "Brisi bolezen iz baze", code = 200)
	public void updateBolezen(Bolezen bolezen) {
		fasada.updateBolezen(bolezen);
		
	}

	// *** vracanje specificnega sifranta ***
	
	@GET
	@Path("/zdravilo/{id}")
	@ApiOperation(value = "Vrni zdravilo", notes = "Vrni zdravilo iz baze", code = 200, response = Zdravilo.class)
	public Zdravilo returnZdravila(@PathParam("id")int id) {
		
		return fasada.returnZdravila(id);
	}

	@GET
	@Path("/material/{id}")
	@ApiOperation(value = "Vrni material", notes = "Vrni material iz baze", code = 200, response = Material.class)
	public Material returnMaterial(@PathParam("id")int id) {
		
		return fasada.returnMaterial(id);
	}

	@GET
	@Path("/spol/{id}")
	@ApiOperation(value = "Vrni spol", notes = "Vrni spol iz baze", code = 200, response = Spol.class)
	public Spol returnSpol(@PathParam("id")int id) {
		
		
		return fasada.returnSpol(id);
	}

	@GET
	@Path("/okolis/{id}")
	@ApiOperation(value = "Vrni okolis", notes = "Vrni okolis iz baze", code = 200, response = Okolis.class)
	public Okolis returnOkolis(@PathParam("id")int id) {
		
		
		return fasada.returnOkolis(id);
	}

	@GET
	@Path("/posta/{id}")
	@ApiOperation(value = "Vrni posto", notes = "Vrni posto iz baze", code = 200, response = Posta.class)
	public Posta returnPosta(@PathParam("id")int id) {
		
		
		return fasada.returnPosta(id);
	}

	@GET
	@Path("/vloga/{id}")
	@ApiOperation(value = "Vrni vlogo", notes = "Vrni vlogo iz baze", code = 200, response = Vloga.class)
	public Vloga returnVloga(@PathParam("id")int id) {
		
		
		return fasada.returnVloga(id);
	}

	@GET
	@Path("/vrstaObiska/{id}")
	@ApiOperation(value = "Vrni vrsto obiska", notes = "Vrni vrsto obiska iz baze", code = 200, response = VrstaObiska.class)
	public VrstaObiska returnVrstaObiska(@PathParam("id")int id) {
		
		
		return fasada.returnVrstaObiska(id);
	}

	@GET
	@Path("/sorodstvenoRazmerje/{id}")
	@ApiOperation(value = "Vrni sorodstveno razmerje", notes = "Vrni sorodstveno razmerje iz baze", code = 200, response = SorodstvenoRazmerje.class)
	public SorodstvenoRazmerje returnSorodstvenoRazmerje(@PathParam("id")int id) {
		
		
		return fasada.returnSorodstvenoRazmerje(id);
	}

	@GET
	@Path("/bolezen/{id}")
	@ApiOperation(value = "Vrni bolezen", notes = "Vrni bolezen iz baze", code = 200, response = Bolezen.class)
	public Bolezen returnBolezen(@PathParam("id")int id) {
		
		return fasada.returnBolezen(id);
	}
}
