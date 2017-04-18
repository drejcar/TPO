package si.fri.tpo.zrna;

import java.util.List;

import javax.annotation.security.RolesAllowed;
import javax.ejb.EJB;
import javax.ejb.Stateless;

import si.fri.tpo.entitete.Okolis;
import si.fri.tpo.entitete.Pacient;
import si.fri.tpo.entitete.Posta;
import si.fri.tpo.entitete.Spol;
import si.fri.tpo.entitete.Uporabnik;
import si.fri.tpo.entitete.Vloga;
import si.fri.tpo.vmesnikiSB.EmailSBLocal;
import si.fri.tpo.vmesnikiSB.NoAuthSBLocal;
import si.fri.tpo.vmesnikiSB.NoAuthSBRemote;
import si.fri.tpo.vmesnikiSB.PacientSBLocal;
import si.fri.tpo.vmesnikiSB.SifrantiSBLocal;
import si.fri.tpo.vmesnikiSB.UporabnikSBLocal;

/**
 * Session Bean implementation class NoAuthSB
 */
@Stateless
public class NoAuthSB implements NoAuthSBRemote, NoAuthSBLocal {

	@EJB
	private PacientSBLocal pacienti;
	@EJB
	private EmailSBLocal email;
	@EJB
	private UporabnikSBLocal uporabnik;
	@EJB
	private SifrantiSBLocal sifranti;
	
    /**
     * Default constructor. 
     */
    public NoAuthSB() {
        // TODO Auto-generated constructor stub
    }
    
    @Override
	public void createPacient(Pacient pacient) {
		pacienti.createPacient(pacient);
		pacienti.odstraniZrno();
		
		String to = pacient.getUporabnik().getEmail();
		int id = pacient.getUporabnik().getIduporabnik();
		
		email.sendEmail(to, "test", "test");
	}
    
    @Override
	public List<Okolis> returnOkolissByPosta(int id) {
		List<Okolis> list = sifranti.returnOkolissByPosta(id);
		sifranti.odstraniZrno();
		return list;
	}

    @Override
	public List<Posta> returnPostas() {
		List<Posta> list = sifranti.returnPostas();
		sifranti.odstraniZrno();
		return list;
	}

    @Override
	public List<Spol> returnSpols() {
		List<Spol> list = sifranti.returnSpols();
		sifranti.odstraniZrno();
		return list;
		
	}
    
    @Override
    public void aktivirajUporabnika(int id){
    	Uporabnik u = uporabnik.najdiUporabnik(id);
    	Vloga v = sifranti.returnVloga(2);
    	if(u.getVloga().getIdvloga() == 7){
    		u.setVloga(v);
    		uporabnik.updateUporabnika(u);
    	}
    }
    
}
