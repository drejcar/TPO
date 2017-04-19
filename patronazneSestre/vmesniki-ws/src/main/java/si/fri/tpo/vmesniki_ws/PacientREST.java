package si.fri.tpo.vmesniki_ws;

import java.util.List;
import javax.xml.ws.Response;
import si.fri.tpo.entitete.*;

public interface PacientREST {

	void createPacient(Pacient pacient);
	
	public List<Pacient> returnPacients();
	
	void deletePacient(int id);
	
	void updatePacient(Pacient pacient);
	
	public Pacient returnPacient(int id);
	
	public Pacient returnPacientZZ(String stevilkaZZ); //vracanje pacienta glede na stevilkoZZ
}
