package si.fri.tpo.zrna;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import si.fri.tpo.entitete.DelovniNalog;
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
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Obisk> getObisksDN(int idMaticna, Date ood, Date doo){
		
		List<DelovniNalog> dn = em.createNamedQuery("DelovniNalog.findSpecificAll").setParameter("id", idMaticna).getResultList();
		
		List<Obisk> obiski = new ArrayList<Obisk>();
		//preglej vse delovne naloge
		for(int i = 0; i < dn.size(); i++){
			//preglej en delovni nalog
			DelovniNalog d = dn.get(i);
			
			Set<Obisk> ob = d.getObisks();
			
			//iterator za obiske na delovnem nalogu
			Iterator<Obisk> iter = ob.iterator();
			
			while(iter.hasNext()){
				Obisk obisk = (Obisk) iter.next();
				if(obisk.getDatumObiska().after(ood) && obisk.getDatumObiska().before(doo) && obisk.getOpravljen() == 0){
					obiski.add(obisk);
				}
			}
		}
		
		return obiski;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Obisk> getObisksNadomescanja(int idMaticna, Date ood, Date doo) {
	
		return (List<Obisk>) em.createNamedQuery("Obisk.getByNadomestna").setParameter("id",idMaticna).setParameter("startDate", ood).setParameter("endDate", doo).getResultList();

	}
	
}
