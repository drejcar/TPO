package si.fri.tpo.vmesniki_ws;

import java.util.List;
import javax.xml.ws.Response;
import si.fri.tpo.entitete.*;

public interface sifrantiREST {
	void createZdravilo(Zdravilo zdravilo);
	void createMaterial(Material material);
	void createSpol(Spol spol);
	void createOkolis(Okolis okolis);
	void createPosta(Posta posta);
	void createVloga(Vloga vloga);
}
