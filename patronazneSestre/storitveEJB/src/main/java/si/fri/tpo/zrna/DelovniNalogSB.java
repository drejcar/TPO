package si.fri.tpo.zrna;

import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.annotation.security.PermitAll;
import javax.ejb.Remove;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import si.fri.tpo.entitete.DelovniNalog;
import si.fri.tpo.entitete.Obisk;
import si.fri.tpo.entitete.Pacient;
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
	@Remove
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

	@SuppressWarnings("unchecked")
	public List<DelovniNalog> vrniDelovneNalogeZdrDel(int id, Date ood, Date doo, int start, int size){
		List<DelovniNalog> list =  em.createNamedQuery("DelovniNalog.findSpecific").setParameter("id", id)
																.setParameter("startDate", ood)
																.setParameter("endDate", doo).getResultList();
		
		if(list.size() <= start){
			return null;
		}
		else if(list.size() <= start+size){
			return list.subList(start, list.size());
		}
		else{
			return list.subList(start, start+size);
		}
				
	}

	@Override
	public List<DelovniNalog> vrniDelovneNalogeZdrDelAll(int id, int start, int size) {
		@SuppressWarnings("unchecked")
		List<DelovniNalog> list =  em.createNamedQuery("DelovniNalog.findSpecificAll").setParameter("id", id).getResultList();
		
		if(list.size() <= start){
			return null;
		}
		else if(list.size() <= start+size){
			return list.subList(start, list.size());
		}
		else{
			return list.subList(start, start+size);
		}
	}

	@Override
	public List<DelovniNalog> vrniDelovneNalogeIzvAll(int id, int start, int size) {
		@SuppressWarnings("unchecked")
		List<DelovniNalog> list =  em.createNamedQuery("DelovniNalog.findSpecificAllIzv").setParameter("id", id).getResultList();
		
		if(list.size() <= start){
			return null;
		}
		else if(list.size() <= start+size){
			return list.subList(start, list.size());
		}
		else{
			return list.subList(start, start+size);
		}
	}

	/*
	 * (non-Javadoc)
	 * @see si.fri.tpo.vmesnikiSB.DelovniNalogSBLocal#updateObisk(si.fri.tpo.entitete.Obisk)
	 */
	@Override
	public void updateObisk(Obisk ob) {
		em.merge(ob);
	}
}
