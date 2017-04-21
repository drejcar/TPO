package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.List;


/**
 * The persistent class for the aktivnost database table.
 * 
 */
@Entity
@XmlRootElement
@Table(name="aktivnost")
@NamedQuery(name="Aktivnost.findAll", query="SELECT a FROM Aktivnost a")
public class Aktivnost implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int idaktivnost;

	@Column(length=255)
	private String opis;

	//bi-directional many-to-one association to VrstaObiska
	@ManyToOne
	@JoinColumn(name="idvrsta_obiska", nullable=false)
	private VrstaObiska vrstaObiska;

	//bi-directional many-to-many association to Meritev
	@ManyToMany(mappedBy="aktivnosts")
	private List<Meritev> meritevs;

	public Aktivnost() {
	}

	public int getIdaktivnost() {
		return this.idaktivnost;
	}

	public void setIdaktivnost(int idaktivnost) {
		this.idaktivnost = idaktivnost;
	}

	public String getOpis() {
		return this.opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}
/*
	public VrstaObiska getVrstaObiska() {
		return this.vrstaObiska;
	}

	public void setVrstaObiska(VrstaObiska vrstaObiska) {
		this.vrstaObiska = vrstaObiska;
	}
*/
	public List<Meritev> getMeritevs() {
		return this.meritevs;
	}

	public void setMeritevs(List<Meritev> meritevs) {
		this.meritevs = meritevs;
	}

}