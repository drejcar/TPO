package si.fri.tpo.zrna;

import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import si.fri.tpo.entitete.*;
import si.fri.tpo.vmesnikiSB.UporabnikSBLocal;
import si.fri.tpo.vmesnikiSB.UporabnikSBRemote;

/**
 * Session Bean implementation class uporabnikSB
 */
@TransactionManagement(value=TransactionManagementType.CONTAINER)
@Stateless
public class UporabnikSB implements UporabnikSBRemote, UporabnikSBLocal {
	@PersistenceContext
	private EntityManager em;
    /**
     * Default constructor. 
     */
    public UporabnikSB() {
        
    }

    /*
     * (non-Javadoc)
     * @see si.fri.tpo.vmesnikiSB.uporabnikSBLocal#shraniNovegaUporabnika(si.fri.tpo.entitete.Uporabnik)
     */
	@Override
	public void shraniNovegaUporabnika(Uporabnik u) {
		
		em.persist(u);
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.uporabnikSBLocal#updateUporabnika(si.fri.tpo.entitete.Uporabnik)
	 */
	@Override
	public void updateUporabnika(Uporabnik u) {
		
		em.merge(u);
	}
	
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.uporabnikSBLocal#odstraniZrno()
	 */
	@Override
	public void odstraniZrno() {
		
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.uporabnikSBLocal#odstraniUporabnik(int)
	 */
	@Override
	public void odstraniUporabnik(int id) {
		
		em.createNamedQuery("Uporabnik.deleteOne").setParameter("id", id).executeUpdate();
	}

}
