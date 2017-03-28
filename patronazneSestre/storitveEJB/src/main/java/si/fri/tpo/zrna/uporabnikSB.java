package si.fri.tpo.zrna;

import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import si.fri.tpo.entitete.*;
import si.fri.tpo.vmesnikiSB.uporabnikSBLocal;
import si.fri.tpo.vmesnikiSB.uporabnikSBRemote;

/**
 * Session Bean implementation class uporabnikSB
 */
@TransactionManagement(value=TransactionManagementType.CONTAINER)
@Stateless
public class uporabnikSB implements uporabnikSBRemote, uporabnikSBLocal {
	@PersistenceContext
	private EntityManager em;
    /**
     * Default constructor. 
     */
    public uporabnikSB() {
        // TODO Auto-generated constructor stub
    }

    /*
     * (non-Javadoc)
     * @see si.fri.tpo.vmesnikiSB.uporabnikSBLocal#shraniNovegaUporabnika(si.fri.tpo.entitete.Uporabnik)
     */
	@Override
	public void shraniNovegaUporabnika(Uporabnik u) {
		// TODO Auto-generated method stub
		em.persist(u);
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.uporabnikSBLocal#updateUporabnika(si.fri.tpo.entitete.Uporabnik)
	 */
	@Override
	public void updateUporabnika(Uporabnik u) {
		// TODO Auto-generated method stub
		em.merge(u);
	}
	
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.uporabnikSBLocal#odstraniZrno()
	 */
	@Override
	public void odstraniZrno() {
		// TODO Auto-generated method stub
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.uporabnikSBLocal#odstraniUporabnik(int)
	 */
	@Override
	public void odstraniUporabnik(int id) {
		// TODO Auto-generated method stub
		em.createNamedQuery("Uporabnik.deleteOne").setParameter("id", id).executeUpdate();
	}

}
