package si.fri.tpo.zrna;

import java.util.List;

import javax.annotation.security.PermitAll;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import si.fri.tpo.entitete.DelovniNalog;
import si.fri.tpo.vmesnikiSB.DelovniNalogSBLocal;
import si.fri.tpo.vmesnikiSB.DelovniNalogSBRemote;

/**
 * Session Bean implementation class delovniNalogSB
 */
@TransactionManagement(value=TransactionManagementType.CONTAINER)
@Stateless
@PermitAll
public class DelovniNalogSB implements DelovniNalogSBRemote, DelovniNalogSBLocal {
	@PersistenceContext
	private EntityManager em;
	
    /**
     * Default constructor. 
     */
    public DelovniNalogSB() {
        
    }
    
    /*
     * (non-Javadoc)
     * @see si.fri.tpo.vmesnikiSB.delovniNalogSBLocal#dodajDelovniNalog(si.fri.tpo.entitete.DelovniNalog)
     */
	@Override
	public void dodajDelovniNalog(DelovniNalog dn) {
		
		em.persist(dn);
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.delovniNalogSBLocal#updateDelovniNalog(si.fri.tpo.entitete.DelovniNalog)
	 */
	@Override
	public void updateDelovniNalog(DelovniNalog dn) {
		
		em.merge(dn);
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.delovniNalogSBLocal#deleteDelovniNalog(int)
	 */
	@Override
	public void deleteDelovniNalog(int id) {
		
		em.createNamedQuery("DelovniNalog.deleteOne").setParameter("id", id).executeUpdate();
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.delovniNalogSBLocal#odstraniZrno()
	 */
	@Override
	public void odstraniZrno() {
		
		
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.DelovniNalogSBLocal#vrniDelovniNalog(int)
	 */
	@Override
	public DelovniNalog vrniDelovniNalog(int id) {
		
		return (DelovniNalog) em.createNamedQuery("DelovniNalog.findOne").setParameter("id", id).getSingleResult();
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.DelovniNalogSBLocal#vrniDelovniNalogs()
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<DelovniNalog> vrniDelovniNalogs() {
		
		return em.createNamedQuery("DelovniNalog.findAll").getResultList();
	}

}
