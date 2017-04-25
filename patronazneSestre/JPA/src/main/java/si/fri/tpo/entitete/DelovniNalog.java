package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.SelectBeforeUpdate;

import java.util.Set;


/**
 * The persistent class for the delovni_nalog database table.
 * 
 */
@Entity
@XmlRootElement
@Table(name="delovni_nalog")
@DynamicUpdate(value=true)
@SelectBeforeUpdate(value=true)
@NamedQueries({
	@NamedQuery(name="DelovniNalog.findAll", query="SELECT d FROM DelovniNalog d"),
	@NamedQuery(name="DelovniNalog.findOne",query="SELECT d FROM DelovniNalog d WHERE d.iddelovniNalog = :id"),
	@NamedQuery(name="DelovniNalog.deleteOne",query="DELETE FROM DelovniNalog d WHERE d.iddelovniNalog = :id")
})
public class DelovniNalog implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="iddelovni_nalog", unique=true, nullable=false)
	private int iddelovniNalog;

	//bi-directional many-to-one association to Bolezen
	@ManyToOne
	@JoinColumn(name="idbolezen", nullable=false)
	private Bolezen bolezen;

	//bi-directional many-to-one association to IzvajalecZdravstvenihStoritev
	@ManyToOne
	@JoinColumn(name="idizvajalec_zdravstvenih_storitev", nullable=false)
	private IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev;

	//bi-directional many-to-one association to VrstaObiska
	@ManyToOne
	@JoinColumn(name="idvrsta_obiska", nullable=false)
	private VrstaObiska vrstaObiska;

	//bi-directional many-to-one association to ZdravstveniDelavec
	@ManyToOne
	@JoinColumn(name="idzdravstveni_delavec", nullable=false)
	private ZdravstveniDelavec zdravstveniDelavec;

	//bi-directional many-to-many association to Material
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(
			name="material_has_delovni_nalog"
			, joinColumns={
				@JoinColumn(name="iddelovni_nalog", nullable=false)
				}
			, inverseJoinColumns={
				@JoinColumn(name="idmaterial", nullable=false)
				}
			)
	private Set<Material> materials;

	//bi-directional many-to-one association to Obisk
	@OneToMany(mappedBy="delovniNalog", fetch=FetchType.EAGER)
	private Set<Obisk> obisks;

	//bi-directional many-to-many association to Pacient
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(
			name="delovni_nalog_has_pacient"
			, joinColumns={
				@JoinColumn(name="iddelovni_nalog", nullable=false)
				}
			, inverseJoinColumns={
				@JoinColumn(name="idpacient", nullable=false)
				}
			)
	private Set<Pacient> pacients;

	//bi-directional many-to-many association to Zdravilo
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(
			name="zdravilo_has_delovni_nalog"
			, joinColumns={
				@JoinColumn(name="iddelovni_nalog", nullable=false)
				}
			, inverseJoinColumns={
				@JoinColumn(name="idzdravilo", nullable=false)
				}
			)
	private Set<Zdravilo> zdravilos;

	public DelovniNalog() {
	}

	public int getIddelovniNalog() {
		return this.iddelovniNalog;
	}

	public void setIddelovniNalog(int iddelovniNalog) {
		this.iddelovniNalog = iddelovniNalog;
	}

	public Bolezen getBolezen() {
		return this.bolezen;
	}

	public void setBolezen(Bolezen bolezen) {
		this.bolezen = bolezen;
	}

	public IzvajalecZdravstvenihStoritev getIzvajalecZdravstvenihStoritev() {
		return this.izvajalecZdravstvenihStoritev;
	}

	public void setIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev) {
		this.izvajalecZdravstvenihStoritev = izvajalecZdravstvenihStoritev;
	}

	public VrstaObiska getVrstaObiska() {
		return this.vrstaObiska;
	}

	public void setVrstaObiska(VrstaObiska vrstaObiska) {
		this.vrstaObiska = vrstaObiska;
	}


	/*public ZdravstveniDelavec getZdravstveniDelavec() {
		return this.zdravstveniDelavec;
	}

	*/
	public void setZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec) {

		this.zdravstveniDelavec = zdravstveniDelavec;
	}

	public Set<Material> getMaterials() {
		return this.materials;
	}

	public void setMaterials(Set<Material> materials) {
		this.materials = materials;
	}

	public Set<Obisk> getObisks() {
		return this.obisks;
	}

	public void setObisks(Set<Obisk> obisks) {
		this.obisks = obisks;
	}

	public Obisk addObisk(Obisk obisk) {
		getObisks().add(obisk);
		obisk.setDelovniNalog(this);

		return obisk;
	}

	public Obisk removeObisk(Obisk obisk) {
		getObisks().remove(obisk);
		obisk.setDelovniNalog(null);

		return obisk;
	}

	public Set<Pacient> getPacients() {
		return this.pacients;
	}

	public void setPacients(Set<Pacient> pacients) {
		this.pacients = pacients;
	}
	//dodano za trackanje razmerij
	public void setPacient(Pacient pacient){
		this.pacients.add(pacient);
		if(!pacient.getDelovniNalogs().contains(this)){
			pacient.getDelovniNalogs().add(this);
		}
	}
	
	public Set<Zdravilo> getZdravilos() {
		return this.zdravilos;
	}

	public void setZdravilos(Set<Zdravilo> zdravilos) {
		this.zdravilos = zdravilos;
	}

}