package si.fri.tpo.vmesnikiSB;

import java.util.List;

import javax.ejb.Local;

import si.fri.tpo.entitete.Kontakt;

//interface za Kontaktne osebe
@Local
public interface KontaktSBLocal {
	
	public Kontakt returnKontakt(int id); //klic za vracanje enega kontakta
	public List<Kontakt> returnKontakts(); //klic za vracanje seznama kontaktov
	void createKontakt(Kontakt kontakt); //klic za kreiranje novega kontakta
	void updateKontakt(Kontakt kontakt); //klic za updatanje kontakta
	void deleteKontakt(int id); //klic za brisanje specificnega kontakta
	void odstraniZrno(); //klic za odstranjevanje zrna
}
