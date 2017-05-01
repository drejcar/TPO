package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;


import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.SelectBeforeUpdate;

import java.util.Date;
import java.util.Set;


/**
 * The persistent class for the pacient database table.
 * 
 */
@Entity
@XmlRootElement
@Table(name="pacient")
@SelectBeforeUpdate(value=true)
@DynamicUpdate(value=true)
@NamedQueries({
	@NamedQuery(name="Pacient.findAll", query="SELECT p FROM Pacient p"),
	@NamedQuery(name="Pacient.findOne",query="SELECT p FROM Pacient p WHERE p.idpacient = :id"),
	@NamedQuery(name="Pacient.deleteOne",query="DELETE FROM Pacient p WHERE p.idpacient = :id"),
	@NamedQuery(name="Pacient.findOneZZ",query="SELECT p FROM Pacient p WHERE p.stevilkaZdravstvenegaZavarovanja = :stevilkaZZ")
})
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
	private String telefonskaStevilka;

	@Column(nullable=false, length=45)
	private String ulica;

	@Temporal(TemporalType.DATE)
	@Column(name="datum_rojstva", nullable=false)
	private Date datumRojstva;
	
	//bi-directional many-to-many association to DelovniNalog
	@ManyToMany(mappedBy="pacients", fetch=FetchType.EAGER)
	private Set<DelovniNalog> delovniNalogs;

	//bi-directional many-to-one association to Kontakt
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="idkontakt", nullable=true)
	private Kontakt kontakt;

	//bi-directional many-to-one association to Pacient
	@ManyToOne
	@JoinColumn(name="pacient_idpacient")
	private Pacient pacient;

	//bi-directional many-to-one association to Pacient
	@OneToMany(mappedBy="pacient", fetch=FetchType.EAGER)
	private Set<Pacient> pacients;

	//bi-directional many-to-one association to Posta
	@ManyToOne
	@JoinColumn(name="idposta", nullable=false)
	private Posta posta;

	//bi-directional many-to-one association to SorodstvenoRazmerje
	@ManyToOne
	@JoinColumn(name="idsorodstveno_razmerje", nullable=true)
	private SorodstvenoRazmerje sorodstvenoRazmerje;

	//bi-directional many-to-one association to Spol
	@ManyToOne
	@JoinColumn(name="idspol", nullable=false)
	private Spol spol;

	@ManyToOne
	@JoinColumn(name="idOkolis", nullable=false)
	private Okolis okolis;
	
	//bi-directional many-to-one association to Uporabnik
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="iduporabnik", nullable=true)
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
	/*
	public Set<DelovniNalog> getDelovniNalogs() {
		return this.delovniNalogs;
	}
	*/
	public void setDelovniNalogs(Set<DelovniNalog> delovniNalogs) {
		this.delovniNalogs = delovniNalogs;
	}
	//dodano za trackanje razmerij
	/*
	public void setDelovniNalog(DelovniNalog delovniNalog){
		this.delovniNalogs.add(delovniNalog);
		if(!delovniNalog.getPacients().contains(this)){
			delovniNalog.getPacients().add(this);
		}
	}
	*/
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

	public Set<Pacient> getPacients() {
		return this.pacients;
	}

	public void setPacients(Set<Pacient> pacients) {
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

	public Okolis getOkolis() {
		return this.okolis;
	}

	public void setOkolis(Okolis okolis) {
		this.okolis = okolis;
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

	public Date getDatumRojstva() {
		return this.datumRojstva;
	}

	public void setDatumRojstva(Date datumRojstva) {
		this.datumRojstva = datumRojstva;
	}
}