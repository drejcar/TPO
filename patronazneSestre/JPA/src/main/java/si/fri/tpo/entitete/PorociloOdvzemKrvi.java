package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import java.util.Set;


/**
 * The persistent class for the porocilo_odvzem_krvi database table.
 * 
 */
@Entity
@Table(name="porocilo_odvzem_krvi")
@NamedQuery(name="PorociloOdvzemKrvi.findAll", query="SELECT p FROM PorociloOdvzemKrvi p")
@XmlRootElement
public class PorociloOdvzemKrvi implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="idporocilo_odvzem_krvi", unique=true, nullable=false)
	private int idporociloOdvzemKrvi;

	private int akt10modra;

	private int akt10rdeca;

	private int akt10rumena;

	private int akt10zelena;

	@Column(length=1024)
	private String akt20;

	//bi-directional many-to-one association to Obisk
	@OneToMany(mappedBy="porociloOdvzemKrvi")
	private Set<Obisk> obisks;

	public PorociloOdvzemKrvi() {
	}

	public int getIdporociloOdvzemKrvi() {
		return this.idporociloOdvzemKrvi;
	}

	public void setIdporociloOdvzemKrvi(int idporociloOdvzemKrvi) {
		this.idporociloOdvzemKrvi = idporociloOdvzemKrvi;
	}

	public int getAkt10modra() {
		return this.akt10modra;
	}

	public void setAkt10modra(int akt10modra) {
		this.akt10modra = akt10modra;
	}

	public int getAkt10rdeca() {
		return this.akt10rdeca;
	}

	public void setAkt10rdeca(int akt10rdeca) {
		this.akt10rdeca = akt10rdeca;
	}

	public int getAkt10rumena() {
		return this.akt10rumena;
	}

	public void setAkt10rumena(int akt10rumena) {
		this.akt10rumena = akt10rumena;
	}

	public int getAkt10zelena() {
		return this.akt10zelena;
	}

	public void setAkt10zelena(int akt10zelena) {
		this.akt10zelena = akt10zelena;
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
		obisk.setPorociloOdvzemKrvi(this);

		return obisk;
	}

	public Obisk removeObisk(Obisk obisk) {
		getObisks().remove(obisk);
		obisk.setPorociloOdvzemKrvi(null);

		return obisk;
	}
*/
}