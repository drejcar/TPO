package si.fri.tpo.entitete;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the uporabnik database table.
 * 
 */
@Entity
@Table(name="uporabnik")
@NamedQueries({
	@NamedQuery(name="Uporabnik.findAll", query="SELECT u FROM Uporabnik u"),
	@NamedQuery(name="Uporabnik.findOne",query="SELECT u FROM Uporabnik u WHERE u.iduporabnik = :id"),
	@NamedQuery(name="Uporabnik.deleteOne",query="DELETE FROM Uporabnik u WHERE u.iduporabnik = :id")
})
public class Uporabnik implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int iduporabnik;

	@Column(length=45)
	private String email;

	@Column(nullable=false, length=80)
	private String geslo;

	//bi-directional many-to-one association to Pacient
	@OneToMany(mappedBy="uporabnik")
	private List<Pacient> pacients;

	//bi-directional many-to-one association to Vloga
	@ManyToOne
	@JoinColumn(name="idvloga", nullable=false)
	private Vloga vloga;

	//bi-directional many-to-one association to ZdravstveniDelavec
	@OneToMany(mappedBy="uporabnik")
	private List<ZdravstveniDelavec> zdravstveniDelavecs;

	public Uporabnik() {
	}

	public int getIduporabnik() {
		return this.iduporabnik;
	}

	public void setIduporabnik(int iduporabnik) {
		this.iduporabnik = iduporabnik;
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

	public List<Pacient> getPacients() {
		return this.pacients;
	}

	public void setPacients(List<Pacient> pacients) {
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

	public Vloga getVloga() {
		return this.vloga;
	}

	public void setVloga(Vloga vloga) {
		this.vloga = vloga;
	}

	public List<ZdravstveniDelavec> getZdravstveniDelavecs() {
		return this.zdravstveniDelavecs;
	}

	public void setZdravstveniDelavecs(List<ZdravstveniDelavec> zdravstveniDelavecs) {
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

}