package si.fri.tpo.vmesnikiSB;

import java.util.List;

import javax.ejb.Local;

import si.fri.tpo.entitete.DelovniNalog;
import si.fri.tpo.entitete.Pacient;

//interface za funkcije pacienta
@Local
public interface PacientSBLocal {
	
	public Pacient returnPacient(int id); // vracanje specificnega pacienta
	public List<Pacient> returnPacients(); // vracanje seznama pacientov
	void createPacient(Pacient pacient); // kreiranje novega pacienta
	void updatePacient(Pacient pacient); //updatanje pacienta
	void deletePacient(int id); // brisanje pacienta
	public Pacient returnPacientZZ(String stevilkaZZ); // iskanje pacienta po ZZ
	public List<DelovniNalog> returnDelovniNalogPoPacientu(int id); //iskanje dn po pacientu
	public Pacient returnPacientPoUporabniku(int id); //vrne pacienta glede na idUporabnika
	void odstraniZrno();
	
}
