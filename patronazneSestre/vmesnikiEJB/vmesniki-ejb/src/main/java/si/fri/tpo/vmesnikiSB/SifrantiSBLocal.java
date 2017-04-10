package si.fri.tpo.vmesnikiSB;

import java.util.List;

import javax.ejb.Local;

import si.fri.tpo.entitete.*;


//session bean za vse sifrante, ki jih bomo uporabljal
@Local
public interface SifrantiSBLocal {
	
	//klici za dodajanje sifrantov
	void createZdravilo(Zdravilo z);
	void createMaterial(Material m);
	void createSpol(Spol s);
	void createOkolis(Okolis o);
	void createPosta(Posta p);
	void createVloga(Vloga v);
	void createVrstaObiska(VrstaObiska vo);
	void createSorodstvenoRazmerje(SorodstvenoRazmerje sr);
	void createBolezen(Bolezen bolezen);
	
	//klici za pridobivanje sifrantov (list)
	public List<Zdravilo> returnZdravilas();
	public List<Material> returnMaterials();
	public List<Spol> returnSpols();
	public List<Okolis> returnOkoliss();
	public List<Posta> returnPostas();
	public List<Vloga> returnVlogas();
	public List<VrstaObiska> returnVrstaObiskas();
	public List<SorodstvenoRazmerje> returnSorodstvenoRazmerjes();
	public List<Bolezen>returnBolezens(); 
	
	//klici za odstranjevanje
	void deleteZdravilo(int id);
	void deleteMaterial(int id);
	void deleteSpol(int id);
	void deleteOkolis(int id);
	void deletePosta(int id);
	void deleteVloga(int id);
	void deleteVrstaObiska(int id);
	void deleteSorodstvenoRazmerje(int id);
	void deleteBolezen(int id); 
	
	//klici za pridobivanje enega sifranta
	public Zdravilo returnZdravila(int id);
	public Material returnMaterial(int id);
	public Spol returnSpol(int id);
	public Okolis returnOkolis(int id);
	public Posta returnPosta(int id);
	public Vloga returnVloga(int id);
	public VrstaObiska returnVrstaObiska(int id);
	public SorodstvenoRazmerje returnSorodstvenoRazmerje(int id);
	public Bolezen returnBolezen(int id); 
	
	//klici za updatanje sifrantov
	void updateZdravilo(Zdravilo z);
	void updateMaterial(Material m);
	void updateSpol(Spol s);
	void updateOkolis(Okolis o);
	void updatePosta(Posta p);
	void updateVloga(Vloga v);
	void updateVrstaObiska(VrstaObiska vo);
	void updateSorodstvenoRazmerje(SorodstvenoRazmerje sr);
	void updateBolezen(Bolezen bolezen); 
	
	void odstraniZrno();
	List<Okolis> returnOkolissByPosta(int id);
		
}
