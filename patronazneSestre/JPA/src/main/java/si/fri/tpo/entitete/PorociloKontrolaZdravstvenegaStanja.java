package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;


/**
 * The persistent class for the porocilo_kontrola_zdravstvenega_stanja database table.
 * 
 */
@Entity
@Table(name="porocilo_kontrola_zdravstvenega_stanja")
@NamedQuery(name="PorociloKontrolaZdravstvenegaStanja.findAll", query="SELECT p FROM PorociloKontrolaZdravstvenegaStanja p")
public class PorociloKontrolaZdravstvenegaStanja implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="idporocilo_kontrola_zdravstvenega_stanja")
	private int idporociloKontrolaZdravstvenegaStanja;

	private String akt10;

	private String akt100;

	private String akt110;

	private BigDecimal akt20a;

	private BigDecimal akt20b;

	private int akt30;

	private int akt40;

	private BigDecimal akt50;

	private BigDecimal akt60a;

	private String akt60b;

	private int akt70;

	private String akt80a;

	private String akt80b;

	private String akt90;

	//bi-directional many-to-one association to Obisk
	@OneToMany(mappedBy="porociloKontrolaZdravstvenegaStanja")
	private List<Obisk> obisks;

	public PorociloKontrolaZdravstvenegaStanja() {
	}

	public int getIdporociloKontrolaZdravstvenegaStanja() {
		return this.idporociloKontrolaZdravstvenegaStanja;
	}

	public void setIdporociloKontrolaZdravstvenegaStanja(int idporociloKontrolaZdravstvenegaStanja) {
		this.idporociloKontrolaZdravstvenegaStanja = idporociloKontrolaZdravstvenegaStanja;
	}

	public String getAkt10() {
		return this.akt10;
	}

	public void setAkt10(String akt10) {
		this.akt10 = akt10;
	}

	public String getAkt100() {
		return this.akt100;
	}

	public void setAkt100(String akt100) {
		this.akt100 = akt100;
	}

	public String getAkt110() {
		return this.akt110;
	}

	public void setAkt110(String akt110) {
		this.akt110 = akt110;
	}

	public BigDecimal getAkt20a() {
		return this.akt20a;
	}

	public void setAkt20a(BigDecimal akt20a) {
		this.akt20a = akt20a;
	}

	public BigDecimal getAkt20b() {
		return this.akt20b;
	}

	public void setAkt20b(BigDecimal akt20b) {
		this.akt20b = akt20b;
	}

	public int getAkt30() {
		return this.akt30;
	}

	public void setAkt30(int akt30) {
		this.akt30 = akt30;
	}

	public int getAkt40() {
		return this.akt40;
	}

	public void setAkt40(int akt40) {
		this.akt40 = akt40;
	}

	public BigDecimal getAkt50() {
		return this.akt50;
	}

	public void setAkt50(BigDecimal akt50) {
		this.akt50 = akt50;
	}

	public BigDecimal getAkt60a() {
		return this.akt60a;
	}

	public void setAkt60a(BigDecimal akt60a) {
		this.akt60a = akt60a;
	}

	public String getAkt60b() {
		return this.akt60b;
	}

	public void setAkt60b(String akt60b) {
		this.akt60b = akt60b;
	}

	public int getAkt70() {
		return this.akt70;
	}

	public void setAkt70(int akt70) {
		this.akt70 = akt70;
	}

	public String getAkt80a() {
		return this.akt80a;
	}

	public void setAkt80a(String akt80a) {
		this.akt80a = akt80a;
	}

	public String getAkt80b() {
		return this.akt80b;
	}

	public void setAkt80b(String akt80b) {
		this.akt80b = akt80b;
	}

	public String getAkt90() {
		return this.akt90;
	}

	public void setAkt90(String akt90) {
		this.akt90 = akt90;
	}
/*
	public List<Obisk> getObisks() {
		return this.obisks;
	}

	public void setObisks(List<Obisk> obisks) {
		this.obisks = obisks;
	}

	public Obisk addObisk(Obisk obisk) {
		getObisks().add(obisk);
		obisk.setPorociloKontrolaZdravstvenegaStanja(this);

		return obisk;
	}

	public Obisk removeObisk(Obisk obisk) {
		getObisks().remove(obisk);
		obisk.setPorociloKontrolaZdravstvenegaStanja(null);

		return obisk;
	}
*/
}