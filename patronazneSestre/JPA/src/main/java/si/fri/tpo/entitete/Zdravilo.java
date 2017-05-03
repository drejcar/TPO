package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import java.util.Set;


/**
 * The persistent class for the zdravilo database table.
 * 
 */
@Entity
@XmlRootElement
@Table(name="zdravilo")
@NamedQueries({
	@NamedQuery(name="Zdravilo.findAll", query="SELECT z FROM Zdravilo z"),
	@NamedQuery(name="Zdravilo.findOne",query="SELECT z FROM Zdravilo z WHERE z.idzdravilo = :id"),
	@NamedQuery(name="Zdravilo.deleteOne",query="DELETE FROM Zdravilo z WHERE z.idzdravilo = :id")
})
public class Zdravilo implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int idzdravilo;

	@Column(nullable=false, length=45)
	private String opis;

	//bi-directional many-to-many association to DelovniNalog
	@ManyToMany(mappedBy="zdravilos")
	private Set<DelovniNalog> delovniNalogs;

	public Zdravilo() {
	}

	public int getIdzdravilo() {
		return this.idzdravilo;
	}

	public void setIdzdravilo(int idzdravilo) {
		this.idzdravilo = idzdravilo;
	}

	public String getOpis() {
		return this.opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}
/*
	public Set<DelovniNalog> getDelovniNalogs() {
		return this.delovniNalogs;
	}
*/
	public void setDelovniNalogs(Set<DelovniNalog> delovniNalogs) {
		this.delovniNalogs = delovniNalogs;
	}

}