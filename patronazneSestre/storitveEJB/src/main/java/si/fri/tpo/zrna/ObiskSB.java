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
import si.fri.tpo.entitete.ZdravstveniDelavec;
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

		return (Obisk) em.createNamedQuery("Obisk.findOne").setParameter("id", id).getSingleResult();
		
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
	public List<Obisk> getObisksDN(int idMaticna, Date ood, Date doo, ZdravstveniDelavec nadomestna){
		
		List<DelovniNalog> dn = em.createNamedQuery("DelovniNalog.findSpecificAll").setParameter("id", idMaticna).getResultList();
		
		List<Obisk> obiski = new ArrayList<Obisk>();
		//preglej vse delovne naloge
		for(int i = 0; i < dn.size(); i++){
			//preglej en delovni nalog
			DelovniNalog d = dn.get(i);
			
			Set<Obisk> ob = d.getObisks();
			
			//iterator za obiske na delovnem nalogu
			Iterator<Obisk> iter = ob.iterator();
			
			boolean dnPopravljen = false;
			
			while(iter.hasNext()){
				Obisk obisk = (Obisk) iter.next();
				if(obisk.getDatumObiska().after(ood) && obisk.getDatumObiska().before(doo) && obisk.getOpravljen() == 0){
					obiski.add(obisk);
					if(!dnPopravljen){
						//dodaj nadomestno na delovni nalog
						d.getZdravstveniDelavecs().add(nadomestna);
						dnPopravljen = true;
					}
				}
			}
			em.merge(d);
		}
		return obiski;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Obisk> getObisksNadomescanja(int idMaticna, Date ood, Date doo) {
	
		return (List<Obisk>) em.createNamedQuery("Obisk.getByNadomestna").setParameter("id",idMaticna).setParameter("startDate", ood).setParameter("endDate", doo).getResultList();

	}

	@Override
	public void endNadomescanje(int id) {
		
		List<DelovniNalog> dn = em.createNamedQuery("DelovniNalog.findSpecificAll").setParameter("id", id).getResultList();
		
		for(int i = 0; i < dn.size(); i++){
			//preglej en delovni nalog
			DelovniNalog d = dn.get(i);
			
			Set<Obisk> ob = d.getObisks();
			Set<ZdravstveniDelavec> delavec = d.getZdravstveniDelavecs();
			
			//iterator za obiske na delovnem nalogu
			Iterator<Obisk> iterObisk = ob.iterator();
			Iterator<ZdravstveniDelavec> iterDelavec = delavec.iterator();
			
			boolean popraviDelavce = false;
			
			while(iterObisk.hasNext()){
			
				Obisk obisk = iterObisk.next();
				
				if(obisk.getNadomestnaSestra() != null && obisk.getOpravljen() == 0){
					
					obisk.setNadomestnaSestra(null);
					em.merge(obisk);
					popraviDelavce = true;
					
<<<<<<< HEAD
					//odstrani nadonescanje se z delovnega naloga
					
=======
				}
			}
			if(popraviDelavce){
				while(iterDelavec.hasNext()){
					
					ZdravstveniDelavec del = iterDelavec.next();
					if(del.getOkolis() != null && del.getIdzdravstveniDelavec() != id){
						iterDelavec.remove();
					}
>>>>>>> 36dd9501f0a17f7d8b05b9230edcfafe5e62b299
				}
				d.setZdravstveniDelavecs(delavec);
				em.merge(d);
			}
		}
	}
}
