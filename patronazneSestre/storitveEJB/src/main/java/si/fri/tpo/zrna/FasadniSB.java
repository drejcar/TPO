package si.fri.tpo.zrna;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import javax.annotation.security.DeclareRoles;
import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.annotation.security.RunAs;
import javax.annotation.*;
import javax.ejb.EJB;
import javax.ejb.Remove;
import javax.ejb.Stateless;
import javax.interceptor.ExcludeDefaultInterceptors;

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
import si.fri.tpo.vmesnikiSB.DelovniNalogSBLocal;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesnikiSB.FasadniSBRemote;
import si.fri.tpo.vmesnikiSB.IzvajalecZdravstvenihStoritevSBLocal;
import si.fri.tpo.vmesnikiSB.KontaktSBLocal;
import si.fri.tpo.vmesnikiSB.PacientSBLocal;
import si.fri.tpo.vmesnikiSB.SifrantiSBLocal;
import si.fri.tpo.vmesnikiSB.UporabnikSBLocal;
import si.fri.tpo.vmesnikiSB.ZdravstveniDelavecSBLocal;

/**
 * Session Bean implementation class FasadniSB
 */
@Stateless
@DeclareRoles({"Administrator","Pacient","PatronaznaSestra","PatronaznaSluzba","SodelavecIZS","Zdravnik"})
@PermitAll
public class FasadniSB implements FasadniSBRemote, FasadniSBLocal {

	@EJB
	private UporabnikSBLocal uporabnik;
	@EJB
	private SifrantiSBLocal sifranti;
	@EJB
	private DelovniNalogSBLocal delovniNalog;
	@EJB
	private ZdravstveniDelavecSBLocal zdravstveniDelavc;
	@EJB
	private PacientSBLocal pacienti;
	@EJB
	private KontaktSBLocal kontakti;
	@EJB
	private IzvajalecZdravstvenihStoritevSBLocal izs;

	/**
	 * Default constructor.
	 */
	public FasadniSB() {

	}

	// *** klici za Uporabnika **
	@Override
	@PermitAll
	public Uporabnik najdiUporabnik(int id) {
		Uporabnik nov = uporabnik.najdiUporabnik(id);
		uporabnik.odstraniZrno();
		return nov;
	}

	@Override
	@PermitAll
	public List<Uporabnik> najdiUporabniks() {
		List<Uporabnik> list = uporabnik.najdiUporabniks();
		uporabnik.odstraniZrno();
		return list;
	}

	@Override
	@PermitAll
	public void shraniNovegaUporabnika(Uporabnik u) {
		uporabnik.shraniNovegaUporabnika(u);
		uporabnik.odstraniZrno();

	}

	@Override
	@PermitAll
	public void updateUporabnika(Uporabnik u) {
		uporabnik.updateUporabnika(u);
		uporabnik.odstraniZrno();

	}

	@Override
	@PermitAll
	public void deleteUporabnik(int id) {
		uporabnik.odstraniUporabnik(id);
		uporabnik.odstraniZrno();

	}

	// *** klici za delovni nalog ***

	@Override
	@PermitAll
	public DelovniNalog vrniDelovniNalog(int id) {
		DelovniNalog nov = delovniNalog.vrniDelovniNalog(id);
		delovniNalog.odstraniZrno();
		return nov;
	}

	@Override
	@PermitAll
	public List<DelovniNalog> vrniDelovniNalogs() {
		List<DelovniNalog> list = delovniNalog.vrniDelovniNalogs();
		delovniNalog.odstraniZrno();
		return list;
	}

	@Override
	@PermitAll
	public void dodajDelovniNalog(DelovniNalog dn) {
		delovniNalog.dodajDelovniNalog(dn);
		delovniNalog.odstraniZrno();

	}

	@Override
	@PermitAll
	public void updateDelovniNalog(DelovniNalog dn) {
		delovniNalog.updateDelovniNalog(dn);
		delovniNalog.odstraniZrno();

	}

	@Override
	@PermitAll
	public void deleteDelovniNalog(int id) {
		delovniNalog.deleteDelovniNalog(id);
		delovniNalog.odstraniZrno();

	}

	// *** klici za kreiranje sifrantov ***

	// zdravilo
	@Override
	@PermitAll
	public void createZdravilo(Zdravilo z) {
		sifranti.createZdravilo(z);
		sifranti.odstraniZrno();

	}

	// material
	@Override
	@PermitAll
	public void createMaterial(Material m) {
		sifranti.createMaterial(m);
		sifranti.odstraniZrno();

	}

	// spol
	@Override
	@PermitAll
	public void createSpol(Spol s) {
		sifranti.createSpol(s);
		sifranti.odstraniZrno();

	}

	// okolis
	@Override
	@PermitAll
	public void createOkolis(Okolis o) {
		sifranti.createOkolis(o);
		sifranti.odstraniZrno();

	}

	// posta
	@Override
	@PermitAll
	public void createPosta(Posta p) {
		sifranti.createPosta(p);
		sifranti.odstraniZrno();

	}

	// vloga
	@Override
	@PermitAll
	public void createVloga(Vloga v) {
		sifranti.createVloga(v);
		sifranti.odstraniZrno();

	}

	// vrsta obiska
	@Override
	@PermitAll
	public void createVrstaObiska(VrstaObiska vo) {
		sifranti.createVrstaObiska(vo);
		sifranti.odstraniZrno();

	}

	// sorodstvenoRazmerje
	@Override
	@PermitAll
	public void createSorodstvenoRazmerje(SorodstvenoRazmerje sr) {
		sifranti.createSorodstvenoRazmerje(sr);
		sifranti.odstraniZrno();

	}

	// bolezen
	@Override
	@PermitAll
	public void createBolezen(Bolezen bolezen) {
		sifranti.createBolezen(bolezen);
		sifranti.odstraniZrno();

	}

	// *** klici za vracanje seznama sifrantov ***

	// zdravilo
	@Override
	@PermitAll
	public List<Zdravilo> returnZdravilas() {
		List<Zdravilo> list = sifranti.returnZdravilas();
		sifranti.odstraniZrno();
		return list;
	}

	// material
	@Override
	@PermitAll
	public List<Material> returnMaterials() {
		List<Material> list = sifranti.returnMaterials();
		sifranti.odstraniZrno();
		return list;
	}

	// spol
	@Override
	@RolesAllowed({ "Administrator" })
	public List<Spol> returnSpols() {
		List<Spol> list = sifranti.returnSpols();
		sifranti.odstraniZrno();
		return list;
		
	}

	// okolis
	@Override
	@PermitAll
	public List<Okolis> returnOkoliss() {
		List<Okolis> list = sifranti.returnOkoliss();
		sifranti.odstraniZrno();
		return list;
	}

	// posta
	@Override
	@PermitAll
	public List<Posta> returnPostas() {
		List<Posta> list = sifranti.returnPostas();
		sifranti.odstraniZrno();
		return list;
	}

	// vloga
	@Override
	@PermitAll
	public List<Vloga> returnVlogas() {
		List<Vloga> list = sifranti.returnVlogas();
		sifranti.odstraniZrno();
		return list;
	}

	// vrstaObiska
	@Override
	@PermitAll
	public List<VrstaObiska> returnVrstaObiskas() {
		List<VrstaObiska> list = sifranti.returnVrstaObiskas();
		sifranti.odstraniZrno();
		return list;
	}

	// sorodstvenoRazmerje
	@Override
	@PermitAll
	public List<SorodstvenoRazmerje> returnSorodstvenoRazmerjes() {
		List<SorodstvenoRazmerje> list = sifranti.returnSorodstvenoRazmerjes();
		sifranti.odstraniZrno();
		return list;
	}

	// bolezen
	@Override
	@PermitAll
	public List<Bolezen> returnBolezens() {
		List<Bolezen> list = sifranti.returnBolezens();
		sifranti.odstraniZrno();
		return list;
	}

	// *** klici za brisanje sifrantov ***

	// zdravilo
	@Override
	@PermitAll
	public void deleteZdravilo(int id) {
		sifranti.deleteZdravilo(id);
		sifranti.odstraniZrno();

	}

	// material
	@Override
	@PermitAll
	public void deleteMaterial(int id) {
		sifranti.deleteMaterial(id);
		sifranti.odstraniZrno();

	}

	// spol
	@Override
	@PermitAll
	public void deleteSpol(int id) {
		sifranti.deleteSpol(id);
		sifranti.odstraniZrno();

	}

	// okolis
	@Override
	@PermitAll
	public void deleteOkolis(int id) {
		sifranti.deleteOkolis(id);
		sifranti.odstraniZrno();

	}

	// posta
	@Override
	@PermitAll
	public void deletePosta(int id) {
		sifranti.deletePosta(id);
		sifranti.odstraniZrno();

	}

	// vloga
	@Override
	@PermitAll
	public void deleteVloga(int id) {
		sifranti.deleteVloga(id);
		sifranti.odstraniZrno();

	}

	// vrstaObiska
	@Override
	@PermitAll
	public void deleteVrstaObiska(int id) {
		sifranti.deleteVrstaObiska(id);
		sifranti.odstraniZrno();

	}

	// sorodstvenoRazmerje
	@Override
	@PermitAll
	public void deleteSorodstvenoRazmerje(int id) {
		sifranti.deleteSorodstvenoRazmerje(id);
		sifranti.odstraniZrno();

	}

	// bolezen
	@Override
	@PermitAll
	public void deleteBolezen(int id) {
		sifranti.deleteBolezen(id);
		sifranti.odstraniZrno();
	}

	// *** klici za vracanje specificnega sifranta ***

	// zdravilo
	@Override
	@PermitAll
	public Zdravilo returnZdravila(int id) {
		Zdravilo zdr = sifranti.returnZdravila(id);
		sifranti.odstraniZrno();
		return zdr;
	}

	// material
	@Override
	@PermitAll
	public Material returnMaterial(int id) {
		Material eno = sifranti.returnMaterial(id);
		sifranti.odstraniZrno();
		return eno;
	}

	// spol
	@Override
	@RolesAllowed({ "PatronaznaSestra" })
	public Spol returnSpol(int id) {
		Spol eno = sifranti.returnSpol(id);
		sifranti.odstraniZrno();
		return eno;
	}

	// okolis
	@Override
	@PermitAll
	public Okolis returnOkolis(int id) {
		Okolis eno = sifranti.returnOkolis(id);
		sifranti.odstraniZrno();
		return eno;
	}

	// posta
	@Override
	@PermitAll
	public Posta returnPosta(int id) {
		Posta eno = sifranti.returnPosta(id);
		sifranti.odstraniZrno();
		return eno;
	}

	// vloga
	@Override
	@PermitAll
	public Vloga returnVloga(int id) {
		Vloga eno = sifranti.returnVloga(id);
		sifranti.odstraniZrno();
		return eno;
	}

	// vrstaObiska
	@Override
	@PermitAll
	public VrstaObiska returnVrstaObiska(int id) {
		VrstaObiska eno = sifranti.returnVrstaObiska(id);
		sifranti.odstraniZrno();
		return eno;
	}

	// sorodstvenoRazmerje
	@Override
	@PermitAll
	public SorodstvenoRazmerje returnSorodstvenoRazmerje(int id) {
		SorodstvenoRazmerje eno = sifranti.returnSorodstvenoRazmerje(id);
		sifranti.odstraniZrno();
		return eno;
	}

	// bolezen
	@Override
	@PermitAll
	public Bolezen returnBolezen(int id) {
		Bolezen nova = sifranti.returnBolezen(id);
		sifranti.odstraniZrno();
		return nova;
	}

	// *** klici za updatanje sifrantov ***

	// zdravilo
	@Override
	@PermitAll
	public void updateZdravilo(Zdravilo z) {
		sifranti.updateZdravilo(z);
		sifranti.odstraniZrno();

	}

	// material
	@Override
	@PermitAll
	public void updateMaterial(Material m) {
		sifranti.updateMaterial(m);
		sifranti.odstraniZrno();

	}

	// spol
	@Override
	@PermitAll
	public void updateSpol(Spol s) {
		sifranti.updateSpol(s);
		sifranti.odstraniZrno();

	}

	// okolis
	@Override
	@PermitAll
	public void updateOkolis(Okolis o) {
		sifranti.updateOkolis(o);
		sifranti.odstraniZrno();

	}

	// posta
	@Override
	@PermitAll
	public void updatePosta(Posta p) {
		sifranti.updatePosta(p);
		sifranti.odstraniZrno();

	}

	// vloga
	@Override
	@PermitAll
	public void updateVloga(Vloga v) {
		sifranti.updateVloga(v);
		sifranti.odstraniZrno();

	}

	// vrstaObiska
	@Override
	@PermitAll
	public void updateVrstaObiska(VrstaObiska vo) {
		sifranti.updateVrstaObiska(vo);
		sifranti.odstraniZrno();

	}

	// sorodstvenoRazmerje
	@Override
	@PermitAll
	public void updateSorodstvenoRazmerje(SorodstvenoRazmerje sr) {
		sifranti.updateSorodstvenoRazmerje(sr);
		sifranti.odstraniZrno();

	}

	// bolezen
	@Override
	@PermitAll
	public void updateBolezen(Bolezen bolezen) {
		sifranti.updateBolezen(bolezen);
		sifranti.odstraniZrno();

	}

	// *** klici za ZdravstveneDelavce ***

	@Override
	@PermitAll
	public void deleteZdravstveniDelavec(int id) {
		zdravstveniDelavc.deleteZdravstveniDelavec(id);
		zdravstveniDelavc.odstraniZrno();

	}

	@Override
	@PermitAll
	public List<ZdravstveniDelavec> returnZdravstveniDelavecs() {
		List<ZdravstveniDelavec> list = zdravstveniDelavc.returnZdravstveniDelavecs();
		zdravstveniDelavc.odstraniZrno();
		return list;

	}

	@Override
	@PermitAll
	public void updateZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec) {
		zdravstveniDelavc.updateZdravstveniDelavec(zdravstveniDelavec);
		zdravstveniDelavc.odstraniZrno();

	}

	@Override
	@PermitAll
	public void createZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec) {
		zdravstveniDelavc.createZdravstveniDelavec(zdravstveniDelavec);
		zdravstveniDelavc.odstraniZrno();

	}

	@Override
	@PermitAll
	public ZdravstveniDelavec returnZdravstveniDelavec(int id) {
		ZdravstveniDelavec nov = zdravstveniDelavc.returnZdravstveniDelavec(id);
		zdravstveniDelavc.odstraniZrno();
		return nov;
	}

	// *** klici za Pacient ***

	@Override
	@PermitAll
	public Pacient returnPacient(int id) {
		Pacient nov = pacienti.returnPacient(id);
		pacienti.odstraniZrno();
		return nov;
	}

	@Override
	@PermitAll
	public List<Pacient> returnPacients() {
		List<Pacient> list = pacienti.returnPacients();
		pacienti.odstraniZrno();
		return list;
	}

	@Override
	@PermitAll
	public void createPacient(Pacient pacient) {
		pacienti.createPacient(pacient);
		pacienti.odstraniZrno();

	}

	@Override
	@PermitAll
	public void updatePacient(Pacient pacient) {
		pacienti.updatePacient(pacient);
		pacienti.odstraniZrno();

	}

	@Override
	@PermitAll
	public void deletePacient(int id) {
		pacienti.deletePacient(id);
		pacienti.odstraniZrno();

	}

	// *** klici za kontakt ***

	@Override
	@PermitAll
	public Kontakt returnKontakt(int id) {
		Kontakt nov = kontakti.returnKontakt(id);
		kontakti.odstraniZrno();
		return nov;
	}

	@Override
	@PermitAll
	public List<Kontakt> returnKontakts() {
		List<Kontakt> list = kontakti.returnKontakts();
		kontakti.odstraniZrno();
		return list;
	}

	@Override
	@PermitAll
	public void createKontakt(Kontakt kontakt) {
		kontakti.createKontakt(kontakt);
		kontakti.odstraniZrno();
	}

	@Override
	@PermitAll
	public void updateKontakt(Kontakt kontakt) {
		kontakti.updateKontakt(kontakt);
		kontakti.odstraniZrno();
	}

	@Override
	@PermitAll
	public void deleteKontakt(int id) {
		kontakti.deleteKontakt(id);
		kontakti.odstraniZrno();

	}

	// *** klici za Izvajalca zdravstvenih storitev ***

	@Override
	@PermitAll
	public IzvajalecZdravstvenihStoritev returnIzvajalecZdravstvenihStoritev(int id) {
		IzvajalecZdravstvenihStoritev nov = izs.returnIzvajalecZdravstvenihStoritev(id);
		izs.odstraniZrno();
		return nov;
	}

	@Override
	@PermitAll
	public List<IzvajalecZdravstvenihStoritev> returnIzvajalecZdravstvenihStoritevs() {
		List<IzvajalecZdravstvenihStoritev> list = izs.returnIzvajalecZdravstvenihStoritevs();
		izs.odstraniZrno();
		return list;
	}

	@Override
	@PermitAll
	public void createIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev) {
		izs.createIzvajalecZdravstvenihStoritev(izvajalecZdravstvenihStoritev);
		izs.odstraniZrno();

	}

	@Override
	@PermitAll
	public void updateIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev) {
		izs.updateIzvajalecZdravstvenihStoritev(izvajalecZdravstvenihStoritev);
		izs.odstraniZrno();

	}

	@Override
	@PermitAll
	public void deleteIzvajalecZdravstvenihStoritev(int id) {
		izs.deleteIzvajalecZdravstvenihStoritev(id);
		izs.odstraniZrno();

	}

	
	//klic za odstranjevanje zrna
	@Remove
	@PermitAll
	public void odstraniZrno() {
		
		
	}

}
