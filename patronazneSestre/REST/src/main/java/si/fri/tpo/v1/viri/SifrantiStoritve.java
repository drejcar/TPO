package si.fri.tpo.v1.viri;

import java.util.List;

import javax.annotation.security.PermitAll;
import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.*;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

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
public class SifrantiStoritve implements SifrantiREST {

	@EJB
	private FasadniSBLocal fasada;
	
	// *** create sifrante ***
	
	@POST
	@Path("/zdravilo")
	public void createZdravilo(Zdravilo zdravilo) {
		fasada.createZdravilo(zdravilo);
		

	}

	@POST
	@Path("/material")
	public void createMaterial(Material material) {
		fasada.createMaterial(material);
		

	}

	@POST
	@Path("/spol")
	public void createSpol(Spol spol) {
		fasada.createSpol(spol);
		

	}

	@POST
	@Path("/okolis")
	public void createOkolis(Okolis okolis) {
		fasada.createOkolis(okolis);
		

	}

	@POST
	@Path("/posta")
	public void createPosta(Posta posta) {
		fasada.createPosta(posta);
		

	}

	@POST
	@Path("/vloga")
	public void createVloga(Vloga vloga) {
		fasada.createVloga(vloga);
		

	}

	@POST
	@Path("/vrstaObiska")
	public void createVrstaObiska(VrstaObiska vrstaObiska) {
		fasada.createVrstaObiska(vrstaObiska);
		

	}

	@POST
	@Path("/sorodstvenoRazmerje")
	public void createSorodstvenoRazmerje(SorodstvenoRazmerje sorodstvenoRazmerje) {
		fasada.createSorodstvenoRazmerje(sorodstvenoRazmerje);
		

	}

	@POST
	@Path("/bolezen")
	public void createBolezen(Bolezen bolezen) {
		fasada.createBolezen(bolezen);
		
	}
	
	// *** vracanje seznama sifrantov ***
	
	@GET
	@Path("/zdravilo")
	public List<Zdravilo> returnZdravilas() {
		
		
		return fasada.returnZdravilas();
	}

	@GET
	@Path("/material")
	public List<Material> returnMaterials() {
		
		
		return fasada.returnMaterials();
	}

	@GET
	@Path("/spol")
	public List<Spol> returnSpols() {
		
		
		return fasada.returnSpols();
	}

	@GET
	@Path("/okolis")
	public List<Okolis> returnOkoliss() {
		
		
		return fasada.returnOkoliss();
	}

	@GET
	@Path("/posta")
	public List<Posta> returnPostas() {
		
		
		return fasada.returnPostas();
	}

	@GET
	@Path("/vloga")
	public List<Vloga> returnVlogas() {
		return fasada.returnVlogas();
		
	}

	@GET
	@Path("/vrstaObiska")
	public List<VrstaObiska> returnVrstaObiskas() {
		
		
		return fasada.returnVrstaObiskas();
	}

	@GET
	@Path("/sorodstvenoRazmerje")
	public List<SorodstvenoRazmerje> returnSorodstvenoRazmerjes() {
		
		
		return fasada.returnSorodstvenoRazmerjes();
	}

	@GET
	@Path("/bolezen/")
	public List<Bolezen> returnBolezens() {
		
		return fasada.returnBolezens();
	}
	
	// *** brisanje specificnega sifranta ***
	
	@DELETE
	@Path("/zdravilo/{id}")
	public void deleteZdravilo(@PathParam("id")int id) {
		fasada.deleteZdravilo(id);
		

	}

	@DELETE
	@Path("/material/{id}")
	public void deleteMaterial(@PathParam("id")int id) {
		fasada.deleteMaterial(id);
		

	}

	@DELETE
	@Path("/spol/{id}")
	public void deleteSpol(@PathParam("id")int id) {
		fasada.deleteSpol(id);
		

	}

	@DELETE
	@Path("/okolis/{id}")
	public void deleteOkolis(@PathParam("id")int id) {
		fasada.deleteOkolis(id);
		

	}

	@DELETE
	@Path("/posta/{id}")
	public void deletePosta(@PathParam("id")int id) {
		fasada.deletePosta(id);
		

	}

	@DELETE
	@Path("/vloga/{id}")
	public void deleteVloga(@PathParam("id")int id) {
		fasada.deleteVloga(id);
		

	}

	@DELETE
	@Path("/vrstaObiska/{id}")
	public void deleteVrstaObiska(@PathParam("id")int id) {
		fasada.deleteVrstaObiska(id);
		

	}

	@DELETE
	@Path("/sorodstvenoRazmerje/{id}")
	public void deleteSorodstvenoRazmerje(@PathParam("id")int id) {
		fasada.deleteSorodstvenoRazmerje(id);
		

	}

	@DELETE
	@Path("/bolezen/{id}")
	public void deleteBolezen(@PathParam("id")int id) {
		fasada.deleteBolezen(id);
		
	}
	
	// *** update sifrant ***
	
	@PUT
	@Path("/zdravilo")
	public void updateZdravilo(Zdravilo zdravilo) {
		fasada.updateZdravilo(zdravilo);
		

	}

	@PUT
	@Path("/material")
	public void updateMaterial(Material material) {
		fasada.updateMaterial(material);
		
	}

	@PUT
	@Path("/spol")
	public void updateSpol(Spol spol) {
		fasada.updateSpol(spol);
		

	}

	@PUT
	@Path("/okolis")
	public void updateOkolis(Okolis okolis) {
		fasada.updateOkolis(okolis);
		

	}

	@PUT
	@Path("/posta")
	public void updatePosta(Posta posta) {
		fasada.updatePosta(posta);
		

	}

	@PUT
	@Path("/vloga")
	public void updateVloga(Vloga vloga) {
		fasada.updateVloga(vloga);
		

	}

	@PUT
	@Path("/vrstaObiska")
	public void updateVrstaObiska(VrstaObiska vrstaObiska) {
		fasada.updateVrstaObiska(vrstaObiska);
		

	}

	@PUT
	@Path("/sorodstvenoRazmerje")
	public void updateSorodstvenoRazmerje(SorodstvenoRazmerje sorodstvenoRazmerje) {
		fasada.updateSorodstvenoRazmerje(sorodstvenoRazmerje);
		

	}
	
	@PUT
	@Path("/bolezen/")
	public void updateBolezen(Bolezen bolezen) {
		fasada.updateBolezen(bolezen);
		
	}

	// *** vracanje specificnega sifranta ***
	
	@GET
	@Path("/zdravilo/{id}")
	public Zdravilo returnZdravila(@PathParam("id")int id) {
		
		return fasada.returnZdravila(id);
	}

	@GET
	@Path("/material/{id}")
	public Material returnMaterial(@PathParam("id")int id) {
		
		return fasada.returnMaterial(id);
	}

	@GET
	@Path("/spol/{id}")
	public Spol returnSpol(@PathParam("id")int id) {
		
		
		return fasada.returnSpol(id);
	}

	@GET
	@Path("/okolis/{id}")
	public Okolis returnOkolis(@PathParam("id")int id) {
		
		
		return fasada.returnOkolis(id);
	}

	@GET
	@Path("/posta/{id}")
	public Posta returnPosta(@PathParam("id")int id) {
		
		
		return fasada.returnPosta(id);
	}

	@GET
	@Path("/vloga/{id}")
	public Vloga returnVloga(@PathParam("id")int id) {
		
		
		return fasada.returnVloga(id);
	}

	@GET
	@Path("/vrstaObiska/{id}")
	public VrstaObiska returnVrstaObiska(@PathParam("id")int id) {
		
		
		return fasada.returnVrstaObiska(id);
	}

	@GET
	@Path("/sorodstvenoRazmerje/{id}")
	public SorodstvenoRazmerje returnSorodstvenoRazmerje(@PathParam("id")int id) {
		
		
		return fasada.returnSorodstvenoRazmerje(id);
	}

	@GET
	@Path("/bolezen/{id}")
	public Bolezen returnBolezen(@PathParam("id")int id) {
		
		return fasada.returnBolezen(id);
	}
}
