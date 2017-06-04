package si.fri.tpo.vmesnikiSB;

import java.util.Date;
import java.util.List;

import javax.ejb.Local;

import si.fri.tpo.entitete.Obisk;
import si.fri.tpo.entitete.PorociloAplikacijaInjekcije;
import si.fri.tpo.entitete.PorociloKontrolaZdravstvenegaStanja;
import si.fri.tpo.entitete.PorociloObiskNosecnice;
import si.fri.tpo.entitete.PorociloObiskNovorojencka;
import si.fri.tpo.entitete.PorociloObiskOtrocnice;
import si.fri.tpo.entitete.PorociloOdvzemKrvi;
import si.fri.tpo.entitete.PorociloPreventivaStarostnika;
import si.fri.tpo.entitete.ZdravstveniDelavec;

@Local
public interface ObiskSBLocal {
	void odstraniZrno();
	public Obisk returnObisk(int id);
	void updateObisk(Obisk obisk);
	void deleteObisk(int id);
	List<Obisk> getObisksNadomescanja(int idMaticna, Date ood, Date doo);
	List<Obisk> getObisksDN(int idMaticna, Date ood, Date doo, ZdravstveniDelavec nadomestna);
	void endNadomescanje(int id);
	void updPorInek(PorociloAplikacijaInjekcije porocilo);
	void updPorZdrSta(PorociloKontrolaZdravstvenegaStanja porocilo);
	void updPorNov(PorociloObiskNovorojencka porocilo);
	void updPorNos(PorociloObiskNosecnice porocilo);
	void updPorOtr(PorociloObiskOtrocnice porocilo);
	void updPorKri(PorociloOdvzemKrvi porocilo);
	void updPorStar(PorociloPreventivaStarostnika porocilo);
}
