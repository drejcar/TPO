package si.fri.tpo.zrna;

import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import si.fri.tpo.entitete.DelovniNalog;
import si.fri.tpo.vmesnikiSB.delovniNalogSBLocal;
import si.fri.tpo.vmesnikiSB.delovniNalogSBRemote;

/**
 * Session Bean implementation class delovniNalogSB
 */
@TransactionManagement(value=TransactionManagementType.CONTAINER)
@Stateless
public class delovniNalogSB implements delovniNalogSBRemote, delovniNalogSBLocal {
	@PersistenceContext
	private EntityManager em;
	
    /**
     * Default constructor. 
     */
    public delovniNalogSB() {
        // TODO Auto-generated constructor stub
    }
    
    /*
     * (non-Javadoc)
     * @see si.fri.tpo.vmesnikiSB.delovniNalogSBLocal#dodajDelovniNalog(si.fri.tpo.entitete.DelovniNalog)
     */
	@Override
	public void dodajDelovniNalog(DelovniNalog dn) {
		// TODO Auto-generated method stub
		em.persist(dn);
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.delovniNalogSBLocal#updateDelovniNalog(si.fri.tpo.entitete.DelovniNalog)
	 */
	@Override
	public void updateDelovniNalog(DelovniNalog dn) {
		// TODO Auto-generated method stub
		em.merge(dn);
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.delovniNalogSBLocal#deleteDelovniNalog(int)
	 */
	@Override
	public void deleteDelovniNalog(int id) {
		// TODO Auto-generated method stub
		em.createNamedQuery("DelovniNalog.deleteOne").setParameter("id", id).executeUpdate();
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.delovniNalogSBLocal#odstraniZrno()
	 */
	@Override
	public void odstraniZrno() {
		// TODO Auto-generated method stub
		
	}

}
