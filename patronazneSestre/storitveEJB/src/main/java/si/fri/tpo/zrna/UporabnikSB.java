package si.fri.tpo.zrna;

import java.util.List;

import javax.annotation.security.PermitAll;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import si.fri.tpo.entitete.*;
import si.fri.tpo.vmesnikiSB.UporabnikSBLocal;
import si.fri.tpo.vmesnikiSB.UporabnikSBRemote;
/*
import org.jboss.crypto.CryptoUtil;
import org.picketbox.util.*;

/**
 * Session Bean implementation class uporabnikSB
 */
@TransactionManagement(value=TransactionManagementType.CONTAINER)
@Stateless
@PermitAll
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
		
		//String geslo =  CryptoUtil.createPasswordHash("SHA-256", "BASE64", "UTF-8", u.getEmail().trim(), u.getGeslo().trim());
		
		//u.setGeslo(geslo);
		
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

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.UporabnikSBLocal#najdiUporabnik(int)
	 */
	@Override
	public Uporabnik najdiUporabnik(int id) {
		return (Uporabnik) em.createNamedQuery("Uporabnik.findOne").setParameter("id", id).getSingleResult();
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.UporabnikSBLocal#najdiUporabniks()
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Uporabnik> najdiUporabniks() {
		return em.createNamedQuery("Uporabnik.findAll").getResultList();
	}
	
}
