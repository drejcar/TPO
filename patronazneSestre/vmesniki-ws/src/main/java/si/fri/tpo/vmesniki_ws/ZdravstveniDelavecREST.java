package si.fri.tpo.vmesniki_ws;

import java.util.List;
import javax.xml.ws.Response;
import si.fri.tpo.entitete.*;

public interface ZdravstveniDelavecREST {

	public ZdravstveniDelavec returnZdravstveniDelavec(int id);
	
	void deleteZdravstveniDelavec(int id);
	
	public List<ZdravstveniDelavec> returnZdravstveniDelavecs();
	
	void updateZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec);
	
	void createZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec);
	
}
