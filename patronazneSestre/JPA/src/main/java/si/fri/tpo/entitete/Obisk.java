package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import java.util.List;


/**
 * The persistent class for the obisk database table.
 * 
 */
@Entity
@XmlRootElement
@Table(name="obisk")
@NamedQueries({
	@NamedQuery(name="Obisk.findAll", query="SELECT o FROM Obisk o"),
	@NamedQuery(name="Obisk.findOne",query="SELECT o FROM Obisk o WHERE o.idobisk = :id"),
	@NamedQuery(name="Obisk.deleteOne",query="DELETE FROM Obisk o WHERE o.idobisk = :id")
})
public class Obisk implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int idobisk;

	//bi-directional many-to-one association to DelovniNalog
	@OneToMany(mappedBy="obisk")
	private List<DelovniNalog> delovniNalogs;

	public Obisk() {
	}

	public int getIdobisk() {
		return this.idobisk;
	}

	public void setIdobisk(int idobisk) {
		this.idobisk = idobisk;
	}

	public List<DelovniNalog> getDelovniNalogs() {
		return this.delovniNalogs;
	}

	public void setDelovniNalogs(List<DelovniNalog> delovniNalogs) {
		this.delovniNalogs = delovniNalogs;
	}

	public DelovniNalog addDelovniNalog(DelovniNalog delovniNalog) {
		getDelovniNalogs().add(delovniNalog);
		delovniNalog.setObisk(this);

		return delovniNalog;
	}

	public DelovniNalog removeDelovniNalog(DelovniNalog delovniNalog) {
		getDelovniNalogs().remove(delovniNalog);
		delovniNalog.setObisk(null);

		return delovniNalog;
	}

}