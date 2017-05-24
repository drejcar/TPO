package si.fri.tpo.vmesnikiSB;

import java.util.Date;
import java.util.List;

import javax.ejb.Local;

import si.fri.tpo.entitete.Obisk;

@Local
public interface ObiskSBLocal {
	void odstraniZrno();
	public Obisk returnObisk(int id);
	void updateObisk(Obisk obisk);
	void deleteObisk(int id);
	List<Obisk> getObisksDN(int idMaticna, Date ood, Date doo);
	List<Obisk> getObisksNadomescanja(int idMaticna, Date ood, Date doo);
}
