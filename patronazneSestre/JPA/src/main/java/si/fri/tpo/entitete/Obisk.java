package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SelectBeforeUpdate;

import java.util.Date;
import java.util.Set;


/**
 * The persistent class for the obisk database table.
 * 
 */
@Entity
@DynamicUpdate(value=true)
@SelectBeforeUpdate(value=true) 
@XmlRootElement
@Table(name="obisk")
@NamedQueries({
	@NamedQuery(name="Obisk.findAll", query="SELECT o FROM Obisk o"),
	@NamedQuery(name="Obisk.findOne",query="SELECT o FROM Obisk o WHERE o.idobisk = :id"),
	@NamedQuery(name="Obisk.deleteOne",query="DELETE FROM Obisk o WHERE o.idobisk = :id"),
	@NamedQuery(name="Obisk.getByNadomestna",query="SELECT o FROM Obisk o WHERE o.opravljen=0 AND o.nadomestnaSestra.idzdravstveniDelavec=:id AND o.datumObiska BETWEEN :startDate AND :endDate")
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

	@Temporal(TemporalType.DATE)
	@Column(name="dejanski_datum_obiska", nullable=false)
	private Date dejanskiDatumObiska;

	@Column(name="fixen_datum", nullable=false)
	private int fixenDatum;

	@ManyToOne
	@JoinColumn(name="id_nadomestna_sestra", nullable=true)
	private ZdravstveniDelavec nadomestnaSestra;

	@ManyToOne
	@JoinColumn(name="iddelovni_nalog", nullable=false)
	private DelovniNalog delovniNalog;

	@Column(nullable=false)
	private int opravljen;

	//bi-directional many-to-one association to PorociloAplikacijaInjekcije
	@ManyToOne
	@JoinColumn(name="idporocilo_aplikacija_injekcije")
	private PorociloAplikacijaInjekcije porociloAplikacijaInjekcije;

	//bi-directional many-to-one association to PorociloKontrolaZdravstvenegaStanja
	@ManyToOne
	@JoinColumn(name="idporocilo_kontrola_zdravstvenega_stanja")
	private PorociloKontrolaZdravstvenegaStanja porociloKontrolaZdravstvenegaStanja;

	//bi-directional many-to-one association to PorociloObiskNosecnice
	@ManyToOne
	@JoinColumn(name="idporocilo_obisk_nosecnice")
	private PorociloObiskNosecnice porociloObiskNosecnice;

	//bi-directional many-to-one association to PorociloObiskOtrocnice
	@ManyToOne
	@JoinColumn(name="idobiskotrocnice")
	private PorociloObiskOtrocnice porociloObiskOtrocnice;

	//bi-directional many-to-one association to PorociloOdvzemKrvi
	@ManyToOne
	@JoinColumn(name="idporocilo_odvzem_krvi")
	private PorociloOdvzemKrvi porociloOdvzemKrvi;

	//bi-directional many-to-one association to PorociloPreventivaStarostnika
	@ManyToOne
	@JoinColumn(name="idporocilo_preventiva_starostnika")
	private PorociloPreventivaStarostnika porociloPreventivaStarostnika;

	//bi-directional many-to-one association to PorociloObiskNovorojencka
	@OneToMany(mappedBy="obisk",fetch=FetchType.EAGER)
	private Set<PorociloObiskNovorojencka> porociloObiskNovorojenckas;

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

	public Date getDejanskiDatumObiska() {
		return this.dejanskiDatumObiska;
	}

	public void setDejanskiDatumObiska(Date dejanskiDatumObiska) {
		this.dejanskiDatumObiska = dejanskiDatumObiska;
	}

	public int getFixenDatum() {
		return this.fixenDatum;
	}

	public void setFixenDatum(int fixenDatum) {
		this.fixenDatum = fixenDatum;
	}

	/*
	public DelovniNalog getDelovniNalog() {
		return this.delovniNalog;
	}
	 */
	
	public void setDelovniNalog(DelovniNalog delovniNalog) {
		this.delovniNalog = delovniNalog;
	}

	public int getOpravljen() {
		return this.opravljen;
	}

	public void setOpravljen(int opravljen) {
		this.opravljen = opravljen;
	}

	public PorociloAplikacijaInjekcije getPorociloAplikacijaInjekcije() {
		return this.porociloAplikacijaInjekcije;
	}

	public void setPorociloAplikacijaInjekcije(PorociloAplikacijaInjekcije porociloAplikacijaInjekcije) {
		this.porociloAplikacijaInjekcije = porociloAplikacijaInjekcije;
	}

	public PorociloKontrolaZdravstvenegaStanja getPorociloKontrolaZdravstvenegaStanja() {
		return this.porociloKontrolaZdravstvenegaStanja;
	}

	public void setPorociloKontrolaZdravstvenegaStanja(PorociloKontrolaZdravstvenegaStanja porociloKontrolaZdravstvenegaStanja) {
		this.porociloKontrolaZdravstvenegaStanja = porociloKontrolaZdravstvenegaStanja;
	}

	public PorociloObiskNosecnice getPorociloObiskNosecnice() {
		return this.porociloObiskNosecnice;
	}

	public void setPorociloObiskNosecnice(PorociloObiskNosecnice porociloObiskNosecnice) {
		this.porociloObiskNosecnice = porociloObiskNosecnice;
	}

	public PorociloObiskOtrocnice getPorociloObiskOtrocnice() {
		return this.porociloObiskOtrocnice;
	}

	public void setPorociloObiskOtrocnice(PorociloObiskOtrocnice porociloObiskOtrocnice) {
		this.porociloObiskOtrocnice = porociloObiskOtrocnice;
	}

	public PorociloOdvzemKrvi getPorociloOdvzemKrvi() {
		return this.porociloOdvzemKrvi;
	}

	public void setPorociloOdvzemKrvi(PorociloOdvzemKrvi porociloOdvzemKrvi) {
		this.porociloOdvzemKrvi = porociloOdvzemKrvi;
	}

	public PorociloPreventivaStarostnika getPorociloPreventivaStarostnika() {
		return this.porociloPreventivaStarostnika;
	}

	public void setPorociloPreventivaStarostnika(PorociloPreventivaStarostnika porociloPreventivaStarostnika) {
		this.porociloPreventivaStarostnika = porociloPreventivaStarostnika;
	}

	public Set<PorociloObiskNovorojencka> getPorociloObiskNovorojenckas() {
		return this.porociloObiskNovorojenckas;
	}

	public void setPorociloObiskNovorojenckas(Set<PorociloObiskNovorojencka> porociloObiskNovorojenckas) {
		this.porociloObiskNovorojenckas = porociloObiskNovorojenckas;
	}

	public PorociloObiskNovorojencka addPorociloObiskNovorojencka(PorociloObiskNovorojencka porociloObiskNovorojencka) {
		getPorociloObiskNovorojenckas().add(porociloObiskNovorojencka);
		porociloObiskNovorojencka.setObisk(this);

		return porociloObiskNovorojencka;
	}

	public PorociloObiskNovorojencka removePorociloObiskNovorojencka(PorociloObiskNovorojencka porociloObiskNovorojencka) {
		getPorociloObiskNovorojenckas().remove(porociloObiskNovorojencka);
		porociloObiskNovorojencka.setObisk(null);

		return porociloObiskNovorojencka;
	}
	public void setNadomestnaSestra(ZdravstveniDelavec zd){
		this.nadomestnaSestra = zd;
	}
	public ZdravstveniDelavec getNadomestnaSestra(){
		return this.nadomestnaSestra;
	}
}