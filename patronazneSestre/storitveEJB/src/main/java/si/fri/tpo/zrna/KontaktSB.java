package si.fri.tpo.zrna;

import java.util.List;

import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import si.fri.tpo.entitete.Kontakt;
import si.fri.tpo.vmesnikiSB.KontaktSBLocal;
import si.fri.tpo.vmesnikiSB.KontaktSBRemote;

/**
 * Session Bean implementation class KontaktSB
 */
@TransactionManagement(value=TransactionManagementType.CONTAINER)
@Stateless
public class KontaktSB implements KontaktSBRemote, KontaktSBLocal {
	@PersistenceContext
	private EntityManager em;
	
    /**
     * Default constructor. 
     */
    public KontaktSB() {
       
    }

    /*
     * (non-Javadoc)
     * @see si.fri.tpo.vmesnikiSB.KontaktSBLocal#returnKontakt(int)
     */
	@Override
	public Kontakt returnKontakt(int id) {
		
		return (Kontakt) em.createNamedQuery("Kontakt.findOne").setParameter("id", id).getSingleResult();
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.KontaktSBLocal#returnKontakts()
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Kontakt> returnKontakts() {
		
		return em.createNamedQuery("Kontakt.findAll").getResultList();
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.KontaktSBLocal#createKontakt(si.fri.tpo.entitete.Kontakt)
	 */
	@Override
	public void createKontakt(Kontakt kontakt) {
		em.persist(kontakt);
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.KontaktSBLocal#updateKontakt(si.fri.tpo.entitete.Kontakt)
	 */
	@Override
	public void updateKontakt(Kontakt kontakt) {
		em.merge(kontakt);
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.KontaktSBLocal#deleteKontakt(int)
	 */
	@Override
	public void deleteKontakt(int id) {
		em.createNamedQuery("Kontakt.deleteOne").setParameter("id", id);
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.KontaktSBLocal#odstraniZrno()
	 */
	@Override
	public void odstraniZrno() {
		
	}

}
