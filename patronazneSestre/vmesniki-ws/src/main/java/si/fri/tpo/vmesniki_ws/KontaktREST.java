package si.fri.tpo.vmesniki_ws;

import java.util.List;
import javax.xml.ws.Response;
import si.fri.tpo.entitete.*;

public interface KontaktREST {

	void createKontakt(Kontakt kontakt);
	
	public List<Kontakt> returnKontakts();
	
	void deleteKontakt(int id);
	
	void updateKontakt(Kontakt kontakt);
	
	public Kontakt returnKontakt(int id);
	
}
