package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import java.util.List;


/**
 * The persistent class for the vrsta_obiska database table.
 * 
 */
@Entity
@XmlRootElement
@Table(name="vrsta_obiska")
@NamedQueries({
	@NamedQuery(name="VrstaObiska.findAll", query="SELECT v FROM VrstaObiska v"),
	@NamedQuery(name="VrstaObiska.findOne",query="SELECT v FROM VrstaObiska v WHERE v.idvrstaObiska = :id"),
	@NamedQuery(name="VrstaObiska.deleteOne",query="DELETE FROM VrstaObiska v WHERE v.idvrstaObiska = :id")
})
public class VrstaObiska implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="idvrsta_obiska", unique=true, nullable=false)
	private int idvrstaObiska;

	@Column(nullable=false, length=45)
	private String opis;

	//bi-directional many-to-one association to Aktivnost
	@OneToMany(mappedBy="vrstaObiska")
	private List<Aktivnost> aktivnosts;

	//bi-directional many-to-one association to DelovniNalog
	@OneToMany(mappedBy="vrstaObiska")
	private List<DelovniNalog> delovniNalogs;

	public VrstaObiska() {
	}

	public int getIdvrstaObiska() {
		return this.idvrstaObiska;
	}

	public void setIdvrstaObiska(int idvrstaObiska) {
		this.idvrstaObiska = idvrstaObiska;
	}

	public String getOpis() {
		return this.opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public List<Aktivnost> getAktivnosts() {
		return this.aktivnosts;
	}

	public void setAktivnosts(List<Aktivnost> aktivnosts) {
		this.aktivnosts = aktivnosts;
	}

	public Aktivnost addAktivnost(Aktivnost aktivnost) {
		getAktivnosts().add(aktivnost);
		aktivnost.setVrstaObiska(this);

		return aktivnost;
	}

	public Aktivnost removeAktivnost(Aktivnost aktivnost) {
		getAktivnosts().remove(aktivnost);
		aktivnost.setVrstaObiska(null);

		return aktivnost;
	}

	public List<DelovniNalog> getDelovniNalogs() {
		return this.delovniNalogs;
	}

	public void setDelovniNalogs(List<DelovniNalog> delovniNalogs) {
		this.delovniNalogs = delovniNalogs;
	}

	public DelovniNalog addDelovniNalog(DelovniNalog delovniNalog) {
		getDelovniNalogs().add(delovniNalog);
		delovniNalog.setVrstaObiska(this);

		return delovniNalog;
	}

	public DelovniNalog removeDelovniNalog(DelovniNalog delovniNalog) {
		getDelovniNalogs().remove(delovniNalog);
		delovniNalog.setVrstaObiska(null);

		return delovniNalog;
	}

}