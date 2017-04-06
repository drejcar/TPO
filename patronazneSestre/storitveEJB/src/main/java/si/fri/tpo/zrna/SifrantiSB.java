package si.fri.tpo.zrna;

import java.util.List;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ejb.Remove;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import si.fri.tpo.entitete.Bolezen;
import si.fri.tpo.entitete.Material;
import si.fri.tpo.entitete.Okolis;
import si.fri.tpo.entitete.Posta;
import si.fri.tpo.entitete.SorodstvenoRazmerje;
import si.fri.tpo.entitete.Spol;
import si.fri.tpo.entitete.Vloga;
import si.fri.tpo.entitete.VrstaObiska;
import si.fri.tpo.entitete.Zdravilo;
import si.fri.tpo.vmesnikiSB.SifrantiSBLocal;
import si.fri.tpo.vmesnikiSB.SifrantiSBRemote;

/**
 * Session Bean implementation class sifrantiSB
 */
@TransactionManagement(value=TransactionManagementType.CONTAINER)
@Stateless

public class SifrantiSB implements SifrantiSBRemote, SifrantiSBLocal {
	@PersistenceContext
	private EntityManager em;
    /**
     * Default constructor. 
     */
    public SifrantiSB() {

    }
    
    // *** klici za kreiranje sifrantov ***
    
    /* 
     * (non-Javadoc)
     * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#createZdravilo(si.fri.tpo.entitete.Zdravilo)
     */
	@Override
	public void createZdravilo(Zdravilo z) {
		em.persist(z);
		
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#createMaterial(si.fri.tpo.entitete.Material)
	 */
	@Override
	public void createMaterial(Material m) {
		em.persist(m);
		
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#createSpol(si.fri.tpo.entitete.Spol)
	 */
	@Override
	public void createSpol(Spol s) {
		em.persist(s);
		
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#createOkolis(si.fri.tpo.entitete.Okolis)
	 */
	@Override
	public void createOkolis(Okolis o) {
		em.persist(o);
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#createPosta(si.fri.tpo.entitete.Posta)
	 */
	@Override
	public void createPosta(Posta p) {
		em.persist(p);
		
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#createVloga(si.fri.tpo.entitete.Vloga)
	 */
	@Override
	public void createVloga(Vloga v) {
		em.persist(v);
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#createVrstaObiska(si.fri.tpo.entitete.VrstaObiska)
	 */
	@Override
	public void createVrstaObiska(VrstaObiska vo) {
		em.persist(vo);
		
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#createSorodstvenoRazmerje(si.fri.tpo.entitete.SorodstvenoRazmerje)
	 */
	@Override
	public void createSorodstvenoRazmerje(SorodstvenoRazmerje sr) {
		em.persist(sr);
		
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#createBolezen(si.fri.tpo.entitete.Bolezen)
	 */
	@Override
	public void createBolezen(Bolezen bolezen) {
		em.persist(bolezen);
		
	}
	
	// *** klici za vracanje seznama sifrantov ***
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnZdravilas()
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Zdravilo> returnZdravilas() {
		
		return em.createNamedQuery("Zdravilo.findAll").getResultList();
		
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnMaterials()
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Material> returnMaterials() {
		
		return em.createNamedQuery("Material.findAll").getResultList();
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnSpols()
	 */
	@SuppressWarnings("unchecked")
	@Override
	@RolesAllowed({"Administrator"})
	@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
	public List<Spol> returnSpols() {
		
		return em.createNamedQuery("Spol.findAll").getResultList();
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnOkoliss()
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Okolis> returnOkoliss() {
		
		return em.createNamedQuery("Okolis.findAll").getResultList();
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnPostas()
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Posta> returnPostas() {
	
		return em.createNamedQuery("Posta.findAll").getResultList();
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnVlogas()
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Vloga> returnVlogas() {
		
		return em.createNamedQuery("Vloga.findAll").getResultList();
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnVrstaObiskas()
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<VrstaObiska> returnVrstaObiskas() {
		
		return em.createNamedQuery("VrstaObiska.findAll").getResultList();
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnSorodstvenoRazmerjes()
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<SorodstvenoRazmerje> returnSorodstvenoRazmerjes() {
		
		return em.createNamedQuery("SorodstvenoRazmerje.findAll").getResultList();
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnBolezens()
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Bolezen> returnBolezens() {
		
		return em.createNamedQuery("Bolezen.findAll").getResultList();
	}
	
	// *** klici za brisanje specificnega sifranta ***
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#deleteZdravilo(int)
	 */
	@Override
	public void deleteZdravilo(int id) {
		em.createNamedQuery("Zdravilo.deleteOne").setParameter("id", id).executeUpdate();
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#deleteMaterial(int)
	 */
	@Override
	public void deleteMaterial(int id) {
		em.createNamedQuery("Material.deleteOne").setParameter("id", id).executeUpdate();
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#deleteSpol(int)
	 */
	@Override
	public void deleteSpol(int id) {
		em.createNamedQuery("Spol.deleteOne").setParameter("id", id).executeUpdate();
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#deleteOkolis(int)
	 */
	@Override
	public void deleteOkolis(int id) {
		em.createNamedQuery("Okolis.deleteOne").setParameter("id", id).executeUpdate();
		
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#deletePosta(int)
	 */
	@Override
	public void deletePosta(int id) {
		em.createNamedQuery("Posta.deleteOne").setParameter("id", id).executeUpdate();
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#deleteVloga(int)
	 */
	@Override
	public void deleteVloga(int id) {
		em.createNamedQuery("Vloga.deleteOne").setParameter("id", id).executeUpdate();
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#deleteVrstaObiska(int)
	 */
	@Override
	public void deleteVrstaObiska(int id) {
		em.createNamedQuery("VrstaObiska.deleteOne").setParameter("id", id).executeUpdate();
		
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#deleteSorodstvenoRazmerje(int)
	 */
	@Override
	public void deleteSorodstvenoRazmerje(int id) {
		em.createNamedQuery("SorodstvenoRazmerje.deleteOne").setParameter("id", id).executeUpdate();
		
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#deleteBolezen(int)
	 */
	@Override
	public void deleteBolezen(int id) {
		em.createNamedQuery("Bolezen.deleteOne").setParameter("id", id).executeUpdate();
		
	}
	
	// *** klici za vracanje specificnega sifranta ***
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnZdravila(int)
	 */
	@Override
	public Zdravilo returnZdravila(int id) {
		
		return (Zdravilo) em.createNamedQuery("Zdravilo.findOne").setParameter("id", id).getSingleResult();
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnMaterial(int)
	 */
	@Override
	public Material returnMaterial(int id) {
		
		return (Material) em.createNamedQuery("Material.findOne").setParameter("id", id).getSingleResult();
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnSpol(int)
	 */
	@Override
	public Spol returnSpol(int id) {
		
		return (Spol) em.createNamedQuery("Spol.findOne").setParameter("id", id).getSingleResult();
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnOkolis(int)
	 */
	@Override
	public Okolis returnOkolis(int id) {
		
		return (Okolis) em.createNamedQuery("Okolis.findOne").setParameter("id", id).getSingleResult();
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnPosta(int)
	 */
	@Override
	public Posta returnPosta(int id) {
		
		return (Posta) em.createNamedQuery("Posta.findOne").setParameter("id", id).getSingleResult();
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnVloga(int)
	 */
	@Override
	public Vloga returnVloga(int id) {
		
		return (Vloga) em.createNamedQuery("Vloga.findOne").setParameter("id", id).getSingleResult();
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnVrstaObiska(int)
	 */
	@Override
	public VrstaObiska returnVrstaObiska(int id) {
		
		return (VrstaObiska) em.createNamedQuery("VrstaObiska.findOne").setParameter("id", id).getSingleResult(); 
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnSorodstvenoRazmerje(int)
	 */
	@Override
	public SorodstvenoRazmerje returnSorodstvenoRazmerje(int id) {
		
		return (SorodstvenoRazmerje) em.createNamedQuery("SorodstvenoRazmerje.findOne").setParameter("id", id).getSingleResult();
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#returnBolezen(int)
	 */
	@Override
	public Bolezen returnBolezen(int id) {
		
		return (Bolezen) em.createNamedQuery("Bolezen.findOne").setParameter("id", id).getSingleResult();
	}
	
	// *** klici za updatanje sifrantov ***
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#updateZdravilo(si.fri.tpo.entitete.Zdravilo)
	 */
	@Override
	public void updateZdravilo(Zdravilo z) {
		em.merge(z);
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#updateMaterial(si.fri.tpo.entitete.Material)
	 */
	@Override
	public void updateMaterial(Material m) {
		em.merge(m);
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#updateSpol(si.fri.tpo.entitete.Spol)
	 */
	@Override
	public void updateSpol(Spol s) {
		em.merge(s);
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#updateOkolis(si.fri.tpo.entitete.Okolis)
	 */
	@Override
	public void updateOkolis(Okolis o) {
		em.merge(o);
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#updatePosta(si.fri.tpo.entitete.Posta)
	 */
	@Override
	public void updatePosta(Posta p) {
		em.merge(p);
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#updateVloga(si.fri.tpo.entitete.Vloga)
	 */
	@Override
	public void updateVloga(Vloga v) {
		em.merge(v);
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#updateVrstaObiska(si.fri.tpo.entitete.VrstaObiska)
	 */
	@Override
	public void updateVrstaObiska(VrstaObiska vo) {
		em.merge(vo);
		
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#updateSorodstvenoRazmerje(si.fri.tpo.entitete.SorodstvenoRazmerje)
	 */
	@Override
	public void updateSorodstvenoRazmerje(SorodstvenoRazmerje sr) {
		em.merge(sr);
		
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#updateBolezen(si.fri.tpo.entitete.Bolezen)
	 */
	@Override
	public void updateBolezen(Bolezen bolezen) {
		em.merge(bolezen);
		
	}
	
	// ***klic za odstranjevanje zrna***

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.SifrantiSBLocal#odstraniZrno()
	 */
	
	
	@Remove
	@PermitAll
	public void odstraniZrno() {
		
		
	}
}
