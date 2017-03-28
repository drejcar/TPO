package si.fri.tpo.vmesnikiSB;

import java.util.List;

import javax.ejb.Local;

import si.fri.tpo.entitete.DelovniNalog;
import si.fri.tpo.entitete.Material;
import si.fri.tpo.entitete.Okolis;
import si.fri.tpo.entitete.Posta;
import si.fri.tpo.entitete.SorodstvenoRazmerje;
import si.fri.tpo.entitete.Spol;
import si.fri.tpo.entitete.Uporabnik;
import si.fri.tpo.entitete.Vloga;
import si.fri.tpo.entitete.VrstaObiska;
import si.fri.tpo.entitete.Zdravilo;

//interface za fasadno zrno
@Local
public interface FasadniSBLocal {
	
	//funkcije za Uporabnika
	void shraniNovegaUporabnika(Uporabnik u); //kreiranje novega uporabnika
	void updateUporabnika(Uporabnik u); //za updatanje gesla
	void odstraniUporabnik(int id); //odstranjevanje uporabnika po id-ju
	
	//funkcije za DelovniNalog
	void dodajDelovniNalog(DelovniNalog dn); //dodajanje novega delovnega naloga
	void updateDelovniNalog(DelovniNalog dn); //updatanje ze obstojecega delovnega naloga
	void deleteDelovniNalog(int id); //odstranjevanje delovnega naloga po id-ju
	
	//**funkcije za Sifrante**
	
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
	
	//funkcija za odstranjevanje fasadnega zrna
	void odstraniZrno(); //za odstranjevanje zrna
	
}
