package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SelectBeforeUpdate;

import java.util.Date;


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
	@NamedQuery(name="Obisk.deleteOne",query="DELETE FROM Obisk o WHERE o.idobisk = :id")
})
public class Obisk implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int idobisk;

	@Temporal(TemporalType.DATE)
	@Column(name="datum_obiska")
	private Date datumObiska;

	@Temporal(TemporalType.DATE)
	@Column(name="dejanski_datum_obiska")
	private Date dejanskiDatumObiska;

	@Column(name="fixen_datum")
	private int fixenDatum;

	@Column(name="iddelovni_nalog")
	private int iddelovniNalog;

	private int opravljen;
	
	//bi-directional many-to-one association to DelovniNalog
	@ManyToOne
	@JoinColumn(name="iddelovni_nalog", nullable=false)
	private DelovniNalog delovniNalog;
	
	//bi-directional many-to-one association to PorociloAplikacijaInjekcije
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="idporocilo_aplikacija_injekcije")
	private PorociloAplikacijaInjekcije porociloAplikacijaInjekcije;

	//bi-directional many-to-one association to PorociloKontrolaZdravstvenegaStanja
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="idporocilo_kontrola_zdravstvenega_stanja")
	private PorociloKontrolaZdravstvenegaStanja porociloKontrolaZdravstvenegaStanja;

	//bi-directional many-to-one association to PorociloObiskNosecnice
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="idporocilo_obisk_nosecnice")
	private PorociloObiskNosecnice porociloObiskNosecnice;

	//bi-directional many-to-one association to PorociloObiskNovorojencka
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="idporocilo_obisk_novorojencka")
	private PorociloObiskNovorojencka porociloObiskNovorojencka;

	//bi-directional many-to-one association to PorociloObiskOtrocnice
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="idobiskotrocnice")
	private PorociloObiskOtrocnice porociloObiskOtrocnice;

	//bi-directional many-to-one association to PorociloOdvzemKrvi
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="idporocilo_odvzem_krvi")
	private PorociloOdvzemKrvi porociloOdvzemKrvi;

	//bi-directional many-to-one association to PorociloPreventivaStarostnika
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="idporocilo_preventiva_starostnika")
	private PorociloPreventivaStarostnika porociloPreventivaStarostnika;

	public Obisk() {
		this.setOpravljen(0); // 0 - ni opravljen; 1 - je opravjen
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

	public int getIddelovniNalog() {
		return this.iddelovniNalog;
	}

	public void setIddelovniNalog(int iddelovniNalog) {
		this.iddelovniNalog = iddelovniNalog;
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

	public PorociloObiskNovorojencka getPorociloObiskNovorojencka() {
		return this.porociloObiskNovorojencka;
	}

	public void setPorociloObiskNovorojencka(PorociloObiskNovorojencka porociloObiskNovorojencka) {
		this.porociloObiskNovorojencka = porociloObiskNovorojencka;
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
/*
	public DelovniNalog getDelovniNalog() {
		return this.delovniNalog;
	}
*/
	public void setDelovniNalog(DelovniNalog delovniNalog) {
		this.delovniNalog = delovniNalog;
	}
}