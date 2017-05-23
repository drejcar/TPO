package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the porocilo_obisk_novorojencka database table.
 * 
 */
@Entity
@Table(name="porocilo_obisk_novorojencka")
@NamedQuery(name="PorociloObiskNovorojencka.findAll", query="SELECT p FROM PorociloObiskNovorojencka p")
public class PorociloObiskNovorojencka implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="idporocilo_obisk_novorojencka")
	private int idporociloObiskNovorojencka;

	private String akt10;

	private String akt100a;

	private String akt100b;

	private String akt110;

	private String akt120;

	private String akt130;

	private String akt140;

	private String akt20;

	private String akt30;

	private String akt40;

	private String akt50;

	private int akt60;

	private int akt70;

	private String akt80;

	private String akt80b;

	private String akt90a;

	private String akt90b;

	//bi-directional many-to-one association to Obisk
	@OneToMany(mappedBy="porociloObiskNovorojencka")
	private List<Obisk> obisks;

	public PorociloObiskNovorojencka() {
	}

	public int getIdporociloObiskNovorojencka() {
		return this.idporociloObiskNovorojencka;
	}

	public void setIdporociloObiskNovorojencka(int idporociloObiskNovorojencka) {
		this.idporociloObiskNovorojencka = idporociloObiskNovorojencka;
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

	public String getAkt140() {
		return this.akt140;
	}

	public void setAkt140(String akt140) {
		this.akt140 = akt140;
	}

	public String getAkt20() {
		return this.akt20;
	}

	public void setAkt20(String akt20) {
		this.akt20 = akt20;
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

	public String getAkt80b() {
		return this.akt80b;
	}

	public void setAkt80b(String akt80b) {
		this.akt80b = akt80b;
	}

	public String getAkt90a() {
		return this.akt90a;
	}

	public void setAkt90a(String akt90a) {
		this.akt90a = akt90a;
	}

	public String getAkt90b() {
		return this.akt90b;
	}

	public void setAkt90b(String akt90b) {
		this.akt90b = akt90b;
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
		obisk.setPorociloObiskNovorojencka(this);

		return obisk;
	}

	public Obisk removeObisk(Obisk obisk) {
		getObisks().remove(obisk);
		obisk.setPorociloObiskNovorojencka(null);

		return obisk;
	}
*/
}