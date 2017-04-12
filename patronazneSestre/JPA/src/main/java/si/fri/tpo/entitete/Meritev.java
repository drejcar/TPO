package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import java.util.List;


/**
 * The persistent class for the meritev database table.
 * 
 */
@Entity
@XmlRootElement
@Table(name="meritev")
@NamedQuery(name="Meritev.findAll", query="SELECT m FROM Meritev m")
public class Meritev implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int idmeritev;

	@Column(name="merska_enota", length=255)
	private String merskaEnota;

	private int obvezno;

	@Column(length=45)
	private String opis;

	@Column(name="spodnja_meja", length=45)
	private String spodnjaMeja;

	@Column(name="ugornja_meja", length=45)
	private String ugornjaMeja;

	//bi-directional many-to-many association to Aktivnost
	@ManyToMany
	@JoinTable(
		name="aktivnost_has_meritev"
		, joinColumns={
			@JoinColumn(name="idmeritev", nullable=false)
			}
		, inverseJoinColumns={
			@JoinColumn(name="idaktivnost", nullable=false)
			}
		)
	private List<Aktivnost> aktivnosts;

	public Meritev() {
	}

	public int getIdmeritev() {
		return this.idmeritev;
	}

	public void setIdmeritev(int idmeritev) {
		this.idmeritev = idmeritev;
	}

	public String getMerskaEnota() {
		return this.merskaEnota;
	}

	public void setMerskaEnota(String merskaEnota) {
		this.merskaEnota = merskaEnota;
	}

	public int getObvezno() {
		return this.obvezno;
	}

	public void setObvezno(int obvezno) {
		this.obvezno = obvezno;
	}

	public String getOpis() {
		return this.opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public String getSpodnjaMeja() {
		return this.spodnjaMeja;
	}

	public void setSpodnjaMeja(String spodnjaMeja) {
		this.spodnjaMeja = spodnjaMeja;
	}

	public String getUgornjaMeja() {
		return this.ugornjaMeja;
	}

	public void setUgornjaMeja(String ugornjaMeja) {
		this.ugornjaMeja = ugornjaMeja;
	}

	public List<Aktivnost> getAktivnosts() {
		return this.aktivnosts;
	}

	public void setAktivnosts(List<Aktivnost> aktivnosts) {
		this.aktivnosts = aktivnosts;
	}

}