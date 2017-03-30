package si.fri.tpo.v1.viri;

import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.*;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

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
@Consumes({ MediaType.APPLICATION_JSON })
public class SifrantiStoritve implements SifrantiREST {

	@EJB
	private FasadniSBLocal fasada;
	
	// *** create sifrante ***
	
	@POST
	@Path("/zdravilo")
	public void createZdravilo(Zdravilo zdravilo) {
		fasada.createZdravilo(zdravilo);
		fasada.odstraniZrno();

	}

	@POST
	@Path("/material")
	public void createMaterial(Material material) {
		fasada.createMaterial(material);
		fasada.odstraniZrno();

	}

	@POST
	@Path("/spol")
	public void createSpol(Spol spol) {
		fasada.createSpol(spol);
		fasada.odstraniZrno();

	}

	@POST
	@Path("/okolis")
	public void createOkolis(Okolis okolis) {
		fasada.createOkolis(okolis);
		fasada.odstraniZrno();

	}

	@POST
	@Path("/posta")
	public void createPosta(Posta posta) {
		fasada.createPosta(posta);
		fasada.odstraniZrno();

	}

	@POST
	@Path("/vloga")
	public void createVloga(Vloga vloga) {
		fasada.createVloga(vloga);
		fasada.odstraniZrno();

	}

	@POST
	@Path("/vrstaObiska")
	public void createVrstaObiska(VrstaObiska vrstaObiska) {
		fasada.createVrstaObiska(vrstaObiska);
		fasada.odstraniZrno();

	}

	@POST
	@Path("/sorodstvenoRazmerje")
	public void createSorodstvenoRazmerje(SorodstvenoRazmerje sorodstvenoRazmerje) {
		fasada.createSorodstvenoRazmerje(sorodstvenoRazmerje);
		fasada.odstraniZrno();

	}

	// *** vracanje seznama sifrantov ***
	
	@GET
	@Path("/zdravilo")
	public List<Zdravilo> returnZdravilas() {
		List<Zdravilo> list = fasada.returnZdravilas();
		fasada.odstraniZrno();
		return list;
	}

	@GET
	@Path("/material")
	public List<Material> returnMaterials() {
		List<Material> list = fasada.returnMaterials();
		fasada.odstraniZrno();
		return list;
	}

	@GET
	@Path("/spol")
	public List<Spol> returnSpols() {
		List<Spol> list = fasada.returnSpols();
		fasada.odstraniZrno();
		return list;
	}

	@GET
	@Path("/okolis")
	public List<Okolis> returnOkoliss() {
		List<Okolis> list = fasada.returnOkoliss();
		fasada.odstraniZrno();
		return list;
	}

	@GET
	@Path("/posta")
	public List<Posta> returnPostas() {
		List<Posta> list = fasada.returnPostas();
		fasada.odstraniZrno();
		return list;
	}

	@GET
	@Path("/vloga")
	public List<Vloga> returnVlogas() {
		List<Vloga> list = fasada.returnVlogas();
		fasada.odstraniZrno();
		return list;
	}

	@GET
	@Path("/vrstaObiska")
	public List<VrstaObiska> returnVrstaObiskas() {
		List<VrstaObiska> list = fasada.returnVrstaObiskas();
		fasada.odstraniZrno();
		return list;
	}

	@GET
	@Path("/sorodstvenoRazmerje")
	public List<SorodstvenoRazmerje> returnSorodstvenoRazmerjes() {
		List<SorodstvenoRazmerje> list = fasada.returnSorodstvenoRazmerjes();
		fasada.odstraniZrno();
		return list;
	}

	// *** brisanje specificnega sifranta ***
	
	@DELETE
	@Path("/zdravilo/{id}")
	public void deleteZdravilo(@PathParam("id")int id) {
		fasada.deleteZdravilo(id);
		fasada.odstraniZrno();

	}

	@DELETE
	@Path("/material/{id}")
	public void deleteMaterial(@PathParam("id")int id) {
		fasada.deleteMaterial(id);
		fasada.odstraniZrno();

	}

	@DELETE
	@Path("/spol/{id}")
	public void deleteSpol(@PathParam("id")int id) {
		fasada.deleteSpol(id);
		fasada.odstraniZrno();

	}

	@DELETE
	@Path("/okolis/{id}")
	public void deleteOkolis(@PathParam("id")int id) {
		fasada.deleteOkolis(id);
		fasada.odstraniZrno();

	}

	@DELETE
	@Path("/posta/{id}")
	public void deletePosta(@PathParam("id")int id) {
		fasada.deletePosta(id);
		fasada.odstraniZrno();

	}

	@DELETE
	@Path("/vloga/{id}")
	public void deleteVloga(@PathParam("id")int id) {
		fasada.deleteVloga(id);
		fasada.odstraniZrno();

	}

	@DELETE
	@Path("/vrstaObiska/{id}")
	public void deleteVrstaObiska(@PathParam("id")int id) {
		fasada.deleteVrstaObiska(id);
		fasada.odstraniZrno();

	}

	@DELETE
	@Path("/sorodstvenoRazmerje/{id}")
	public void deleteSorodstvenoRazmerje(@PathParam("id")int id) {
		fasada.deleteSorodstvenoRazmerje(id);
		fasada.odstraniZrno();

	}

	// *** update sifrant ***
	
	@PUT
	@Path("/zdravilo")
	public void updateZdravilo(Zdravilo zdravilo) {
		fasada.updateZdravilo(zdravilo);
		fasada.odstraniZrno();

	}

	@PUT
	@Path("/material")
	public void updateMaterial(Material material) {
		fasada.updateMaterial(material);
		fasada.odstraniZrno();
	}

	@PUT
	@Path("/spol")
	public void updateSpol(Spol spol) {
		fasada.updateSpol(spol);
		fasada.odstraniZrno();

	}

	@PUT
	@Path("/okolis")
	public void updateOkolis(Okolis okolis) {
		fasada.updateOkolis(okolis);
		fasada.odstraniZrno();

	}

	@PUT
	@Path("/posta")
	public void updatePosta(Posta posta) {
		fasada.updatePosta(posta);
		fasada.odstraniZrno();

	}

	@PUT
	@Path("/vloga")
	public void updateVloga(Vloga vloga) {
		fasada.updateVloga(vloga);
		fasada.odstraniZrno();

	}

	@PUT
	@Path("/vrstaObiska")
	public void updateVrstaObiska(VrstaObiska vrstaObiska) {
		fasada.updateVrstaObiska(vrstaObiska);
		fasada.odstraniZrno();

	}

	@PUT
	@Path("/sorodstvenoRazmerje")
	public void updateSorodstvenoRazmerje(SorodstvenoRazmerje sorodstvenoRazmerje) {
		fasada.updateSorodstvenoRazmerje(sorodstvenoRazmerje);
		fasada.odstraniZrno();

	}

	// *** vracanje specificnega sifranta ***
	
	@GET
	@Path("/zdravilo/{id}")
	public Zdravilo returnZdravila(@PathParam("id")int id) {
		Zdravilo nov = fasada.returnZdravila(id);
		fasada.odstraniZrno();
		return nov;
	}

	@GET
	@Path("/material/{id}")
	public Material returnMaterial(@PathParam("id")int id) {
		Material nov = fasada.returnMaterial(id);
		fasada.odstraniZrno();
		return nov;
	}

	@GET
	@Path("/spol/{id}")
	public Spol returnSpol(@PathParam("id")int id) {
		Spol nov = fasada.returnSpol(id);
		fasada.odstraniZrno();
		return nov;
	}

	@GET
	@Path("/okolis/{id}")
	public Okolis returnOkolis(@PathParam("id")int id) {
		Okolis nov = fasada.returnOkolis(id);
		fasada.odstraniZrno();
		return nov;
	}

	@GET
	@Path("/posta/{id}")
	public Posta returnPosta(@PathParam("id")int id) {
		Posta nov = fasada.returnPosta(id);
		fasada.odstraniZrno();
		return nov;
	}

	@GET
	@Path("/vloga/{id}")
	public Vloga returnVloga(@PathParam("id")int id) {
		Vloga nov = fasada.returnVloga(id);
		fasada.odstraniZrno();
		return nov;
	}

	@GET
	@Path("/vrstaObiska/{id}")
	public VrstaObiska returnVrstaObiska(@PathParam("id")int id) {
		VrstaObiska nov = fasada.returnVrstaObiska(id);
		fasada.odstraniZrno();
		return nov;
	}

	@GET
	@Path("/sorodstvenoRazmerje/{id}")
	public SorodstvenoRazmerje returnSorodstvenoRazmerje(@PathParam("id")int id) {
		SorodstvenoRazmerje nov = fasada.returnSorodstvenoRazmerje(id);
		fasada.odstraniZrno();
		return nov;
	}

}
