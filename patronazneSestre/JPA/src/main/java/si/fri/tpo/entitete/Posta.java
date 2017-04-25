package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.Set;


/**
 * The persistent class for the posta database table.
 * 
 */
@Entity
@XmlRootElement
@Table(name="posta")
@NamedQueries({
	@NamedQuery(name="Posta.findAll", query="SELECT p.idposta, p.opis FROM Posta p"),
	@NamedQuery(name="Posta.findOne",query="SELECT p FROM Posta p WHERE p.idposta = :idposta"),
	@NamedQuery(name="Posta.deleteOne",query="DELETE FROM Posta p WHERE p.idposta = :idposta")
})
public class Posta implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int idposta;

	@Column(nullable=false, length=45)
	private String opis;

	//bi-directional many-to-one association to IzvajalecZdravstvenihStoritev
	//@OneToMany(mappedBy="posta")
	//private List<IzvajalecZdravstvenihStoritev> izvajalecZdravstvenihStoritevs;

	//bi-directional many-to-one association to Kontakt
	//@OneToMany(mappedBy="posta")
	//private List<Kontakt> kontakts;

	//bi-directional many-to-one association to Okoli
	//@OneToMany(mappedBy="posta")
	//private List<Okolis> okolis;

	//bi-directional many-to-one association to Pacient
	//@OneToMany(mappedBy="posta")
	//private List<Pacient> pacients;

	public Posta() {
	}

	public int getIdposta() {
		return this.idposta;
	}

	public void setIdposta(int idposta) {
		this.idposta = idposta;
	}

	public String getOpis() {
		return this.opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}
/*
	public Set<IzvajalecZdravstvenihStoritev> getIzvajalecZdravstvenihStoritevs() {
		return this.izvajalecZdravstvenihStoritevs;
	}

	public void setIzvajalecZdravstvenihStoritevs(Set<IzvajalecZdravstvenihStoritev> izvajalecZdravstvenihStoritevs) {
		this.izvajalecZdravstvenihStoritevs = izvajalecZdravstvenihStoritevs;
	}

	public IzvajalecZdravstvenihStoritev addIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev) {
		getIzvajalecZdravstvenihStoritevs().add(izvajalecZdravstvenihStoritev);
		izvajalecZdravstvenihStoritev.setPosta(this);

		return izvajalecZdravstvenihStoritev;
	}

	public IzvajalecZdravstvenihStoritev removeIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev) {
		getIzvajalecZdravstvenihStoritevs().remove(izvajalecZdravstvenihStoritev);
		izvajalecZdravstvenihStoritev.setPosta(null);

		return izvajalecZdravstvenihStoritev;
	}

	public Set<Kontakt> getKontakts() {
		return this.kontakts;
	}

	public void setKontakts(Set<Kontakt> kontakts) {
		this.kontakts = kontakts;
	}

	public Kontakt addKontakt(Kontakt kontakt) {
		getKontakts().add(kontakt);
		kontakt.setPosta(this);

		return kontakt;
	}

	public Kontakt removeKontakt(Kontakt kontakt) {
		getKontakts().remove(kontakt);
		kontakt.setPosta(null);

		return kontakt;
	}

	public List<Okolis> getOkolis() {
		return this.okolis;
	}

	public void setOkolis(List<Okolis> okolis) {
		this.okolis = okolis;
	}

	public Okolis addOkoli(Okolis okoli) {
		getOkolis().add(okoli);
		okoli.setPosta(this);

		return okoli;
	}

	public Okolis removeOkoli(Okolis okoli) {
		getOkolis().remove(okoli);
		okoli.setPosta(null);

		return okoli;
	}

	public List<Pacient> getPacients() {
		return this.pacients;
	}

	public void setPacients(List<Pacient> pacients) {
		this.pacients = pacients;
	}

	public Pacient addPacient(Pacient pacient) {
		getPacients().add(pacient);
		pacient.setPosta(this);

		return pacient;
	}

	public Pacient removePacient(Pacient pacient) {
		getPacients().remove(pacient);
		pacient.setPosta(null);

		return pacient;
	}
*/
}