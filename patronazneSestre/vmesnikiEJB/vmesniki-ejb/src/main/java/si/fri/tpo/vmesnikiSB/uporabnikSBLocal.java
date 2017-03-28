package si.fri.tpo.vmesnikiSB;

import javax.ejb.Local;

//uporabljena entiteta Uporabanik
import si.fri.tpo.entitete.Uporabnik;

//interface-i za session bean uporabnik
@Local
public interface uporabnikSBLocal {
	void shraniNovegaUporabnika(Uporabnik u); //kreiranje novega uporabnika
	void updateUporabnika(Uporabnik u); //za updatanje gesla
	void odstraniUporabnik(int id); //odstranjevanje uporabnika po id-ju
	void odstraniZrno(); //za odstranjevanje zrna
}
