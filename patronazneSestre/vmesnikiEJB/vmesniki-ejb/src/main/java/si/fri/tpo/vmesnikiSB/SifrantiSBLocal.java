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
	
	//klici za pridobivanje sifrantov (list)
	List<Zdravilo> returnZdravilas();
	List<Material> returnMaterials();
	List<Spol> returnSpols();
	List<Okolis> returnOkoliss();
	List<Posta> returnPostas();
	List<Vloga> returnVlogas();
	List<VrstaObiska> returnVrstaObiskas();
	List<SorodstvenoRazmerje> returnSorodstvenoRazmerjes();
	
	//klici za odstranjevanje
	void deleteZdravilo(int id);
	void deleteMaterial(int id);
	void deleteSpol(int id);
	void deleteOkolis(int id);
	void deletePosta(int id);
	void deleteVloga(int id);
	void deleteVrstaObiska(int id);
	void deleteSorodstvenoRazmerje(int id);
	
	//klici za pridobivanje enega sifranta
	Zdravilo returnZdravila(int id);
	Material returnMaterial(int id);
	Spol returnSpol(int id);
	Okolis returnOkolis(int id);
	Posta returnPosta(int id);
	Vloga returnVloga(int id);
	VrstaObiska returnVrstaObiska(int id);
	SorodstvenoRazmerje returnSorodstvenoRazmerje(int id);
	
	//klici za updatanje sifrantov
	void updateZdravilo(Zdravilo z);
	void updateMaterial(Material m);
	void updateSpol(Spol s);
	void updateOkolis(Okolis o);
	void updatePosta(Posta p);
	void updateVloga(Vloga v);
	void updateVrstaObiska(VrstaObiska vo);
	void updateSorodstvenoRazmerje(SorodstvenoRazmerje sr);
	
	void odstraniZrno();
		
}
