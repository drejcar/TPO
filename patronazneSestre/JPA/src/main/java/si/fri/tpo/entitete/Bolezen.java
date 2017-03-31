package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the bolezen database table.
 * 
 */
@Entity
@Table(name="bolezen")
@NamedQuery(name="Bolezen.findAll", query="SELECT b FROM Bolezen b")
public class Bolezen implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int idbolezen;

	@Column(length=45)
	private String opis;

	//bi-directional many-to-one association to DelovniNalog
	@OneToMany(mappedBy="bolezen")
	private List<DelovniNalog> delovniNalogs;

	public Bolezen() {
	}

	public int getIdbolezen() {
		return this.idbolezen;
	}

	public void setIdbolezen(int idbolezen) {
		this.idbolezen = idbolezen;
	}

	public String getOpis() {
		return this.opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public List<DelovniNalog> getDelovniNalogs() {
		return this.delovniNalogs;
	}

	public void setDelovniNalogs(List<DelovniNalog> delovniNalogs) {
		this.delovniNalogs = delovniNalogs;
	}

	public DelovniNalog addDelovniNalog(DelovniNalog delovniNalog) {
		getDelovniNalogs().add(delovniNalog);
		delovniNalog.setBolezen(this);

		return delovniNalog;
	}

	public DelovniNalog removeDelovniNalog(DelovniNalog delovniNalog) {
		getDelovniNalogs().remove(delovniNalog);
		delovniNalog.setBolezen(null);

		return delovniNalog;
	}

}