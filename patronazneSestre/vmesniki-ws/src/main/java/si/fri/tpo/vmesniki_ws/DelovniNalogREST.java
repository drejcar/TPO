package si.fri.tpo.vmesniki_ws;

import java.util.Date;
import java.util.List;
import si.fri.tpo.entitete.*;

public interface DelovniNalogREST {

	public void createDelovniNalog(DelovniNalog delovniNalog, int fixniDatum, int obdobje, Date od, Date doo);
	
	public List<DelovniNalog> returnDelovniNalogs();
	
	void deleteDelovniNalog(int id);
	
	void updateDelovniNalog(DelovniNalog delovniNalog);
	
	public DelovniNalog returnDelovniNalog(int id);
	
}
