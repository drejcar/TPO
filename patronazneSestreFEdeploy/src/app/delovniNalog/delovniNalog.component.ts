import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

class delovniNalog {
	izvajalecZdravstvenihStoritev : IzvajalecZdravstvenihStoritev;
	zdravstveniDelavecs : Array<ZdravstveniDelavec>;
	pacients :  Array<Pacient>;
	vrstaObiska : Storitev;
	bolezen : Bolezen;
	materials : Array<Material>;
	steviloEpruvet : number;
	zdravilos : Array<Zdravilo>;
    obisks : Array<any>;
}

class IzvajalecZdravstvenihStoritev {
	idizvajalecZdravstvenihStoritev : number;
}

class ZdravstveniDelavec {
	idzdravstveniDelavec : number;
}

class Pacient {
	idpacient : number;
}

class Material {
	idmaterial : number;
}

class Zdravilo {
	idzdravilo : number;
}

class Bolezen {
	idbolezen : number;
}

class Storitev {
	idvrstaObiska : number;
}

@Component({
  selector: 'delovniNalog',
  templateUrl: './delovniNalog.component.html',
  styleUrls: [ './delovniNalog.component.css' ]
})

export class DelovniNalogComponent implements OnInit{

	constructor(private http: Http,private router:Router) {}

	post: string = "";
	post1: string = "";

	pokaziBolezen: boolean = false;
	napaka:boolean = false;

	materiali: any[] = [];
	izbraniMaterial : any;

	bolezni: any[] = [];
	izbranaBolezen : any;

	sestre: any[] = [];
	izbranaSestra : any;

	zdravila: any[] = [];
	izbranoZdravilo : any;

	storitve = [{'name': 'Obisk nosečnice', 'id': 10}, {'name': 'Obisk otročnice', 'id': 20}, {'name': 'Obisk novorojenčka', 'id': 30}, {'name': 'Preventiva starostnika', 'id': 40},
	{'name': 'Aplikacija injekcije', 'id': 50}, {'name': 'Odvzem krvi', 'id': 60}, {'name': 'Kontrola zdravstvenega stanja', 'id': 70}];

    izbranaStoritev = this.storitve[0];

	veljavnostNalogaOd: string = "";
	veljavnostNalogaDo: string = "";
	veljavnostNalogaVrsta: number = -1;
	veljavnostNalogaFiksniDatum: boolean = false;
	veljavnostNalogaInterval: number = 0;
	veljavnostNalogaSteviloObiskov: number = 1;

	data : any;
	data1 : any;
	data2 : any;
	data3 : any;
	stObiskov : number = 0;



	sifraUporabnika: string = "";
	urlParametri: string = "";

	private restUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';

	stevilkaIzvajalca : string = "rest ocitno ni uspel";
	nazivIzvajalca : string = "naziv izvajalca";

	stevilkaZdravstvenegaDelavca : string = "rest ocitno ni uspel";
	idIzvajalca : number = -1;
	idZdravnika : number = -1;
	idSestre : number = -1;

	stevilkaZdravstvenegaZavarovanja : string = "";
	priimek : string = "";
	ime : string = "";
	ulica : string = "";
	hisnaStevilka : string = "";
	postnaStevilka : string = "";
	kraj : string = "";
	telefonskaStevilka : string = "";
	email : string = "";
	idPacient : number = -1;
	idOkolisa : number = -1;

	stevilkaZdravstvenegaZavarovanja1 : string = "";
	priimek1 : string = "";
	ime1 : string = "";
	ulica1 : string = "";
	hisnaStevilka1 : string = "";
	postnaStevilka1 : string = "";
	kraj1 : string = "";
	telefonskaStevilka1 : string = "";
	email1 : string = "";
	idPacient1 : number = -1;

	zdravilos: any[] =  [];
	materials: any[] = [];
	stEpruvet = 0;
	dateIsValid = 0;

	ngOnInit() {

		// ce ni zdravnik lahko opravlja samo preventivne obiske
		if(localStorage['vloga'] != "Zdravnik") {
			this.storitve = [{'name': 'Obisk nosečnice', 'id': 10}, {'name': 'Obisk otročnice', 'id': 20}, {'name': 'Obisk novorojenčka', 'id': 30}, {'name': 'Preventiva starostnika', 'id': 40}];
			this.izbranaStoritev = this.storitve[0];
		}

		var headers3 = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});

		this.http.get(`${this.restUrl}/zdravstveniDelavec/${localStorage['iduporabnik']}`, {headers: headers3}).subscribe(data1 => {

			this.data1 = data1.json();
			var drek1 : string = JSON.stringify(this.data1);
			var test1 = JSON.parse(drek1);
			var lalala : string = test1.ime;

			this.stevilkaZdravstvenegaDelavca = test1.sifra;
			this.stevilkaIzvajalca = test1.izvajalecZdravstvenihStoritev.stevilkaIzvajalca;
			this.nazivIzvajalca = test1.izvajalecZdravstvenihStoritev.naziv;
			this.idIzvajalca = test1.izvajalecZdravstvenihStoritev.idizvajalecZdravstvenihStoritev;
			this.idZdravnika = test1.idzdravstveniDelavec;

		});

		this.http.get(`${this.restUrl}/sifranti/material`, {headers: headers3}).subscribe(data1 => {

			this.data1 = data1.json();
			var drek1 : string = JSON.stringify(this.data1);
			var test1 = JSON.parse(drek1);
			this.materiali = test1;
			this.izbraniMaterial = this.materiali[0];

		});

		this.http.get(`${this.restUrl}/sifranti/bolezen`, {headers: headers3}).subscribe(data1 => {

			this.data1 = data1.json();
			var drek1 : string = JSON.stringify(this.data1);
			var test1 = JSON.parse(drek1);
			this.bolezni = test1;
			this.izbranaBolezen = this.bolezni[0];

		});

		this.http.get(`${this.restUrl}/sifranti/zdravilo`, {headers: headers3}).subscribe(data1 => {

			this.data1 = data1.json();
			var drek1 : string = JSON.stringify(this.data1);
			var test1 = JSON.parse(drek1);
			this.zdravila = test1;
			this.izbranoZdravilo = this.zdravila[0];

		});

	}

	pridobiSestre(okolisPacienta: number): void {

		console.log("izbrano zdravilo: " + this.izbranoZdravilo.opis)

		console.log("Pridobivam sestro za okolis: " + okolisPacienta);

		var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});

		this.http.get(`${this.restUrl}/zdravstveniDelavec/byOkolis/${okolisPacienta}`, {headers: headers}).subscribe(data3 => {

			this.data3 = data3.json()
			var drek : string = JSON.stringify(this.data3);
			var test = JSON.parse(drek);

			this.sestre = test;
			this.izbranaSestra = this.sestre[0];
			this.idSestre = this.izbranaSestra.idzdravstveniDelavec;
			console.log("sestra " + this.izbranaSestra.ime + ", njen id:  " + this.idSestre);



		},
		(err) => {console.log(err);});



	}

	pridobiPodatkePacienta(): void {

		var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});

		this.http.get(`${this.restUrl}/pacient/zz/${this.post}`, {headers: headers}).subscribe(data => {

			this.data = data.json()
			var drek : string = JSON.stringify(this.data);
			var test = JSON.parse(drek);

			this.priimek = test.priimek;
			this.ime = test.ime;
			this.ulica = test.ulica;
			this.hisnaStevilka = test.hisnaStevilka;
			this.postnaStevilka = test.posta.idposta.toString();
			this.kraj = test.posta.opis;
			this.telefonskaStevilka = test.telefonskaStevilka;
			this.email = test.uporabnik.email;
			this.idPacient = test.idpacient;
			this.idOkolisa = test.okolis.idokolis;
			this.pridobiSestre(this.idOkolisa);
			console.log("id okolisa: " + this.idOkolisa);

		},
		(err) => {console.log(err);});


	}

	pridobiPodatkePacienta1(): void {

		var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});

		this.http.get(`${this.restUrl}/pacient/zz/${this.post1}`, {headers: headers}).subscribe(data2 => {

			this.data2 = data2.json()
			var drek1 : string = JSON.stringify(this.data2);
			var test1 = JSON.parse(drek1);

			this.priimek1 = test1.priimek;
			this.ime1 = test1.ime;
			this.ulica1 = test1.ulica;
			this.hisnaStevilka1 = test1.hisnaStevilka;
			this.postnaStevilka1 = test1.posta.idposta.toString();
			this.kraj1 = test1.posta.opis;
			this.telefonskaStevilka1 = test1.telefonskaStevilka;
			this.email1 = test1.uporabnik.email;
			this.idPacient1 = test1.idpacient;

		},
		(err) => {console.log(err);});

	}

	dodajMaterial() {

		console.log("dodaj material");
		var material = new Material();
		material.idmaterial = this.izbraniMaterial.idmaterial;
		this.materials.push(material);
		console.log(this.materials);
		console.log("id ustvarjenega materiala: " + material.idmaterial)

	}

	dodajZdravilo() {

		console.log("dodaj zdravilo");
		var zdravilo = new Zdravilo();
		console.log(this.izbranoZdravilo.idzdravilo);
		zdravilo.idzdravilo = this.izbranoZdravilo.idzdravilo;
		this.zdravilos.push(zdravilo);
		console.log(this.zdravilos);

	}


	ponastaviDatum() :void {

		this.veljavnostNalogaOd = "";
		this.veljavnostNalogaDo = "";
		this.preveriDatum();

	}



	preveriDatum():void {

		console.log("preberi datum");




		var date = new Date();

		var mesec = (date.getMonth()+1);
		var dan = date.getDate();

		var mesec1 : string = "";
		var dan1 : string = "";

		if(mesec < 10) mesec1 = '0'+mesec;
		if(dan < 10) dan1 = '0'+dan;

		var datum=date.getFullYear()+'-' + mesec1 + '-'+dan1;


		console.log("trenutni datum: " + datum);
		console.log("od datum: " + this.veljavnostNalogaOd);
		console.log("do datum: " + this.veljavnostNalogaDo);


		if(this.veljavnostNalogaOd < datum) {

			console.log("ne mors u preteklost bree");
			this.dateIsValid = 0;

		}

		else if(this.veljavnostNalogaVrsta == -1 || this.veljavnostNalogaOd == "") {

			this.dateIsValid = 0;

		}

		else if(this.veljavnostNalogaVrsta != 1) {

			this.dateIsValid = 1;

			if(this.veljavnostNalogaVrsta == 2 && this.veljavnostNalogaInterval < 1) {

				this.dateIsValid = 0;

			}

		}

		else {

			if(this.veljavnostNalogaOd < this.veljavnostNalogaDo) this.dateIsValid = 1;
			else this.dateIsValid = 0;

		}

		if(this.veljavnostNalogaSteviloObiskov < 1 || this.veljavnostNalogaSteviloObiskov > 10) this.dateIsValid = 0;

	}

	posljiDelovniNalog() {



		var fiksniDatum = 1;
		console.log(this.veljavnostNalogaFiksniDatum);
		if(this.veljavnostNalogaFiksniDatum){ fiksniDatum = 0;}

		this.urlParametri = `?fixniDatum=${fiksniDatum}&stObiskov=${this.veljavnostNalogaSteviloObiskov}&obdobje=${this.veljavnostNalogaVrsta}&interval=${this.veljavnostNalogaInterval}&od=${this.veljavnostNalogaOd}&do=${this.veljavnostNalogaDo}`

		console.log(this.urlParametri);

		var headers1 = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});

		var pacient = new Pacient();
		pacient.idpacient = this.idPacient;

		var pacient1 = new Pacient();
		pacient1.idpacient = this.idPacient1;

		var material = new Material();
		material.idmaterial = this.izbraniMaterial.idmaterial;

		var zdravilo = new Zdravilo();
		zdravilo.idzdravilo = this.izbranoZdravilo.id;


		var bolezen = new Bolezen();
		if(this.pokaziBolezen == true){

			bolezen.idbolezen = this.izbranaBolezen.idbolezen;
		}else{
			bolezen = null;
		}
		var storitev = new Storitev();
		storitev.idvrstaObiska = this.izbranaStoritev.id;

		var izvajalecZdravstvenihStoritev = new IzvajalecZdravstvenihStoritev();
		izvajalecZdravstvenihStoritev.idizvajalecZdravstvenihStoritev = this.idIzvajalca;

		var zdravstveniDelavec = new ZdravstveniDelavec();
		zdravstveniDelavec.idzdravstveniDelavec = this.idZdravnika;


		//fakin medicinska sestra fakin robi, popravljeno
		var sestra = new ZdravstveniDelavec();
		sestra.idzdravstveniDelavec = this.izbranaSestra.idzdravstveniDelavec;;

		var dn = new delovniNalog();
		dn.izvajalecZdravstvenihStoritev = izvajalecZdravstvenihStoritev;
		dn.zdravstveniDelavecs = [zdravstveniDelavec, sestra];

		//ne smeta biti 2 enaka objekta
		//if(this.izbranaStoritev.id == 20 || this.izbranaStoritev.id == 30) {
		//	dn.pacients = [pacient, pacient];
		//} else
			dn.pacients = [pacient];

		console.log(this.zdravilos);
		dn.vrstaObiska = storitev;
		dn.bolezen = bolezen;
		dn.materials =  this.materials;
		dn.steviloEpruvet = this.stEpruvet;
		dn.zdravilos = this.zdravilos;
		dn.obisks = [];

		var p4 = JSON.stringify(dn);
		console.log(p4);


		this.http.post(`${this.restUrl}/delovniNalog${this.urlParametri}`,JSON.stringify(dn), {headers: headers1}).subscribe(
			res => {console.log(res);
				this.napaka = false;
				this.router.navigate(['/uspeh']);

			},
			(err) => {console.log(err);
				this.napaka = true;
			}
		);

		this.preveriDatum();


				console.log("sestra " + this.izbranaSestra.ime + ", njen id:  " + this.idSestre);


	}
	onChangeStoritev(storitev: any){
		if(storitev.id == 50){
			this.pokaziBolezen = true;
		}else{
			this.pokaziBolezen = false;
		}

	}
}



		/*
					******* URL PARAMETRI IZ BACKENDA *****
			@QueryParam("fixniDatum") int fixniDatum,	//0 - da | 1 - ne
									@QueryParam("obdobje") int obdobje,			//0 - en obisk | 1 - vec obiskov
									@QueryParam("od") Date od,					//prvi obisk
									@QueryParam("do") Date doo,					//zakjucek obdobja obiskov
									@QueryParam("interval") int interval,		//interval obiskov --> razmik med obiski
									@QueryParam("stObiskov") int stObiskov)

		*/

		/*
					*****	HARDCODED STUFF BACKUP ******

			//zdravila = [{'name': 'injekcija', 'id': 1}, {'name': 'injekcija1', 'id': 2}];
			//materiali = [{'name': 'Epruveta rdeča', 'id': 1}, {'name': 'Epruveta modra', 'id': 2}, {'name': 'Epruveta rumena', 'id': 3}, {'name': 'Epruveta zelena', 'id': 4}];
			//bolezni = [{'name': 'Viroza', 'id': 1}, {'name': 'Angina', 'id': 2}, {'name': 'Pljučnica', 'id': 2}];

		*/

