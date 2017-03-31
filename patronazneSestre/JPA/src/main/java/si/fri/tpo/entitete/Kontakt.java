package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the kontakt database table.
 * 
 */
@Entity
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

	@Column(nullable=false, length=45)
	private String ime;

	@Column(nullable=false, length=45)
	private String priimek;

	@Column(nullable=false, length=45)
	private String telefonskaStevilka;

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