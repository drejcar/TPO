package si.fri.tpo.entitete;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import java.util.Date;


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

	@Temporal(TemporalType.DATE)
	@Column(name="datum_obiska", nullable=false)
	private Date datumObiska;

	@Column(name="fixen_datum", nullable=false)
	private int fixenDatum;

	//bi-directional many-to-one association to DelovniNalog
	@ManyToOne
	@JoinColumn(name="iddelovni_nalog", nullable=false)
	private DelovniNalog delovniNalog;

	public Obisk() {
	}

	public int getIdobisk() {
		return this.idobisk;
	}

	public void setIdobisk(int idobisk) {
		this.idobisk = idobisk;
	}

	public Date getDatumObiska() {
		return this.datumObiska;
	}

	public void setDatumObiska(Date datumObiska) {
		this.datumObiska = datumObiska;
	}

	public int getFixenDatum() {
		return this.fixenDatum;
	}

	public void setFixenDatum(int fixenDatum) {
		this.fixenDatum = fixenDatum;
	}

	public DelovniNalog getDelovniNalog() {
		return this.delovniNalog;
	}

	public void setDelovniNalog(DelovniNalog delovniNalog) {
		this.delovniNalog = delovniNalog;
	}

}