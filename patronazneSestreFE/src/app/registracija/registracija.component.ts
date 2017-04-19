import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Uporabnik } from '../uporabnik';
import { Router } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { UporabnikService} from './uporabnik.service';
import { Spol } from '../Pacient';
import { Posta } from '../Pacient';
import { Okolis } from '../Pacient';
import { Kontakt } from './kontakt';
import { Razmerje } from "../Razmerje";

@Component({
  selector: 'registracija',
  templateUrl: './registracija.component.html',
  styleUrls: [ './registracija.component.css' ]
})

export class RegistracijaFormComponent implements OnInit{
	isLoading: boolean = true;
  dodaj: boolean = false;
	poste: Posta[];
	spoln: Spol[];
	okoliss: Okolis[];
  razmerjas: Razmerje[];
  constructor(
    private router:Router, private uporabnikService: UporabnikService){}
  gotoRegistracija(): void {
    this.router.navigate(['/registracija']);
  }
  spoli=[''];
  ime='';
  priimek='';
  mail='';
  pwd='';
  datumRojstva='';
  stKartice='';
  ulica='';
  hisnaStevilka='';
  postneStevilke=[''];
  test='';
  tel='';
  okolisi=[''];

  kime='';
  kpriimek='';
  ktel='';
  kulica='';
  khisnaStevilka='';
  kpostnestevilke=[''];
  krazmerja=[''];
  kontakt=new Kontakt(this.kime,this.kpriimek,this.ktel,this.kulica,this.khisnaStevilka,this.kpostnestevilke[0],this.krazmerja[0])
  model=new Uporabnik(this.ime,this.priimek,this.mail,
      this.pwd,this.stKartice,this.tel,this.ulica,this.hisnaStevilka,
    this.postneStevilke[0],this.okolisi[0],
    this.datumRojstva,this.spoli[0],this.test);
  submitted=false;
  onSubmit(){
	this.submitted=true;
	this.uporabnikService.save(this.model).subscribe(
            (r: Response) => {console.log('success');}
          );
		  //tukaj bo navigacija na page kjer bo povedal ali je registracija uspešna
	this.router.navigate(['/dashboard']);
  }
  novUporabnik(){
    this.model=new Uporabnik(this.ime,this.priimek,this.mail,
      this.pwd,this.stKartice,this.tel,this.ulica,this.hisnaStevilka,
      this.postneStevilke[0],this.okolisi[0],this.datumRojstva,
      this.spoli[0],this.test);
  }
  //ne potrebujes
  get diagnostic() { return JSON.stringify(this.model); }


  //funkcija ob initializaciji
  ngOnInit(){
	  //rest klic za spole
	this.uporabnikService.getSpol().subscribe(data => {this.spoln = data;
	let i = 0;

	for(let entry of this.spoln){

		this.spoli[i] = entry[1];
		i = i+1;
	}
	},
	err => {console.log(err);});
    //rest klic za razmerja
    /*
    this.uporabnikService.getRazmerje().subscribe(data => {this.razmerjas = data;
        let i = 0;

        for(let entry of this.razmerjas){

          this.krazmerja[i] = entry[1];
          i = i+1;
        }
      },
      err => {console.log(err);});
	  */
	  //rest klic za poste
    this.uporabnikService.getPoste().subscribe(data => {this.poste = data;
		let i = 0;

		for(let entry of this.poste){

			this.postneStevilke[i] = (entry[0].toString()+" "+entry[1].toString());
			i = i+1;

		}
	},
	err => {console.log(err);});

  }
  //funkcija ob spremembi poste poisce veljavne
  onChangePostnaStevilka(sprememba: String){
	  var devided = sprememba.split(' ');
	  this.uporabnikService.getOkolisByPosta(Number(devided[0])).subscribe(data => {this.okoliss = data;
	  let i = 0;
	  for(let entry of this.okoliss){

		  this.okolisi[i] = (entry[1].toString());
		  i = i+1;
	  }
	  })

  }

}

