package si.fri.tpo.vmesniki_ws;

import java.util.List;
import javax.xml.ws.Response;
import si.fri.tpo.entitete.*;

public interface SifrantiREST {
	
	void createZdravilo(Zdravilo zdravilo);
	void createMaterial(Material material);
	void createSpol(Spol spol);
	void createOkolis(Okolis okolis);
	void createPosta(Posta posta);
	void createVloga(Vloga vloga);
	void createVrstaObiska(VrstaObiska vrstaObiska);
	void createSorodstvenoRazmerje(SorodstvenoRazmerje sorodstvenoRazmerje);
	void createBolezen(Bolezen bolezen);
	
	public List<Zdravilo> returnZdravilas();
	public List<Material> returnMaterials();
	public List<Spol> returnSpols();
	public List<Okolis> returnOkoliss();
	public List<Posta> returnPostas();
	public List<Vloga> returnVlogas();
	public List<VrstaObiska> returnVrstaObiskas();
	public List<SorodstvenoRazmerje> returnSorodstvenoRazmerjes();
	public List<Bolezen> returnBolezens();
	
	void deleteZdravilo(int id);
	void deleteMaterial(int id);
	void deleteSpol(int id);
	void deleteOkolis(int id);
	void deletePosta(int id);
	void deleteVloga(int id);
	void deleteVrstaObiska(int id);
	void deleteSorodstvenoRazmerje(int id);
	void deleteBolezen(int id);
	
	void updateZdravilo(Zdravilo zdravilo);
	void updateMaterial(Material material);
	void updateSpol(Spol spol);
	void updateOkolis(Okolis okolis);
	void updatePosta(Posta posta);
	void updateVloga(Vloga vloga);
	void updateVrstaObiska(VrstaObiska vrstaObiska);
	void updateSorodstvenoRazmerje(SorodstvenoRazmerje sorodstvenoRazmerje);
	void updateBolezen(Bolezen bolezen);
	
	public Zdravilo returnZdravila(int id);
	public Material returnMaterial(int id);
	public Spol returnSpol(int id);
	public Okolis returnOkolis(int id);
	public Posta returnPosta(int id);
	public Vloga returnVloga(int id);
	public VrstaObiska returnVrstaObiska(int id);
	public SorodstvenoRazmerje returnSorodstvenoRazmerje(int id);
	public Bolezen returnBolezen(int id);
	
}
