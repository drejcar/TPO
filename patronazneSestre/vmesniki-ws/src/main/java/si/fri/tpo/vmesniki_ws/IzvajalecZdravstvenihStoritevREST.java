package si.fri.tpo.vmesniki_ws;

import java.util.List;
import javax.xml.ws.Response;
import si.fri.tpo.entitete.*;

public interface IzvajalecZdravstvenihStoritevREST {

	void createIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev);
	
	public List<IzvajalecZdravstvenihStoritev> returnIzvajalecZdravstvenihStoritevs();
	
	void deleteIzvajalecZdravstvenihStoritev(int id);
	
	void updateIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev);
	
	public IzvajalecZdravstvenihStoritev returnIzvajalecZdravstvenihStoritev(int id); 
	
}
