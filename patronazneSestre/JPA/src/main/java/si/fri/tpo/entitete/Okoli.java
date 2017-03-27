package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the okolis database table.
 * 
 */
@Entity
@Table(name="okolis")
@NamedQuery(name="Okoli.findAll", query="SELECT o FROM Okoli o")
public class Okoli implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int idokolis;

	@Column(length=45)
	private String opis;

	//bi-directional many-to-one association to ZdravstveniDelavec
	@OneToMany(mappedBy="okoli")
	private List<ZdravstveniDelavec> zdravstveniDelavecs;

	public Okoli() {
	}

	public int getIdokolis() {
		return this.idokolis;
	}

	public void setIdokolis(int idokolis) {
		this.idokolis = idokolis;
	}

	public String getOpis() {
		return this.opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public List<ZdravstveniDelavec> getZdravstveniDelavecs() {
		return this.zdravstveniDelavecs;
	}

	public void setZdravstveniDelavecs(List<ZdravstveniDelavec> zdravstveniDelavecs) {
		this.zdravstveniDelavecs = zdravstveniDelavecs;
	}

	public ZdravstveniDelavec addZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec) {
		getZdravstveniDelavecs().add(zdravstveniDelavec);
		zdravstveniDelavec.setOkoli(this);

		return zdravstveniDelavec;
	}

	public ZdravstveniDelavec removeZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec) {
		getZdravstveniDelavecs().remove(zdravstveniDelavec);
		zdravstveniDelavec.setOkoli(null);

		return zdravstveniDelavec;
	}

}