package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import java.math.BigDecimal;
import java.util.Set;


/**
 * The persistent class for the porocilo_preventiva_starostnika database table.
 * 
 */
@Entity
@Table(name="porocilo_preventiva_starostnika")
@NamedQuery(name="PorociloPreventivaStarostnika.findAll", query="SELECT p FROM PorociloPreventivaStarostnika p")
@XmlRootElement
public class PorociloPreventivaStarostnika implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="idporocilo_preventiva_starostnika", unique=true, nullable=false)
	private int idporociloPreventivaStarostnika;

	@Column(nullable=false, length=1024)
	private String akt10;

	@Column(length=1024)
	private String akt100a;

	@Column(length=1024)
	private String akt100b;

	@Column(length=1024)
	private String akt110;

	@Column(length=1024)
	private String akt120a;

	@Column(length=1024)
	private String akt120b;

	@Column(length=1024)
	private String akt120c;

	@Column(length=1024)
	private String akt120d;

	@Column(length=1024)
	private String akt120e;

	@Column(length=1024)
	private String akt130;

	@Column(length=1024)
	private String akt140;

	@Column(nullable=false, length=45)
	private String akt150a;

	@Column(length=45)
	private String akt150b;

	@Column(length=1024)
	private String akt150c;

	@Column(length=1024)
	private String akt160;

	@Column(length=1024)
	private String akt170;

	@Column(nullable=false, length=1024)
	private String akt20;

	@Column(nullable=false, precision=10)
	private BigDecimal akt30a;

	@Column(nullable=false, precision=10)
	private BigDecimal akt30b;

	@Column(nullable=false)
	private int akt40;

	@Column(nullable=false)
	private int akt50;

	@Column(nullable=false)
	private int akt60;

	@Column(nullable=false)
	private int akt70;

	@Column(length=1024)
	private String akt80;

	@Column(length=1024)
	private String akt90;

	//bi-directional many-to-one association to Obisk
	@OneToMany(mappedBy="porociloPreventivaStarostnika")
	private Set<Obisk> obisks;

	public PorociloPreventivaStarostnika() {
	}

	public int getIdporociloPreventivaStarostnika() {
		return this.idporociloPreventivaStarostnika;
	}

	public void setIdporociloPreventivaStarostnika(int idporociloPreventivaStarostnika) {
		this.idporociloPreventivaStarostnika = idporociloPreventivaStarostnika;
	}

	public String getAkt10() {
		return this.akt10;
	}

	public void setAkt10(String akt10) {
		this.akt10 = akt10;
	}

	public String getAkt100a() {
		return this.akt100a;
	}

	public void setAkt100a(String akt100a) {
		this.akt100a = akt100a;
	}

	public String getAkt100b() {
		return this.akt100b;
	}

	public void setAkt100b(String akt100b) {
		this.akt100b = akt100b;
	}

	public String getAkt110() {
		return this.akt110;
	}

	public void setAkt110(String akt110) {
		this.akt110 = akt110;
	}

	public String getAkt120a() {
		return this.akt120a;
	}

	public void setAkt120a(String akt120a) {
		this.akt120a = akt120a;
	}

	public String getAkt120b() {
		return this.akt120b;
	}

	public void setAkt120b(String akt120b) {
		this.akt120b = akt120b;
	}

	public String getAkt120c() {
		return this.akt120c;
	}

	public void setAkt120c(String akt120c) {
		this.akt120c = akt120c;
	}

	public String getAkt120d() {
		return this.akt120d;
	}

	public void setAkt120d(String akt120d) {
		this.akt120d = akt120d;
	}

	public String getAkt120e() {
		return this.akt120e;
	}

	public void setAkt120e(String akt120e) {
		this.akt120e = akt120e;
	}

	public String getAkt130() {
		return this.akt130;
	}

	public void setAkt130(String akt130) {
		this.akt130 = akt130;
	}

	public String getAkt140() {
		return this.akt140;
	}

	public void setAkt140(String akt140) {
		this.akt140 = akt140;
	}

	public String getAkt150a() {
		return this.akt150a;
	}

	public void setAkt150a(String akt150a) {
		this.akt150a = akt150a;
	}

	public String getAkt150b() {
		return this.akt150b;
	}

	public void setAkt150b(String akt150b) {
		this.akt150b = akt150b;
	}

	public String getAkt150c() {
		return this.akt150c;
	}

	public void setAkt150c(String akt150c) {
		this.akt150c = akt150c;
	}

	public String getAkt160() {
		return this.akt160;
	}

	public void setAkt160(String akt160) {
		this.akt160 = akt160;
	}

	public String getAkt170() {
		return this.akt170;
	}

	public void setAkt170(String akt170) {
		this.akt170 = akt170;
	}

	public String getAkt20() {
		return this.akt20;
	}

	public void setAkt20(String akt20) {
		this.akt20 = akt20;
	}

	public BigDecimal getAkt30a() {
		return this.akt30a;
	}

	public void setAkt30a(BigDecimal akt30a) {
		this.akt30a = akt30a;
	}

	public BigDecimal getAkt30b() {
		return this.akt30b;
	}

	public void setAkt30b(BigDecimal akt30b) {
		this.akt30b = akt30b;
	}

	public int getAkt40() {
		return this.akt40;
	}

	public void setAkt40(int akt40) {
		this.akt40 = akt40;
	}

	public int getAkt50() {
		return this.akt50;
	}

	public void setAkt50(int akt50) {
		this.akt50 = akt50;
	}

	public int getAkt60() {
		return this.akt60;
	}

	public void setAkt60(int akt60) {
		this.akt60 = akt60;
	}

	public int getAkt70() {
		return this.akt70;
	}

	public void setAkt70(int akt70) {
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
		obisk.setPorociloPreventivaStarostnika(this);

		return obisk;
	}

	public Obisk removeObisk(Obisk obisk) {
		getObisks().remove(obisk);
		obisk.setPorociloPreventivaStarostnika(null);

		return obisk;
	}

}