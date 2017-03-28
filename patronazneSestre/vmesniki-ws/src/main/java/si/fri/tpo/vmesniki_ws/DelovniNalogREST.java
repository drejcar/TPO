package si.fri.tpo.vmesniki_ws;

import java.util.List;
import javax.xml.ws.Response;
import si.fri.tpo.entitete.*;

public interface DelovniNalogREST {

	void createDelovniNalog(DelovniNalog delovniNalog);
	
	public List<DelovniNalog> returnDelovniNalogs();
	
	void deleteDelovniNalog(int id);
	
	void updateDelovniNalog(DelovniNalog delovniNalog);
	
	public DelovniNalog returnDelovniNalog(int id);
	
}
