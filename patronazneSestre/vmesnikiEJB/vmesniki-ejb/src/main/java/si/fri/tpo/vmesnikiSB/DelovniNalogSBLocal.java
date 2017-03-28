package si.fri.tpo.vmesnikiSB;

import javax.ejb.Local;

//import entitete delovni nalog
import si.fri.tpo.entitete.DelovniNalog;
//interface-i za session beane
@Local
public interface DelovniNalogSBLocal {
	void dodajDelovniNalog(DelovniNalog dn); //dodajanje novega delovnega naloga
	void updateDelovniNalog(DelovniNalog dn); //updatanje ze obstojecega delovnega naloga
	void deleteDelovniNalog(int id); //odstranjevanje delovnega naloga po id-ju
	void odstraniZrno(); //odstranjevanje zrna
}
