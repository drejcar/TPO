package si.fri.tpo.zrna;

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

}
