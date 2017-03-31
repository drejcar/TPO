package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import java.util.List;


/**
 * The persistent class for the spol database table.
 * 
 */
@Entity
@XmlRootElement
@Table(name="spol")
@NamedQueries({
	@NamedQuery(name="Spol.findAll", query="SELECT s FROM Spol s"),
	@NamedQuery(name="Spol.findOne", query="SELECT s FROM Spol s WHERE s.idspol = :id"),
	@NamedQuery(name="Spol.deleteOne", query="DELETE FROM Spol s WHERE s.idspol = :id")

})
public class Spol implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int idspol;

	@Column(nullable=false, length=45)
	private String opis;

	//bi-directional many-to-one association to Pacient
	@OneToMany(fetch = FetchType.EAGER,mappedBy="spol")
	private List<Pacient> pacients;

	public Spol() {
	}

	public int getIdspol() {
		return this.idspol;
	}

	public void setIdspol(int idspol) {
		this.idspol = idspol;
	}

	public String getOpis() {
		return this.opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public List<Pacient> getPacients() {
		return this.pacients;
	}

	public void setPacients(List<Pacient> pacients) {
		this.pacients = pacients;
	}

	public Pacient addPacient(Pacient pacient) {
		getPacients().add(pacient);
		pacient.setSpol(this);

		return pacient;
	}

	public Pacient removePacient(Pacient pacient) {
		getPacients().remove(pacient);
		pacient.setSpol(null);

		return pacient;
	}

}