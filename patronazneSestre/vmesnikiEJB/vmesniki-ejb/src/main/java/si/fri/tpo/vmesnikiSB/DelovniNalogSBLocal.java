package si.fri.tpo.vmesnikiSB;

import java.util.List;

import javax.ejb.Local;

//import entitete delovni nalog
import si.fri.tpo.entitete.DelovniNalog;
//interface za session bean (delovni nalog)
@Local
public interface DelovniNalogSBLocal {
	
	public DelovniNalog vrniDelovniNalog(int id); //vrni specificni delovni nalog
	public List<DelovniNalog> vrniDelovniNalogs(); //vrni seznam delovnih nalogov
	void dodajDelovniNalog(DelovniNalog dn); //dodajanje novega delovnega naloga
	void updateDelovniNalog(DelovniNalog dn); //updatanje ze obstojecega delovnega naloga
	void deleteDelovniNalog(int id); //odstranjevanje delovnega naloga po id-ju
	void odstraniZrno(); //odstranjevanje zrna
}
