package si.fri.tpo.zrna;

import java.util.Date;
import java.util.List;

import javax.annotation.security.RolesAllowed;
import javax.ejb.EJB;
import javax.ejb.Stateless;

import si.fri.tpo.entitete.Okolis;
import si.fri.tpo.entitete.Pacient;
import si.fri.tpo.entitete.Posta;
import si.fri.tpo.entitete.SorodstvenoRazmerje;
import si.fri.tpo.entitete.Spol;
import si.fri.tpo.entitete.Uporabnik;
import si.fri.tpo.entitete.Vloga;
import si.fri.tpo.vmesnikiSB.EmailSBLocal;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
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
		
		StringBuilder sb = new StringBuilder();
		sb.append("Pozdravljeni! ");
		sb.append("Zahvaljujemo se vam za resgistracijo na portalu PatronažnaSlužba. S klikom na priloženo povezavo bo vaša registracija zaključena. ");
		sb.append("<a href='http://localhost:3000/aktivacija/");
		sb.append(id);
		sb.append("'>Aktivacija</a>");
			
		email.sendEmail(to, "Aktivacija uporabniškega računa: pacient", sb.toString());
	
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
    public void aktivirajUporabnika(int id) throws Throwable{
    
    	Uporabnik u = uporabnik.najdiUporabnik(id);
    	Vloga v = sifranti.returnVloga(2);
    	Date date = new Date();
    	if(u.getVloga().getIdvloga() == 7 && date.before(u.getAktivirajDo())){
    		u.setVloga(v);
    		uporabnik.updateUporabnika(u);
    	}
    	else{
    		
    		throw new Exception("Vas cas za aktivacijo je potekel. Prosimo kontaktirajte administratorja.");
    	
    	}
    
    }
    
    @Override
	public List<SorodstvenoRazmerje> returnSorodstvenoRazmerjes() {
    	
		List<SorodstvenoRazmerje> list = sifranti.returnSorodstvenoRazmerjes();
		sifranti.odstraniZrno();
		return list;
	
    }
    @Override
    public Uporabnik returnUporabnikaPoIdju(int id){
    	return uporabnik.najdiUporabnik(id); 
    	
    }
	@Override
	public void pozabilGeslo(String mail) {
		Uporabnik u = uporabnik.returnUporabnikEmail(mail);
		int id = u.getIduporabnik();
		String to = u.getEmail();
		StringBuilder sb = new StringBuilder();
		sb.append("Pozdravljeni! ");
		sb.append("Prišla je zahteva po spremembi gesla na portalu PatronažnaSlužba. S klikom na priloženo povezavo bo vaša sprememba gesla zaključena. ");
		sb.append("<a href='http://localhost:3000/pozabilGeslo/");
		sb.append(id);
		sb.append("'>Spremeni geslo</a>");
		email.sendEmail(to, "Pozabljeno geslo", sb.toString());
		
	}
    
}
