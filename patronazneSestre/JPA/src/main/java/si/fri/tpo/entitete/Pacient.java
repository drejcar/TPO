package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the pacient database table.
 * 
 */
@Entity
@Table(name="pacient")
@NamedQuery(name="Pacient.findAll", query="SELECT p FROM Pacient p")
public class Pacient implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int idpacient;

	@Column(nullable=false, length=45)
	private String hisnaStevilka;

	@Column(nullable=false, length=45)
	private String ime;

	@Column(nullable=false, length=45)
	private String priimek;

	@Column(nullable=false, length=45)
	private String stevilkaZdravstvenegaZavarovanja;

	@Column(nullable=false, length=45)
	private String ulica;

	//bi-directional many-to-many association to DelovniNalog
	@ManyToMany
	@JoinTable(
		name="delovni_nalog_has_pacient"
		, joinColumns={
			@JoinColumn(name="idpacient", nullable=false)
			}
		, inverseJoinColumns={
			@JoinColumn(name="iddelovni_nalog", nullable=false)
			}
		)
	private List<DelovniNalog> delovniNalogs;

	//bi-directional many-to-one association to Kontakt
	@ManyToOne
	@JoinColumn(name="idkontakt", nullable=false)
	private Kontakt kontakt;

	//bi-directional many-to-one association to Pacient
	@ManyToOne
	@JoinColumn(name="pacient_idpacient")
	private Pacient pacient;

	//bi-directional many-to-one association to Pacient
	@OneToMany(mappedBy="pacient")
	private List<Pacient> pacients;

	//bi-directional many-to-one association to Posta
	@ManyToOne
	@JoinColumn(name="idposta", nullable=false)
	private Posta posta;

	//bi-directional many-to-one association to SorodstvenoRazmerje
	@ManyToOne
	@JoinColumn(name="idsorodstveno_razmerje", nullable=false)
	private SorodstvenoRazmerje sorodstvenoRazmerje;

	//bi-directional many-to-one association to Spol
	@ManyToOne
	@JoinColumn(name="spol_idspol", nullable=false)
	private Spol spol;

	//bi-directional many-to-one association to Uporabnik
	@ManyToOne
	@JoinColumn(name="iduporabnik", nullable=false)
	private Uporabnik uporabnik;

	public Pacient() {
	}

	public int getIdpacient() {
		return this.idpacient;
	}

	public void setIdpacient(int idpacient) {
		this.idpacient = idpacient;
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

	public String getStevilkaZdravstvenegaZavarovanja() {
		return this.stevilkaZdravstvenegaZavarovanja;
	}

	public void setStevilkaZdravstvenegaZavarovanja(String stevilkaZdravstvenegaZavarovanja) {
		this.stevilkaZdravstvenegaZavarovanja = stevilkaZdravstvenegaZavarovanja;
	}

	public String getUlica() {
		return this.ulica;
	}

	public void setUlica(String ulica) {
		this.ulica = ulica;
	}

	public List<DelovniNalog> getDelovniNalogs() {
		return this.delovniNalogs;
	}

	public void setDelovniNalogs(List<DelovniNalog> delovniNalogs) {
		this.delovniNalogs = delovniNalogs;
	}

	public Kontakt getKontakt() {
		return this.kontakt;
	}

	public void setKontakt(Kontakt kontakt) {
		this.kontakt = kontakt;
	}

	public Pacient getPacient() {
		return this.pacient;
	}

	public void setPacient(Pacient pacient) {
		this.pacient = pacient;
	}

	public List<Pacient> getPacients() {
		return this.pacients;
	}

	public void setPacients(List<Pacient> pacients) {
		this.pacients = pacients;
	}

	public Pacient addPacient(Pacient pacient) {
		getPacients().add(pacient);
		pacient.setPacient(this);

		return pacient;
	}

	public Pacient removePacient(Pacient pacient) {
		getPacients().remove(pacient);
		pacient.setPacient(null);

		return pacient;
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

	public Spol getSpol() {
		return this.spol;
	}

	public void setSpol(Spol spol) {
		this.spol = spol;
	}

	public Uporabnik getUporabnik() {
		return this.uporabnik;
	}

	public void setUporabnik(Uporabnik uporabnik) {
		this.uporabnik = uporabnik;
	}

}