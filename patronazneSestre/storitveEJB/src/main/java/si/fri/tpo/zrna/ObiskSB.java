package si.fri.tpo.zrna;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import si.fri.tpo.entitete.Obisk;
import si.fri.tpo.vmesnikiSB.ObiskSBLocal;
import si.fri.tpo.vmesnikiSB.ObiskSBRemote;

/**
 * Session Bean implementation class ObiskSB
 */
@Stateless
@LocalBean
public class ObiskSB implements ObiskSBRemote, ObiskSBLocal {

	@PersistenceContext
	private EntityManager em;
	
    /**
     * Default constructor. 
     */
    public ObiskSB() {
        // TODO Auto-generated constructor stub
    }

	@Override
	public void odstraniZrno() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Obisk returnObisk(int id) {

		return (Obisk) em.createNamedQuery("Obisk.findOne").setParameter("id", id);
		
	}

	@Override
	public void updateObisk(Obisk obisk) {
		
		em.merge(obisk);
		
	}

	@Override
	public void deleteObisk(int id) {
		
		em.createNamedQuery("Obisk.deleteOne").setParameter("id", id).executeUpdate();
		
	}

}
