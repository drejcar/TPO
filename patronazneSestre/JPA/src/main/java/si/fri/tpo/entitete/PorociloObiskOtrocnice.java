package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.Set;


/**
 * The persistent class for the porocilo_obisk_otrocnice database table.
 * 
 */
@Entity
@Table(name="porocilo_obisk_otrocnice")
@NamedQuery(name="PorociloObiskOtrocnice.findAll", query="SELECT p FROM PorociloObiskOtrocnice p")
public class PorociloObiskOtrocnice implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int idobiskotrocnice;

	@Column(length=1024)
	private String akt100;

	@Temporal(TemporalType.DATE)
	@Column(nullable=false)
	private Date akt10a;

	@Column(nullable=false, precision=10)
	private BigDecimal akt10b;

	@Column(nullable=false, precision=10)
	private BigDecimal akt10c;

	@Column(length=1024)
	private String akt10d;

	@Column(length=1024)
	private String akt110;

	@Column(length=1024)
	private String akt120;

	@Column(length=1024)
	private String akt130;
	
	@Column(length=1024)
	private String akt140;
	
	@Column(length=1024)
	private String akt150;

	@Column(nullable=false, precision=10)
	private BigDecimal akt160a;

	@Column(nullable=false, precision=10)
	private BigDecimal akt160b;

	@Column(nullable=false)
	private int akt170;

	@Column(nullable=false)
	private int akt180;

	@Column(nullable=false, precision=10)
	private BigDecimal akt190;

	@Column(length=1024)
	private String akt20;

	@Column(nullable=false, precision=10)
	private BigDecimal akt200;

	@Column(nullable=false, length=1024)
	private String akt210;

	@Column(nullable=false, length=1024)
	private String akt220;

	@Column(nullable=false, length=45)
	private String akt230a;

	@Column(length=1024)
	private String akt230b;

	@Column(nullable=false, length=45)
	private String akt240a;

	@Column(length=45)
	private String akt240b;

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
	@OneToMany(mappedBy="porociloObiskOtrocnice")
	private Set<Obisk> obisks;

	public PorociloObiskOtrocnice() {
	}

	public int getIdobiskotrocnice() {
		return this.idobiskotrocnice;
	}

	public void setIdobiskotrocnice(int idobiskotrocnice) {
		this.idobiskotrocnice = idobiskotrocnice;
	}

	public String getAkt100() {
		return this.akt100;
	}

	public void setAkt100(String akt100) {
		this.akt100 = akt100;
	}

	public Date getAkt10a() {
		return this.akt10a;
	}

	public void setAkt10a(Date akt10a) {
		this.akt10a = akt10a;
	}

	public BigDecimal getAkt10b() {
		return this.akt10b;
	}

	public void setAkt10b(BigDecimal akt10b) {
		this.akt10b = akt10b;
	}

	public BigDecimal getAkt10c() {
		return this.akt10c;
	}

	public void setAkt10c(BigDecimal akt10c) {
		this.akt10c = akt10c;
	}

	public String getAkt10d() {
		return this.akt10d;
	}

	public void setAkt10d(String akt10d) {
		this.akt10d = akt10d;
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

	public String getAkt150() {
		return this.akt150;
	}

	public void setAkt150(String akt150) {
		this.akt150 = akt150;
	}

	public BigDecimal getAkt160a() {
		return this.akt160a;
	}

	public void setAkt160a(BigDecimal akt160a) {
		this.akt160a = akt160a;
	}

	public BigDecimal getAkt160b() {
		return this.akt160b;
	}

	public void setAkt160b(BigDecimal akt160b) {
		this.akt160b = akt160b;
	}

	public int getAkt170() {
		return this.akt170;
	}

	public void setAkt170(int akt170) {
		this.akt170 = akt170;
	}

	public int getAkt180() {
		return this.akt180;
	}

	public void setAkt130(String akt130) {
		this.akt130 = akt130;
	}

	public String getAkt130() {
		return this.akt130;
	}
	
	public void setAkt140(String akt140) {
		this.akt140 = akt140;
	}

	public String getAkt140() {
		return this.akt140;
	}
	
	public void setAkt180(int akt180) {
		this.akt180 = akt180;
	}

	public BigDecimal getAkt190() {
		return this.akt190;
	}

	public void setAkt190(BigDecimal akt190) {
		this.akt190 = akt190;
	}

	public String getAkt20() {
		return this.akt20;
	}

	public void setAkt20(String akt20) {
		this.akt20 = akt20;
	}

	public BigDecimal getAkt200() {
		return this.akt200;
	}

	public void setAkt200(BigDecimal akt200) {
		this.akt200 = akt200;
	}

	public String getAkt210() {
		return this.akt210;
	}

	public void setAkt210(String akt210) {
		this.akt210 = akt210;
	}

	public String getAkt220() {
		return this.akt220;
	}

	public void setAkt220(String akt220) {
		this.akt220 = akt220;
	}

	public String getAkt230a() {
		return this.akt230a;
	}

	public void setAkt230a(String akt230a) {
		this.akt230a = akt230a;
	}

	public String getAkt230b() {
		return this.akt230b;
	}

	public void setAkt230b(String akt230b) {
		this.akt230b = akt230b;
	}

	public String getAkt240a() {
		return this.akt240a;
	}

	public void setAkt240a(String akt240a) {
		this.akt240a = akt240a;
	}

	public String getAkt240b() {
		return this.akt240b;
	}

	public void setAkt240b(String akt240b) {
		this.akt240b = akt240b;
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

	public Set<Obisk> getObisks() {
		return this.obisks;
	}

	public void setObisks(Set<Obisk> obisks) {
		this.obisks = obisks;
	}

	public Obisk addObisk(Obisk obisk) {
		getObisks().add(obisk);
		obisk.setPorociloObiskOtrocnice(this);

		return obisk;
	}

	public Obisk removeObisk(Obisk obisk) {
		getObisks().remove(obisk);
		obisk.setPorociloObiskOtrocnice(null);

		return obisk;
	}

}