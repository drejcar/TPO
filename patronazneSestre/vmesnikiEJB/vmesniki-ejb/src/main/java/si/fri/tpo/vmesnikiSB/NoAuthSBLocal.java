package si.fri.tpo.vmesnikiSB;

import java.util.List;

import javax.ejb.Local;

import si.fri.tpo.entitete.Okolis;
import si.fri.tpo.entitete.Pacient;
import si.fri.tpo.entitete.Posta;
import si.fri.tpo.entitete.Spol;

@Local
public interface NoAuthSBLocal {

	void createPacient(Pacient pacient);

	List<Okolis> returnOkolissByPosta(int id);

	List<Posta> returnPostas();

	List<Spol> returnSpols();

	void aktivirajUporabnika(int id);

}
