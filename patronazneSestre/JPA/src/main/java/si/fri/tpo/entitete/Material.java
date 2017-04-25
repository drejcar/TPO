package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.Set;


/**
 * The persistent class for the material database table.
 * 
 */
@Entity
@XmlRootElement
@Table(name="material")
@NamedQueries({
	@NamedQuery(name="Material.findAll", query="SELECT m FROM Material m"),
	@NamedQuery(name="Material.findOne",query="SELECT m FROM Material m WHERE m.idmaterial = :id"),
	@NamedQuery(name="Material.deleteOne",query="DELETE FROM Material m WHERE m.idmaterial = :id")
})
public class Material implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int idmaterial;

	@Column(nullable=false, length=45)
	private String opis;

	//bi-directional many-to-many association to DelovniNalog
	
	@ManyToMany(mappedBy="materials")
	private Set<DelovniNalog> delovniNalogs;
	
	public Material() {
	}

	public int getIdmaterial() {
		return this.idmaterial;
	}

	public void setIdmaterial(int idmaterial) {
		this.idmaterial = idmaterial;
	}

	public String getOpis() {
		return this.opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}
/*
	public Set<DelovniNalog> getDelovniNalogs() {
		return this.delovniNalogs;
	}
*/
	public void setDelovniNalogs(Set<DelovniNalog> delovniNalogs) {
		this.delovniNalogs = delovniNalogs;
	}

}