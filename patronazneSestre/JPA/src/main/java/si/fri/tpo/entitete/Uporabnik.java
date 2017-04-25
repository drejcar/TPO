package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import java.util.Set;
import java.util.Date;


/**
 * The persistent class for the uporabnik database table.
 * 
 */
@Entity
@XmlRootElement
@Table(name="uporabnik")
@NamedQueries({
	@NamedQuery(name="Uporabnik.findAll", query="SELECT u FROM Uporabnik u"),
	@NamedQuery(name="Uporabnik.findOne",query="SELECT u FROM Uporabnik u WHERE u.iduporabnik = :id"),
	@NamedQuery(name="Uporabnik.deleteOne",query="DELETE FROM Uporabnik u WHERE u.iduporabnik = :id"),
	@NamedQuery(name="Uporabnik.findOneVloga",query="SELECT u FROM Uporabnik u WHERE u.email = :email")
})
public class Uporabnik implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int iduporabnik;

	@Temporal(TemporalType.DATE)
	@Column(name="aktiviraj_do", nullable=false)
	private Date aktivirajDo;
	
	@Temporal(TemporalType.DATE)
	@Column(name="zadnja_prijava", nullable=true)
	private Date zadnjaPrijava;

	@Column(length=45)
	private String email;

	@Column(nullable=false, length=255)
	private String geslo;
	
	//bi-directional many-to-one association to Vloga
	@ManyToOne
	@JoinColumn(name="idvloga", nullable=false)
	private Vloga vloga;

	//bi-directional many-to-one association to Pacient
	@OneToMany(mappedBy="uporabnik")
	private Set<Pacient> pacients;
	
	/*
	//bi-directional many-to-one association to ZdravstveniDelavec
	@OneToMany(mappedBy="uporabnik")
	private List<ZdravstveniDelavec> zdravstveniDelavecs;
	 */
	
	public Uporabnik() {
		Date today = new Date();
		Date tomorrow = new Date(today.getTime() + (1000 * 60 * 60 * 24));
		setAktivirajDo(tomorrow);
		setZadnjaPrijava(today);
	}

	public int getIduporabnik() {
		return this.iduporabnik;
	}

	public void setIduporabnik(int iduporabnik) {
		this.iduporabnik = iduporabnik;
	}

	public Date getAktivirajDo() {
		return this.aktivirajDo;
	}

	public void setAktivirajDo(Date aktivirajDo) {
		this.aktivirajDo = aktivirajDo;
	}

	public Date getZadnjaPrijava() {
		return this.zadnjaPrijava;
	}

	public void setZadnjaPrijava(Date zadnjaPrijava) {
		this.zadnjaPrijava = zadnjaPrijava;
	}
	
	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGeslo() {
		return this.geslo;
	}

	public void setGeslo(String geslo) {
		this.geslo = geslo;
	}

	/*
	public Set<Pacient> getPacients() {
		return this.pacients;
	}

	public void setPacients(Set<Pacient> pacients) {
		this.pacients = pacients;
	}

	public Pacient addPacient(Pacient pacient) {
		getPacients().add(pacient);
		pacient.setUporabnik(this);

		return pacient;
	}

	public Pacient removePacient(Pacient pacient) {
		getPacients().remove(pacient);
		pacient.setUporabnik(null);

		return pacient;
	}
*/
	public Vloga getVloga() {
		return this.vloga;
	}

	public void setVloga(Vloga vloga) {
		this.vloga = vloga;
	}
/*
	public List<ZdravstveniDelavec> getZdravstveniDelavecs() {
		return this.zdravstveniDelavecs;
	}

	public void setZdravstveniDelavecs(Set<ZdravstveniDelavec> zdravstveniDelavecs) {
		this.zdravstveniDelavecs = zdravstveniDelavecs;
	}

	public ZdravstveniDelavec addZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec) {
		getZdravstveniDelavecs().add(zdravstveniDelavec);
		zdravstveniDelavec.setUporabnik(this);

		return zdravstveniDelavec;
	}

	public ZdravstveniDelavec removeZdravstveniDelavec(ZdravstveniDelavec zdravstveniDelavec) {
		getZdravstveniDelavecs().remove(zdravstveniDelavec);
		zdravstveniDelavec.setUporabnik(null);

		return zdravstveniDelavec;
	}
*/

}