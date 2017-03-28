package si.fri.tpo.zrna;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;

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
import si.fri.tpo.vmesnikiSB.DelovniNalogSBLocal;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesnikiSB.FasadniSBRemote;
import si.fri.tpo.vmesnikiSB.SifrantiSBLocal;
import si.fri.tpo.vmesnikiSB.UporabnikSBLocal;

/**
 * Session Bean implementation class FasadniSB
 */
@Stateless
public class FasadniSB implements FasadniSBRemote, FasadniSBLocal {

	@EJB
	private UporabnikSBLocal uporabnik;
	@EJB
	private SifrantiSBLocal sifranti;
	@EJB
	private DelovniNalogSBLocal delovniNalog;
	
    /**
     * Default constructor. 
     */
    public FasadniSB() {
       
    }

    
	@Override
	public void shraniNovegaUporabnika(Uporabnik u) {
		uporabnik.shraniNovegaUporabnika(u);
		uporabnik.odstraniZrno();
		
	}

	@Override
	public void updateUporabnika(Uporabnik u) {
		uporabnik.updateUporabnika(u);
		uporabnik.odstraniZrno();
		
		
	}

	@Override
	public void odstraniUporabnik(int id) {
		uporabnik.odstraniUporabnik(id);
		uporabnik.odstraniZrno();
		
	}

	@Override
	public void dodajDelovniNalog(DelovniNalog dn) {
		delovniNalog.dodajDelovniNalog(dn);
		delovniNalog.odstraniZrno();
		
	}

	@Override
	public void updateDelovniNalog(DelovniNalog dn) {
		delovniNalog.updateDelovniNalog(dn);
		delovniNalog.odstraniZrno();
		
	}

	@Override
	public void deleteDelovniNalog(int id) {
		delovniNalog.deleteDelovniNalog(id);
		delovniNalog.odstraniZrno();
		
	}

	@Override
	public void createZdravilo(Zdravilo z) {
		sifranti.createZdravilo(z);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void createMaterial(Material m) {
		sifranti.createMaterial(m);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void createSpol(Spol s) {
		sifranti.createSpol(s);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void createOkolis(Okolis o) {
		sifranti.createOkolis(o);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void createPosta(Posta p) {
		sifranti.createPosta(p);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void createVloga(Vloga v) {
		sifranti.createVloga(v);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void createVrstaObiska(VrstaObiska vo) {
		sifranti.createVrstaObiska(vo);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void createSorodstvenoRazmerje(SorodstvenoRazmerje sr) {
		sifranti.createSorodstvenoRazmerje(sr);
		sifranti.odstraniZrno();
		
	}

	@Override
	public List<Zdravilo> returnZdravilas() {
		List<Zdravilo> list = sifranti.returnZdravilas();
		 sifranti.odstraniZrno();
		 return list;
	}

	@Override
	public List<Material> returnMaterials() {
		List<Material> list = sifranti.returnMaterials();
		sifranti.odstraniZrno();
		return list;
	}

	@Override
	public List<Spol> returnSpols() {
		List<Spol> list = sifranti.returnSpols();
		sifranti.odstraniZrno();
		return list;
	}

	@Override
	public List<Okolis> returnOkoliss() {
		 List<Okolis> list = sifranti.returnOkoliss();
		 sifranti.odstraniZrno();
		 return list;
	}

	@Override
	public List<Posta> returnPostas() {
		List<Posta> list = sifranti.returnPostas();
		sifranti.odstraniZrno();
		return list;
	}

	@Override
	public List<Vloga> returnVlogas() {
		List<Vloga> list = sifranti.returnVlogas();
		sifranti.odstraniZrno();
		return list;
	}

	@Override
	public List<VrstaObiska> returnVrstaObiskas() {
		List<VrstaObiska> list = sifranti.returnVrstaObiskas();
		sifranti.odstraniZrno();
		return list;
	}

	@Override
	public List<SorodstvenoRazmerje> returnSorodstvenoRazmerjes() {
		List<SorodstvenoRazmerje> list = sifranti.returnSorodstvenoRazmerjes();
		sifranti.odstraniZrno();
		return list;
	}

	@Override
	public void deleteZdravilo(int id) {
		sifranti.deleteZdravilo(id);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void deleteMaterial(int id) {
		sifranti.deleteMaterial(id);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void deleteSpol(int id) {
		sifranti.deleteSpol(id);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void deleteOkolis(int id) {
		sifranti.deleteOkolis(id);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void deletePosta(int id) {
		sifranti.deletePosta(id);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void deleteVloga(int id) {
		sifranti.deleteVloga(id);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void deleteVrstaObiska(int id) {
		sifranti.deleteVrstaObiska(id);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void deleteSorodstvenoRazmerje(int id) {
		sifranti.deleteSorodstvenoRazmerje(id);
		sifranti.odstraniZrno();
		
	}

	@Override
	public Zdravilo returnZdravila(int id) {
		Zdravilo zdr = sifranti.returnZdravila(id);
		sifranti.odstraniZrno();
		return zdr;
	}

	@Override
	public Material returnMaterial(int id) {
		Material eno = sifranti.returnMaterial(id);
		sifranti.odstraniZrno();
		return eno;
	}

	@Override
	public Spol returnSpol(int id) {
		Spol eno = sifranti.returnSpol(id);
		sifranti.odstraniZrno();
		return eno;
	}

	@Override
	public Okolis returnOkolis(int id) {
		Okolis eno = sifranti.returnOkolis(id);
		sifranti.odstraniZrno();
		return eno;
	}

	@Override
	public Posta returnPosta(int id) {
		Posta eno = sifranti.returnPosta(id);
		sifranti.odstraniZrno();
		return eno;
	}

	@Override
	public Vloga returnVloga(int id) {
		Vloga eno = sifranti.returnVloga(id);
		sifranti.odstraniZrno();
		return eno;
	}

	@Override
	public VrstaObiska returnVrstaObiska(int id) {
		VrstaObiska eno = sifranti.returnVrstaObiska(id);
		sifranti.odstraniZrno();
		return eno;
	}

	@Override
	public SorodstvenoRazmerje returnSorodstvenoRazmerje(int id) {
		SorodstvenoRazmerje eno = sifranti.returnSorodstvenoRazmerje(id);
		sifranti.odstraniZrno();
		return eno;
	}

	@Override
	public void updateZdravilo(Zdravilo z) {
		sifranti.updateZdravilo(z);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void updateMaterial(Material m) {
		sifranti.updateMaterial(m);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void updateSpol(Spol s) {
		sifranti.updateSpol(s);
		sifranti.odstraniZrno();
		
		
	}

	@Override
	public void updateOkolis(Okolis o) {
		sifranti.updateOkolis(o);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void updatePosta(Posta p) {
		sifranti.updatePosta(p);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void updateVloga(Vloga v) {
		sifranti.updateVloga(v);
		sifranti.odstraniZrno();
		
		
	}

	@Override
	public void updateVrstaObiska(VrstaObiska vo) {
		sifranti.updateVrstaObiska(vo);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void updateSorodstvenoRazmerje(SorodstvenoRazmerje sr) {
		sifranti.updateSorodstvenoRazmerje(sr);
		sifranti.odstraniZrno();
		
	}

	@Override
	public void odstraniZrno() {
		
	}

}
