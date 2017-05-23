package si.fri.tpo.zrna;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import si.fri.tpo.entitete.Obisk;
import si.fri.tpo.vmesnikiSB.ObiskSBLocal;
import si.fri.tpo.vmesnikiSB.ObiskSBRemote;

public class ObiskSB implements ObiskSBLocal, ObiskSBRemote {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public void odstraniZrno() {
		// TODO Auto-generated method stub

	}

	@Override
	public Obisk returnObisk(int id) {
		
		return (Obisk) em.createNamedQuery("Obisk.findOne").setParameter("id", id).getSingleResult();
		
	}

	@Override
	public void updateObisk(Obisk obisk) {
		
		em.merge(obisk);

	}

	@Override
	public void deleteObisk(int id) {
		
		em.createNamedQuery("Obisk.deleteOne").setParameter("id",id).executeUpdate();

	}

}
