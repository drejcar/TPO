package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import java.util.Set;


/**
 * The persistent class for the porocilo_aplikacija_injekcije database table.
 * 
 */
@Entity
@Table(name="porocilo_aplikacija_injekcije")
@NamedQuery(name="PorociloAplikacijaInjekcije.findAll", query="SELECT p FROM PorociloAplikacijaInjekcije p")
@XmlRootElement
public class PorociloAplikacijaInjekcije implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="idporocilo_aplikacija_injekcije", unique=true, nullable=false)
	private int idporociloAplikacijaInjekcije;

	@Column(nullable=false, length=1024)
	private String akt10;

	@Column(length=1024)
	private String akt20;

	//bi-directional many-to-one association to Obisk
	@OneToMany(mappedBy="porociloAplikacijaInjekcije")
	private Set<Obisk> obisks;

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