package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the delovni_nalog database table.
 * 
 */
@Entity
@Table(name="delovni_nalog")
@NamedQuery(name="DelovniNalog.findAll", query="SELECT d FROM DelovniNalog d")
public class DelovniNalog implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="iddelovni_nalog", unique=true, nullable=false)
	private int iddelovniNalog;

	//bi-directional many-to-one association to IzvajalecZdravstvenihStoritev
	@ManyToOne
	@JoinColumn(name="idizvajalec_zdravstvenih_storitev", nullable=false)
	private IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev;

	//bi-directional many-to-one association to Obisk
	@ManyToOne
	@JoinColumn(name="idobisk", nullable=false)
	private Obisk obisk;

	//bi-directional many-to-one association to VrstaObiska
	@ManyToOne
	@JoinColumn(name="idvrsta_obiska", nullable=false)
	private VrstaObiska vrstaObiska;

	//bi-directional many-to-one association to ZdravstveniDelavec
	@ManyToOne
	@JoinColumn(name="idzdravstveni_delavec", nullable=false)
	private ZdravstveniDelavec zdravstveniDelavec;

	//bi-directional many-to-many association to Pacient
	@ManyToMany(mappedBy="delovniNalogs")
	private List<Pacient> pacients;

	//bi-directional many-to-many association to Material
	@ManyToMany(mappedBy="delovniNalogs")
	private List<Material> materials;

	//bi-directional many-to-many association to Zdravilo
	@ManyToMany(mappedBy="delovniNalogs")
	private List<Zdravilo> zdravilos;

	public DelovniNalog() {
	}

	public int getIddelovniNalog() {
		return this.iddelovniNalog;
	}

	public void setIddelovniNalog(int iddelovniNalog) {
		this.iddelovniNalog = iddelovniNalog;
	}

	public IzvajalecZdravstvenihStoritev getIzvajalecZdravstvenihStoritev() {
		return this.izvajalecZdravstvenihStoritev;
	}

	public void setIzvajalecZdravstvenihStoritev(IzvajalecZdravstvenihStoritev izvajalecZdravstvenihStoritev) {
		this.izvajalecZdravstvenihStoritev = izvajalecZdravstvenihStoritev;
	}

	public Obisk getObisk() {
		return this.obisk;
	}

	public void setObisk(Obisk obisk) {
		this.obisk = obisk;
	}

	public VrstaObiska getVrstaObiska() {
		return this.vrstaObiska;
	}

	public void setVrstaObiska(VrstaObiska vrstaObiska) {
		this.vrstaObiska = vrstaObiska;
	}

	public ZdravstveniDelavec getZdravstveniDelavec() {
		return this.zdravstveniDelavec;
	}

	public void setZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec) {
		this.zdravstveniDelavec = zdravstveniDelavec;
	}

	public List<Pacient> getPacients() {
		return this.pacients;
	}

	public void setPacients(List<Pacient> pacients) {
		this.pacients = pacients;
	}

	public List<Material> getMaterials() {
		return this.materials;
	}

	public void setMaterials(List<Material> materials) {
		this.materials = materials;
	}

	public List<Zdravilo> getZdravilos() {
		return this.zdravilos;
	}

	public void setZdravilos(List<Zdravilo> zdravilos) {
		this.zdravilos = zdravilos;
	}

}