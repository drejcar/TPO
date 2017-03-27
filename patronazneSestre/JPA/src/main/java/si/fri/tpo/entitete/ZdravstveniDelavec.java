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
@NamedQuery(name="ZdravstveniDelavec.findAll", query="SELECT z FROM ZdravstveniDelavec z")
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
	private Okoli okoli;

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

	public Okoli getOkoli() {
		return this.okoli;
	}

	public void setOkoli(Okoli okoli) {
		this.okoli = okoli;
	}

	public Uporabnik getUporabnik() {
		return this.uporabnik;
	}

	public void setUporabnik(Uporabnik uporabnik) {
		this.uporabnik = uporabnik;
	}

}