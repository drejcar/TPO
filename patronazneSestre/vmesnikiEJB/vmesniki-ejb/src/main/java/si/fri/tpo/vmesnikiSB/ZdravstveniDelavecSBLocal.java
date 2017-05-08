package si.fri.tpo.vmesnikiSB;

import java.util.List;

import javax.ejb.Local;

import si.fri.tpo.entitete.ZdravstveniDelavec;

//interface za zdravstvene delavce 
@Local
public interface ZdravstveniDelavecSBLocal {
	
	public ZdravstveniDelavec returnZdravstveniDelavec(int id); //vracanje specificnega zdravstvenega delavca
	public List<ZdravstveniDelavec> returnZdravstveniDelavecs(); //vracanje liste zdravstvenih delavcev
	void createZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec); // kreiranje novega zdravstvenega delavca
	void updateZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec); // update zdravstvenih delavcev
	void deleteZdravstveniDelavec(int id); //brisanje zdravstvenega delavca
	void odstraniZrno(); // za odstranjevanje zrna
	public List<ZdravstveniDelavec> returnPatronazneSestre(int id);
	public ZdravstveniDelavec patronaznaSluzbaById(int izvajalec);
}
