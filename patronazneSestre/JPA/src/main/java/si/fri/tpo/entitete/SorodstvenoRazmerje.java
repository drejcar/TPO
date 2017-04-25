package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import java.util.Set;


/**
 * The persistent class for the sorodstveno_razmerje database table.
 * 
 */
@Entity
@XmlRootElement
@Table(name="sorodstveno_razmerje")
@NamedQueries({
	@NamedQuery(name="SorodstvenoRazmerje.findAll", query="SELECT s FROM SorodstvenoRazmerje s"),
	@NamedQuery(name="SorodstvenoRazmerje.findOne",query="SELECT s FROM SorodstvenoRazmerje s WHERE s.idsorodstvenoRazmerje = :id"),
	@NamedQuery(name="SorodstvenoRazmerje.deleteOne",query="DELETE FROM SorodstvenoRazmerje s WHERE s.idsorodstvenoRazmerje = :id")
})
public class SorodstvenoRazmerje implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="idsorodstveno_razmerje", unique=true, nullable=false)
	private int idsorodstvenoRazmerje;

	@Column(length=45)
	private String opis;

	//bi-directional many-to-one association to Kontakt
	//@OneToMany(mappedBy="sorodstvenoRazmerje")
	//private Set<Kontakt> kontakts;

	//bi-directional many-to-one association to Pacient
	//@OneToMany(mappedBy="sorodstvenoRazmerje")
	//private Set<Pacient> pacients;

	public SorodstvenoRazmerje() {
	}

	public int getIdsorodstvenoRazmerje() {
		return this.idsorodstvenoRazmerje;
	}

	public void setIdsorodstvenoRazmerje(int idsorodstvenoRazmerje) {
		this.idsorodstvenoRazmerje = idsorodstvenoRazmerje;
	}

	public String getOpis() {
		return this.opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}
/*
	public Set<Kontakt> getKontakts() {
		return this.kontakts;
	}

	public void setKontakts(Set<Kontakt> kontakts) {
		this.kontakts = kontakts;
	}

	public Kontakt addKontakt(Kontakt kontakt) {
		getKontakts().add(kontakt);
		kontakt.setSorodstvenoRazmerje(this);

		return kontakt;
	}

	public Kontakt removeKontakt(Kontakt kontakt) {
		getKontakts().remove(kontakt);
		kontakt.setSorodstvenoRazmerje(null);

		return kontakt;
	}

	public Set<Pacient> getPacients() {
		return this.pacients;
	}

	public void setPacients(List<Pacient> pacients) {
		this.pacients = pacients;
	}

	public Pacient addPacient(Pacient pacient) {
		getPacients().add(pacient);
		pacient.setSorodstvenoRazmerje(this);

		return pacient;
	}

	public Pacient removePacient(Pacient pacient) {
		getPacients().remove(pacient);
		pacient.setSorodstvenoRazmerje(null);

		return pacient;
	}
*/
}