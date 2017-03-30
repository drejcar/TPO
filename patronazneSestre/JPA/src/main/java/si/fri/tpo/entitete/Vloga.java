package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import java.util.List;


/**
 * The persistent class for the vloga database table.
 * 
 */
@Entity
@XmlRootElement
@Table(name="vloga")
@NamedQueries({
	@NamedQuery(name="Vloga.findAll", query="SELECT v FROM Vloga v"),
	@NamedQuery(name="Vloga.findOne", query="SELECT v FROM Vloga v WHERE v.idvloga = :id"),
	@NamedQuery(name="Vloga.deleteOne",query="DELETE FROM Vloga v WHERE v.idvloga = :id")
})
public class Vloga implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int idvloga;

	@Column(nullable=false, length=45)
	private String opis;

	//bi-directional many-to-one association to Uporabnik
	@OneToMany(mappedBy="vloga")
	private List<Uporabnik> uporabniks;

	public Vloga() {
	}

	public int getIdvloga() {
		return this.idvloga;
	}

	public void setIdvloga(int idvloga) {
		this.idvloga = idvloga;
	}

	public String getOpis() {
		return this.opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public List<Uporabnik> getUporabniks() {
		return this.uporabniks;
	}

	public void setUporabniks(List<Uporabnik> uporabniks) {
		this.uporabniks = uporabniks;
	}

	public Uporabnik addUporabnik(Uporabnik uporabnik) {
		getUporabniks().add(uporabnik);
		uporabnik.setVloga(this);

		return uporabnik;
	}

	public Uporabnik removeUporabnik(Uporabnik uporabnik) {
		getUporabniks().remove(uporabnik);
		uporabnik.setVloga(null);

		return uporabnik;
	}

}