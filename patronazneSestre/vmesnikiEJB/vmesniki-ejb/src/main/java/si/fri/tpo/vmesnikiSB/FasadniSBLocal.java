package si.fri.tpo.vmesnikiSB;

import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.ejb.Local;

import si.fri.tpo.entitete.Bolezen;
import si.fri.tpo.entitete.DelovniNalog;
import si.fri.tpo.entitete.IzvajalecZdravstvenihStoritev;
import si.fri.tpo.entitete.Kontakt;
import si.fri.tpo.entitete.Material;
import si.fri.tpo.entitete.Okolis;
import si.fri.tpo.entitete.Pacient;
import si.fri.tpo.entitete.Posta;
import si.fri.tpo.entitete.SorodstvenoRazmerje;
import si.fri.tpo.entitete.Spol;
import si.fri.tpo.entitete.Uporabnik;
import si.fri.tpo.entitete.Vloga;
import si.fri.tpo.entitete.VrstaObiska;
import si.fri.tpo.entitete.Zdravilo;
import si.fri.tpo.entitete.ZdravstveniDelavec;

//interface za fasadno zrno
@Local
public interface FasadniSBLocal {
	
	//funkcije za Uporabnika
	public Uporabnik najdiUporabnik(int id); //vrni specificnega uporabnika
	public List<Uporabnik> najdiUporabniks(); //vrni seznam uporabnikov
	void shraniNovegaUporabnika(Uporabnik u); //kreiranje novega uporabnika
	void updateUporabnika(Uporabnik u); //za updatanje gesla
	void deleteUporabnik(int id); //odstranjevanje uporabnika po id-ju
	public Uporabnik returnUporabnikEmail(String email); //vracanje uporabnika (login)
	
	//funkcije za DelovniNalog
	public DelovniNalog vrniDelovniNalog(int id); //vrni specificni delovni nalog
	public List<DelovniNalog> vrniDelovniNalogs(); //vrni seznam delovnih nalogov
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
	
		//klici za zdravstvene delavce
		public ZdravstveniDelavec returnZdravstveniDelavec(int id);
		void deleteZdravstveniDelavec(int id); //brisanje zdravstvenega delavca
		public List<ZdravstveniDelavec> returnZdravstveniDelavecs(); //vracanje liste zdravstvenih delavcev
		void updateZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec); // update zdravstvenih delavcev
		void createZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec); // kreiranje novega zdravstvenega delavca
		
		//klici za paciente
		public Pacient returnPacient(int id); // vracanje specificnega pacienta
		public List<Pacient> returnPacients(); // vracanje seznama pacientov
		void createPacient(Pacient pacient); // kreiranje novega pacienta
		void updatePacient(Pacient pacient); //updatanje pacienta
		void deletePacient(int id); // brisanje pacienta
		public Pacient returnPacientZZ(String stevilkaZZ); // vracanje pacienta glede na stevilkoZZ
		
		//klici za kontakt
		public Kontakt returnKontakt(int id); //klic za vracanje enega kontakta
		public List<Kontakt> returnKontakts(); //klic za vracanje seznama kontaktov
		void createKontakt(Kontakt kontakt); //klic za kreiranje novega kontakta
		void updateKontakt(Kontakt kontakt); //klic za updatanje kontakta
		void deleteKontakt(int id); //klic za brisanje specificnega kontakta
		
		//klici za izvajalca Zdravstvenih Storitev
		public IzvajalecZdravstvenihStoritev returnIzvajalecZdravstvenihStoritev(int id); //klic za vracanje specificnega izvajalca
		public List<IzvajalecZdravstvenihStoritev> returnIzvajalecZdravstvenihStoritevs(); //klic za vracanje seznam izvajalcev
		void createIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev); //klic za kreiranje novega izvajalca 
		void updateIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev); //klic za updatanje izvajalca
		void deleteIzvajalecZdravstvenihStoritev(int id); //klic za brisanje specificnega izvajalca
	
		//klic za odstranjevanje zrna
		void odstraniZrno();
		public List<Okolis> returnOkolissByPosta(int id);
		public void posodobiZadnjoPrijavo(int id);
		public List<DelovniNalog> vrniDelovneNalogeZdrDel(int id, Date ood, Date doo, int start, int size);
		public List<DelovniNalog> vrniDelovneNalogeZdrDelAll(int id, int start, int size);
		public List<ZdravstveniDelavec> returnPatronazneSestre(int id);
}
