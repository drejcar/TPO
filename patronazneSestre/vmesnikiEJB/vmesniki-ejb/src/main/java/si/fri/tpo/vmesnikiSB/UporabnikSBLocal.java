package si.fri.tpo.vmesnikiSB;

import java.util.List;

import javax.ejb.Local;

//uporabljena entiteta Uporabanik
import si.fri.tpo.entitete.Uporabnik;
import si.fri.tpo.entitete.Vloga;

//interface-i za session bean uporabnik
@Local
public interface UporabnikSBLocal {
	public Uporabnik najdiUporabnik(int id); //vrni specificnega uporabnika
	public List<Uporabnik> najdiUporabniks(); //vrni seznam uporabnikov
	void shraniNovegaUporabnika(Uporabnik u); //kreiranje novega uporabnika
	void updateUporabnika(Uporabnik u); //za updatanje gesla
	void odstraniUporabnik(int id); //odstranjevanje uporabnika po id-ju
	void odstraniZrno(); //za odstranjevanje zrna
	public String vrniShaHash(String pass); //funkcija za hashiranje passwordov v SHA-256
	public Uporabnik returnUporabnikEmail(String email); //funkcija za vracanje uporabnika glede na mail (login)
}
