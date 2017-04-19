package si.fri.tpo.vmesniki_ws;

import si.fri.tpo.entitete.Pacient;

public interface RegistracijaREST {

	void createPacient(Pacient pacient);

	void activateUporabnik(int id) throws Throwable;
	
}
