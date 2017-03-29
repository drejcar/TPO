package si.fri.tpo.vmesnikiSB;

import java.util.List;

import javax.ejb.Local;

import si.fri.tpo.entitete.IzvajalecZdravstvenihStoritev;

//intrface za izvajalce zdravstvenih storitev
@Local
public interface IzvajalecZdravstvenihStoritevSBLocal {

	public IzvajalecZdravstvenihStoritev returnIzvajalecZdravstvenihStoritev(int id); //klic za vracanje specificnega izvajalca
	public List<IzvajalecZdravstvenihStoritev> returnIzvajalecZdravstvenihStoritevs(); //klic za vracanje seznam izvajalcev
	void createIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev); //klic za kreiranje novega izvajalca 
	void updateIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev); //klic za updatanje izvajalca
	void deleteIzvajalecZdravstvenihStoritev(int id); //klic za brisanje specificnega izvajalca
	void odstraniZrno();
}
