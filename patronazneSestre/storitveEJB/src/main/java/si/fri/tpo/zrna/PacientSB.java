package si.fri.tpo.zrna;

import java.util.List;

import javax.annotation.security.PermitAll;
import javax.ejb.Remove;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import si.fri.tpo.entitete.Pacient;
import si.fri.tpo.vmesnikiSB.PacientSBLocal;
import si.fri.tpo.vmesnikiSB.PacientSBRemote;

/**
 * Session Bean implementation class PacientSB
 */
@TransactionManagement(value=TransactionManagementType.CONTAINER)
@Stateless

public class PacientSB implements PacientSBRemote, PacientSBLocal {
	@PersistenceContext
	private EntityManager em;
	
    /**
     * Default constructor. 
     */
    public PacientSB() {
       
    }

    /*
     * (non-Javadoc)
     * @see si.fri.tpo.vmesnikiSB.PacientSBLocal#returnPacient(int)
     */
	@Override
	public Pacient returnPacient(int id) {
		
		return (Pacient) em.createNamedQuery("Pacient.findOne").setParameter("id", id).getSingleResult();
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.PacientSBLocal#returnPacients()
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Pacient> returnPacients() {
		
		return em.createNamedQuery("Pacient.findAll").getResultList();
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.PacientSBLocal#createPacient(si.fri.tpo.entitete.Pacient)
	 */
	@Override
	public void createPacient(Pacient pacient) {
		em.persist(pacient);
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.PacientSBLocal#updatePacient(si.fri.tpo.entitete.Pacient)
	 */
	@Override
	public void updatePacient(Pacient pacient) {
		em.merge(pacient);
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.PacientSBLocal#deletePacient(int)
	 */
	@Override
	public void deletePacient(int id) {
		em.createNamedQuery("Pacient.deleteOne").setParameter("id", id).executeUpdate();
		
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.PacientSBLocal#returnPacientZZ(int)
	 */
	@Override
	public Pacient returnPacientZZ(int stevilkaZZ) {
		return (Pacient) em.createNamedQuery("Pacient.findOneZZ").setParameter("stevilkaZZ", stevilkaZZ).getSingleResult();
		
	}
	
	//odstranjevanje zrna
	@Remove
	public void odstraniZrno() {
		
	}

	

}
