package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import java.util.List;


/**
 * The persistent class for the posta database table.
 * 
 */
@Entity
@XmlRootElement
@Table(name="posta")
@NamedQueries({
	@NamedQuery(name="Posta.findAll", query="SELECT p FROM Posta p"),
	@NamedQuery(name="Posta.findOne", query="SELECT p FROM Posta p WHERE p.idposta = :id"),
	@NamedQuery(name="Posta.deleteOne", query="DELETE FROM Posta p WHERE p.idposta = :id")
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
	@OneToMany(mappedBy="posta")
	private List<IzvajalecZdravstvenihStoritev> izvajalecZdravstvenihStoritevs;

	//bi-directional many-to-one association to Pacient
	@OneToMany(mappedBy="posta")
	private List<Pacient> pacients;

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

	public List<IzvajalecZdravstvenihStoritev> getIzvajalecZdravstvenihStoritevs() {
		return this.izvajalecZdravstvenihStoritevs;
	}

	public void setIzvajalecZdravstvenihStoritevs(List<IzvajalecZdravstvenihStoritev> izvajalecZdravstvenihStoritevs) {
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

}