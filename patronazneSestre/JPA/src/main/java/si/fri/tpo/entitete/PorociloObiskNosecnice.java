package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Set;


/**
 * The persistent class for the porocilo_obisk_nosecnice database table.
 * 
 */
@Entity
@Table(name="porocilo_obisk_nosecnice")
@NamedQuery(name="PorociloObiskNosecnice.findAll", query="SELECT p FROM PorociloObiskNosecnice p")
@XmlRootElement
public class PorociloObiskNosecnice implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="idporocilo_obisk_nosecnice", unique=true, nullable=false)
	private int idporociloObiskNosecnice;

	@Column(length=1024)
	private String akt10;

	@Column(length=1024)
	private String akt100;

	@Column(length=1024)
	private String akt110;

	@Column(length=1024)
	private String akt120;

	@Column(length=1024)
	private String akt130;

	@Temporal(TemporalType.DATE)
	private Date akt140;

	@Column(nullable=false, length=1024)
	private String akt150;

	@Column(nullable=false, length=1024)
	private String akt160;

	@Column(nullable=false, length=45)
	private String akt170a;

	@Column(length=1024)
	private String akt170b;

	@Column(nullable=false, length=45)
	private String akt180a;

	@Column(length=1024)
	private String akt180b;

	@Column(nullable=false, precision=10)
	private BigDecimal akt190a;

	@Column(nullable=false, precision=10)
	private BigDecimal akt190b;

	@Column(length=1024)
	private String akt20;

	@Column(nullable=false)
	private int akt200;

	@Column(nullable=false)
	private int akt210;

	@Column(nullable=false, precision=10)
	private BigDecimal akt220;

	@Column(nullable=false)
	private int akt230;

	@Column(nullable=false)
	private int akt240;

	@Column(length=1024)
	private String akt30;

	@Column(length=1024)
	private String akt40;

	@Column(length=1024)
	private String akt50;

	@Column(length=1024)
	private String akt60;

	@Column(length=1024)
	private String akt70;

	@Column(length=1024)
	private String akt80;

	@Column(length=1024)
	private String akt90;

	//bi-directional many-to-one association to Obisk
	@OneToMany(mappedBy="porociloObiskNosecnice")
	private Set<Obisk> obisks;

	public PorociloObiskNosecnice() {
	}

	public int getIdporociloObiskNosecnice() {
		return this.idporociloObiskNosecnice;
	}

	public void setIdporociloObiskNosecnice(int idporociloObiskNosecnice) {
		this.idporociloObiskNosecnice = idporociloObiskNosecnice;
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

	public String getAkt120() {
		return this.akt120;
	}

	public void setAkt120(String akt120) {
		this.akt120 = akt120;
	}

	public String getAkt130() {
		return this.akt130;
	}

	public void setAkt130(String akt130) {
		this.akt130 = akt130;
	}

	public Date getAkt140() {
		return this.akt140;
	}

	public void setAkt140(Date akt140) {
		this.akt140 = akt140;
	}

	public String getAkt150() {
		return this.akt150;
	}

	public void setAkt150(String akt150) {
		this.akt150 = akt150;
	}

	public String getAkt160() {
		return this.akt160;
	}

	public void setAkt160(String akt160) {
		this.akt160 = akt160;
	}

	public String getAkt170a() {
		return this.akt170a;
	}

	public void setAkt170a(String akt170a) {
		this.akt170a = akt170a;
	}

	public String getAkt170b() {
		return this.akt170b;
	}

	public void setAkt170b(String akt170b) {
		this.akt170b = akt170b;
	}

	public String getAkt180a() {
		return this.akt180a;
	}

	public void setAkt180a(String akt180a) {
		this.akt180a = akt180a;
	}

	public String getAkt180b() {
		return this.akt180b;
	}

	public void setAkt180b(String akt180b) {
		this.akt180b = akt180b;
	}

	public BigDecimal getAkt190a() {
		return this.akt190a;
	}

	public void setAkt190a(BigDecimal akt190a) {
		this.akt190a = akt190a;
	}

	public BigDecimal getAkt190b() {
		return this.akt190b;
	}

	public void setAkt190b(BigDecimal akt190b) {
		this.akt190b = akt190b;
	}

	public String getAkt20() {
		return this.akt20;
	}

	public void setAkt20(String akt20) {
		this.akt20 = akt20;
	}

	public int getAkt200() {
		return this.akt200;
	}

	public void setAkt200(int akt200) {
		this.akt200 = akt200;
	}

	public int getAkt210() {
		return this.akt210;
	}

	public void setAkt210(int akt210) {
		this.akt210 = akt210;
	}

	public BigDecimal getAkt220() {
		return this.akt220;
	}

	public void setAkt220(BigDecimal akt220) {
		this.akt220 = akt220;
	}

	public int getAkt230() {
		return this.akt230;
	}

	public void setAkt230(int akt230) {
		this.akt230 = akt230;
	}

	public int getAkt240() {
		return this.akt240;
	}

	public void setAkt240(int akt240) {
		this.akt240 = akt240;
	}

	public String getAkt30() {
		return this.akt30;
	}

	public void setAkt30(String akt30) {
		this.akt30 = akt30;
	}

	public String getAkt40() {
		return this.akt40;
	}

	public void setAkt40(String akt40) {
		this.akt40 = akt40;
	}

	public String getAkt50() {
		return this.akt50;
	}

	public void setAkt50(String akt50) {
		this.akt50 = akt50;
	}

	public String getAkt60() {
		return this.akt60;
	}

	public void setAkt60(String akt60) {
		this.akt60 = akt60;
	}

	public String getAkt70() {
		return this.akt70;
	}

	public void setAkt70(String akt70) {
		this.akt70 = akt70;
	}

	public String getAkt80() {
		return this.akt80;
	}

	public void setAkt80(String akt80) {
		this.akt80 = akt80;
	}

	public String getAkt90() {
		return this.akt90;
	}

	public void setAkt90(String akt90) {
		this.akt90 = akt90;
	}
/*
	public Set<Obisk> getObisks() {
		return this.obisks;
	}
*/
	public void setObisks(Set<Obisk> obisks) {
		this.obisks = obisks;
	}
/*
	public Obisk addObisk(Obisk obisk) {
		getObisks().add(obisk);
		obisk.setPorociloObiskNosecnice(this);

		return obisk;
	}

	public Obisk removeObisk(Obisk obisk) {
		getObisks().remove(obisk);
		obisk.setPorociloObiskNosecnice(null);

		return obisk;
	}
*/
}