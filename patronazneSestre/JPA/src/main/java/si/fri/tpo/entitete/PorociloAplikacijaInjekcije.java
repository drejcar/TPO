package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the porocilo_aplikacija_injekcije database table.
 * 
 */
@Entity
@Table(name="porocilo_aplikacija_injekcije")
@NamedQuery(name="PorociloAplikacijaInjekcije.findAll", query="SELECT p FROM PorociloAplikacijaInjekcije p")
public class PorociloAplikacijaInjekcije implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="idporocilo_aplikacija_injekcije")
	private int idporociloAplikacijaInjekcije;

	private String akt10;

	private String akt20;

	//bi-directional many-to-one association to Obisk
	@OneToMany(mappedBy="porociloAplikacijaInjekcije")
	private List<Obisk> obisks;

	public PorociloAplikacijaInjekcije() {
	}

	public int getIdporociloAplikacijaInjekcije() {
		return this.idporociloAplikacijaInjekcije;
	}

	public void setIdporociloAplikacijaInjekcije(int idporociloAplikacijaInjekcije) {
		this.idporociloAplikacijaInjekcije = idporociloAplikacijaInjekcije;
	}

	public String getAkt10() {
		return this.akt10;
	}

	public void setAkt10(String akt10) {
		this.akt10 = akt10;
	}

	public String getAkt20() {
		return this.akt20;
	}

	public void setAkt20(String akt20) {
		this.akt20 = akt20;
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
		obisk.setPorociloAplikacijaInjekcije(this);

		return obisk;
	}

	public Obisk removeObisk(Obisk obisk) {
		getObisks().remove(obisk);
		obisk.setPorociloAplikacijaInjekcije(null);

		return obisk;
	}
*/
}