package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import java.util.List;


/**
 * The persistent class for the kontakt database table.
 * 
 */
@Entity
@XmlRootElement
@Table(name="kontakt")
@NamedQueries({
	@NamedQuery(name="Kontakt.findAll", query="SELECT k FROM Kontakt k"),
	@NamedQuery(name="Kontakt.findOne",query="SELECT k FROM Kontakt k WHERE k.idkontakt = :id"),
	@NamedQuery(name="Kontakt.deleteOne",query="DELETE FROM Kontakt k WHERE k.idkontakt = :id")
})
public class Kontakt implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int idkontakt;

	@Column(name="hisna_stevilka", nullable=false, length=45)
	private String hisnaStevilka;

	@Column(nullable=false, length=45)
	private String ime;

	@Column(nullable=false, length=45)
	private String priimek;

	@Column(nullable=false, length=45)
	private String telefonskaStevilka;

	@Column(nullable=false, length=45)
	private String ulica;

	//bi-directional many-to-one association to Posta
	@ManyToOne
	@JoinColumn(name="posta_idposta", nullable=false)
	private Posta posta;

	//bi-directional many-to-one association to SorodstvenoRazmerje
	@ManyToOne
	@JoinColumn(name="idsorodstveno_razmerje", nullable=false)
	private SorodstvenoRazmerje sorodstvenoRazmerje;

	//bi-directional many-to-one association to Pacient
	@OneToMany(mappedBy="kontakt")
	private List<Pacient> pacients;

	public Kontakt() {
	}

	public int getIdkontakt() {
		return this.idkontakt;
	}

	public void setIdkontakt(int idkontakt) {
		this.idkontakt = idkontakt;
	}

	public String getHisnaStevilka() {
		return this.hisnaStevilka;
	}

	public void setHisnaStevilka(String hisnaStevilka) {
		this.hisnaStevilka = hisnaStevilka;
	}

	public String getIme() {
		return this.ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public String getPriimek() {
		return this.priimek;
	}

	public void setPriimek(String priimek) {
		this.priimek = priimek;
	}

	public String getTelefonskaStevilka() {
		return this.telefonskaStevilka;
	}

	public void setTelefonskaStevilka(String telefonskaStevilka) {
		this.telefonskaStevilka = telefonskaStevilka;
	}

	public String getUlica() {
		return this.ulica;
	}

	public void setUlica(String ulica) {
		this.ulica = ulica;
	}

	public Posta getPosta() {
		return this.posta;
	}

	public void setPosta(Posta posta) {
		this.posta = posta;
	}

	public SorodstvenoRazmerje getSorodstvenoRazmerje() {
		return this.sorodstvenoRazmerje;
	}

	public void setSorodstvenoRazmerje(SorodstvenoRazmerje sorodstvenoRazmerje) {
		this.sorodstvenoRazmerje = sorodstvenoRazmerje;
	}

	public List<Pacient> getPacients() {
		return this.pacients;
	}

	public void setPacients(List<Pacient> pacients) {
		this.pacients = pacients;
	}

	public Pacient addPacient(Pacient pacient) {
		getPacients().add(pacient);
		pacient.setKontakt(this);

		return pacient;
	}

	public Pacient removePacient(Pacient pacient) {
		getPacients().remove(pacient);
		pacient.setKontakt(null);

		return pacient;
	}

}