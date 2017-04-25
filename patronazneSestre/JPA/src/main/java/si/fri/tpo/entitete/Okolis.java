package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import java.util.Set;


/**
 * The persistent class for the okolis database table.
 * 
 */
@Entity
@XmlRootElement
@Table(name="okolis")
@NamedQueries({
	@NamedQuery(name="Okolis.findAll", query="SELECT o FROM Okolis o"),
	@NamedQuery(name="Okolis.findOne", query="SELECT o FROM Okolis o WHERE o.idokolis = :id"),
	@NamedQuery(name="Okolis.findByPosta", query="SELECT o FROM Okolis o WHERE o.posta.idposta = :id"),
	@NamedQuery(name="Okolis.deleteOne", query="DELETE FROM Okolis o WHERE o.idokolis = :id")
})
public class Okolis implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int idokolis;

	@Column(length=45)
	private String opis;

	//bi-directional many-to-one association to Posta
	@ManyToOne
	@JoinColumn(name="idposta", nullable=false)
	private Posta posta;

	//bi-directional many-to-one association to ZdravstveniDelavec
	//@OneToMany(mappedBy="okoli")
	//private Set<ZdravstveniDelavec> zdravstveniDelavecs;

	public Okolis() {
	}

	public int getIdokolis() {
		return this.idokolis;
	}

	public void setIdokolis(int idokolis) {
		this.idokolis = idokolis;
	}

	public String getOpis() {
		return this.opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public Posta getPosta() {
		return this.posta;
	}

	public void setPosta(Posta posta) {
		this.posta = posta;
	}
/*
	public Set<ZdravstveniDelavec> getZdravstveniDelavecs() {
		return this.zdravstveniDelavecs;
	}

	public void setZdravstveniDelavecs(Set<ZdravstveniDelavec> zdravstveniDelavecs) {
		this.zdravstveniDelavecs = zdravstveniDelavecs;
	}

	public ZdravstveniDelavec addZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec) {
		getZdravstveniDelavecs().add(zdravstveniDelavec);
		zdravstveniDelavec.setOkoli(this);

		return zdravstveniDelavec;
	}

	public ZdravstveniDelavec removeZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec) {
		getZdravstveniDelavecs().remove(zdravstveniDelavec);
		zdravstveniDelavec.setOkoli(null);

		return zdravstveniDelavec;
	}
*/
}