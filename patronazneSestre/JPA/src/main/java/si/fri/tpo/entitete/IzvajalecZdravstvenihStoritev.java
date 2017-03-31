package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the izvajalec_zdravstvenih_storitev database table.
 * 
 */
@Entity
@Table(name="izvajalec_zdravstvenih_storitev")
@NamedQueries({
	@NamedQuery(name="IzvajalecZdravstvenihStoritev.findAll", query="SELECT i FROM IzvajalecZdravstvenihStoritev i"),
	@NamedQuery(name="IzvajalecZdravstvenihStoritev.findOne", query="SELECT i FROM IzvajalecZdravstvenihStoritev i WHERE i.idizvajalecZdravstvenihStoritev = :id"),
	@NamedQuery(name="IzvajalecZdravstvenihStoritev.deleteOne",query="DELETE FROM IzvajalecZdravstvenihStoritev i WHERE i.idizvajalecZdravstvenihStoritev = :id")
})
public class IzvajalecZdravstvenihStoritev implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="idizvajalec_zdravstvenih_storitev", unique=true, nullable=false)
	private int idizvajalecZdravstvenihStoritev;

	@Column(name="hisna_stevilka", nullable=false, length=45)
	private String hisnaStevilka;

	@Column(nullable=false, length=45)
	private String ulica;

	@Column(name="stevilka_izvajalca",nullable=false, length=45)
	private String stevilkaIzvajalca;
	
	@Column(nullable=false, length=45)
	private String naziv;
	
	//bi-directional many-to-one association to DelovniNalog
	@OneToMany(mappedBy="izvajalecZdravstvenihStoritev")
	private List<DelovniNalog> delovniNalogs;

	//bi-directional many-to-one association to Posta
	@ManyToOne
	@JoinColumn(name="idposta", nullable=false)
	private Posta posta;

	//bi-directional many-to-one association to ZdravstveniDelavec
	@OneToMany(mappedBy="izvajalecZdravstvenihStoritev")
	private List<ZdravstveniDelavec> zdravstveniDelavecs;

	public IzvajalecZdravstvenihStoritev() {
	}

	public int getIdizvajalecZdravstvenihStoritev() {
		return this.idizvajalecZdravstvenihStoritev;
	}

	public void setIdizvajalecZdravstvenihStoritev(int idizvajalecZdravstvenihStoritev) {
		this.idizvajalecZdravstvenihStoritev = idizvajalecZdravstvenihStoritev;
	}

	public String getStevilkaIzvajalca(){
		return this.stevilkaIzvajalca;
	}
	
	public void setStevilkaIzvajalca(String stevilkaIzvajalca){
		this.stevilkaIzvajalca = stevilkaIzvajalca;
	}
	
	public String getHisnaStevilka() {
		return this.hisnaStevilka;
	}

	public void setHisnaStevilka(String hisnaStevilka) {
		this.hisnaStevilka = hisnaStevilka;
	}

	public String getNaziv() {
		return this.naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}
	
	public String getUlica() {
		return this.ulica;
	}

	public void setUlica(String ulica) {
		this.ulica = ulica;
	}

	public List<DelovniNalog> getDelovniNalogs() {
		return this.delovniNalogs;
	}

	public void setDelovniNalogs(List<DelovniNalog> delovniNalogs) {
		this.delovniNalogs = delovniNalogs;
	}

	public DelovniNalog addDelovniNalog(DelovniNalog delovniNalog) {
		getDelovniNalogs().add(delovniNalog);
		delovniNalog.setIzvajalecZdravstvenihStoritev(this);

		return delovniNalog;
	}

	public DelovniNalog removeDelovniNalog(DelovniNalog delovniNalog) {
		getDelovniNalogs().remove(delovniNalog);
		delovniNalog.setIzvajalecZdravstvenihStoritev(null);

		return delovniNalog;
	}

	public Posta getPosta() {
		return this.posta;
	}

	public void setPosta(Posta posta) {
		this.posta = posta;
	}

	public List<ZdravstveniDelavec> getZdravstveniDelavecs() {
		return this.zdravstveniDelavecs;
	}

	public void setZdravstveniDelavecs(List<ZdravstveniDelavec> zdravstveniDelavecs) {
		this.zdravstveniDelavecs = zdravstveniDelavecs;
	}

	public ZdravstveniDelavec addZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec) {
		getZdravstveniDelavecs().add(zdravstveniDelavec);
		zdravstveniDelavec.setIzvajalecZdravstvenihStoritev(this);

		return zdravstveniDelavec;
	}

	public ZdravstveniDelavec removeZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec) {
		getZdravstveniDelavecs().remove(zdravstveniDelavec);
		zdravstveniDelavec.setIzvajalecZdravstvenihStoritev(null);

		return zdravstveniDelavec;
	}
	
}