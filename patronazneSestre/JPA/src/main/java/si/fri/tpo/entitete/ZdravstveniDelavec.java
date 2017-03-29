package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the zdravstveni_delavec database table.
 * 
 */
@Entity
@Table(name="zdravstveni_delavec")
@NamedQueries({
	@NamedQuery(name="ZdravstveniDelavec.findAll", query="SELECT z FROM ZdravstveniDelavec z"),
	@NamedQuery(name="ZdravstveniDelavec.findOne", query="SELECT z FROM ZdravstveniDelavec z WHERE z.idzdravstveniDelavec = :id"),
	@NamedQuery(name="ZdravstveniDelavec.deleteOne", query="DELETE FROM ZdravstveniDelavec z WHERE z.idzdravstveniDelavec = :id")
})
public class ZdravstveniDelavec implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="idzdravstveni_delavec", unique=true, nullable=false)
	private int idzdravstveniDelavec;

	@Column(nullable=false, length=45)
	private String ime;

	@Column(nullable=false, length=45)
	private String priimek;

	//bi-directional many-to-one association to DelovniNalog
	@OneToMany(mappedBy="zdravstveniDelavec")
	private List<DelovniNalog> delovniNalogs;

	//bi-directional many-to-one association to IzvajalecZdravstvenihStoritev
	@ManyToOne
	@JoinColumn(name="idizvajalec_zdravstvenih_storitev", nullable=false)
	private IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev;

	//bi-directional many-to-one association to Okoli
	@ManyToOne
	@JoinColumn(name="idokolis", nullable=false)
	private Okolis okolis;

	//bi-directional many-to-one association to Uporabnik
	@ManyToOne
	@JoinColumn(name="iduporabnik", nullable=false)
	private Uporabnik uporabnik;

	public ZdravstveniDelavec() {
	}

	public int getIdzdravstveniDelavec() {
		return this.idzdravstveniDelavec;
	}

	public void setIdzdravstveniDelavec(int idzdravstveniDelavec) {
		this.idzdravstveniDelavec = idzdravstveniDelavec;
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

	public List<DelovniNalog> getDelovniNalogs() {
		return this.delovniNalogs;
	}

	public void setDelovniNalogs(List<DelovniNalog> delovniNalogs) {
		this.delovniNalogs = delovniNalogs;
	}

	public DelovniNalog addDelovniNalog(DelovniNalog delovniNalog) {
		getDelovniNalogs().add(delovniNalog);
		delovniNalog.setZdravstveniDelavec(this);

		return delovniNalog;
	}

	public DelovniNalog removeDelovniNalog(DelovniNalog delovniNalog) {
		getDelovniNalogs().remove(delovniNalog);
		delovniNalog.setZdravstveniDelavec(null);

		return delovniNalog;
	}

	public IzvajalecZdravstvenihStoritev getIzvajalecZdravstvenihStoritev() {
		return this.izvajalecZdravstvenihStoritev;
	}

	public void setIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev) {
		this.izvajalecZdravstvenihStoritev = izvajalecZdravstvenihStoritev;
	}

	public Okolis getOkolis() {
		return this.okolis;
	}

	public void setOkolis(Okolis okolis) {
		this.okolis = okolis;
	}

	public Uporabnik getUporabnik() {
		return this.uporabnik;
	}

	public void setUporabnik(Uporabnik uporabnik) {
		this.uporabnik = uporabnik;
	}

}