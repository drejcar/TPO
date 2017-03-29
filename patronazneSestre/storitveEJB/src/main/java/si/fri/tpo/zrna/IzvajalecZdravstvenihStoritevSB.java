package si.fri.tpo.zrna;

import java.util.List;

import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import si.fri.tpo.entitete.IzvajalecZdravstvenihStoritev;
import si.fri.tpo.vmesnikiSB.IzvajalecZdravstvenihStoritevSBLocal;
import si.fri.tpo.vmesnikiSB.IzvajalecZdravstvenihStoritevSBRemote;

/**
 * Session Bean implementation class IzvajalecZdravstvenihStoritevSB
 */
@TransactionManagement(value=TransactionManagementType.CONTAINER)
@Stateless
public class IzvajalecZdravstvenihStoritevSB implements IzvajalecZdravstvenihStoritevSBRemote, IzvajalecZdravstvenihStoritevSBLocal {
	@PersistenceContext
	private EntityManager em;
    /**
     * Default constructor. 
     */
    public IzvajalecZdravstvenihStoritevSB() {
        
    }

    /*
     * (non-Javadoc)
     * @see si.fri.tpo.vmesnikiSB.IzvajalecZdravstvenihStoritevSBLocal#returnIzvajalecZdravstvenihStoritev(int)
     */
	@Override
	public IzvajalecZdravstvenihStoritev returnIzvajalecZdravstvenihStoritev(int id) {
		
		return (IzvajalecZdravstvenihStoritev) em.createNamedQuery("IzvajalecZdravstvenihStoritev.findOne").setParameter("id", id).getSingleResult();
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.IzvajalecZdravstvenihStoritevSBLocal#returnIzvajalecZdravstvenihStoritevs()
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<IzvajalecZdravstvenihStoritev> returnIzvajalecZdravstvenihStoritevs() {
		
		return em.createNamedQuery("IzvajalecZdravstvenihStoritev.findAll").getResultList();
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.IzvajalecZdravstvenihStoritevSBLocal#createIzvajalecZdravstvenihStoritev(si.fri.tpo.entitete.IzvajalecZdravstvenihStoritev)
	 */
	@Override
	public void createIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev) {
		em.persist(izvajalecZdravstvenihStoritev);
		
	}
	
	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.IzvajalecZdravstvenihStoritevSBLocal#updateIzvajalecZdravstvenihStoritev(si.fri.tpo.entitete.IzvajalecZdravstvenihStoritev)
	 */
	@Override
	public void updateIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev) {
		em.merge(izvajalecZdravstvenihStoritev);
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.IzvajalecZdravstvenihStoritevSBLocal#deleteIzvajalecZdravstvenihStoritev(int)
	 */
	@Override
	public void deleteIzvajalecZdravstvenihStoritev(int id) {
		em.createNamedQuery("IzvajalecZdravstvenihStoritev.deleteOne").setParameter("id", id).executeUpdate();
		
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.IzvajalecZdravstvenihStoritevSBLocal#odstraniZrno()
	 */
	@Override
	public void odstraniZrno() {
		
	}

}
