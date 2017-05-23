package si.fri.tpo.vmesnikiSB;

import javax.ejb.Local;

import si.fri.tpo.entitete.Obisk;

@Local
public interface ObiskSBLocal {
	void odstraniZrno();
	public Obisk returnObisk(int id);
	void updateObisk(Obisk obisk);
	void deleteObisk(int id);
}
