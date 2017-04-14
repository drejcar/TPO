import { Component } from '@angular/core';
import { Uporabnik } from '../uporabnik';
import { Router } from '@angular/router';
import { UporabnikService} from '../RESTServices/uporabnik.service'

@Component({
  selector: 'registracija',
  templateUrl: './registracija.component.html',
  styleUrls: [ './registracija.component.css' ]
})

export class RegistracijaFormComponent {
  constructor(
    private router:Router, private uporabnikService: UporabnikService){}
  gotoRegistracija(): void {
    this.router.navigate(['/registracija']);
  }
  spoli=['Moski','Zenski'];
  ime='';
  priimek='';
  mail='';
  pwd='';
  datumRojstva='';
  stKartice='';
  ulica='';
  hisnaStevilka='';
  postnaStevilka='';
  test='';
  tel='';
  okolisi=['Ljubljana','Maribor','Koper','Kranj','Novo Mesto'];
  model=new Uporabnik(this.ime,this.priimek,this.mail,
      this.pwd,this.stKartice,this.tel,this.ulica,this.hisnaStevilka,
    this.postnaStevilka,this.okolisi[0],
    this.datumRojstva,this.spoli[0],this.test);
  submitted=false;
  onSubmit(){
	this.submitted=true;
	this.uporabnikService.save(this.model);		
  }
  novUporabnik(){
    this.model=new Uporabnik(this.ime,this.priimek,this.mail,
      this.pwd,this.stKartice,this.tel,this.ulica,this.hisnaStevilka,
      this.postnaStevilka,this.okolisi[0],this.datumRojstva,
      this.spoli[0],this.test);
  }
  //ne potrebujes
  get diagnostic() { return JSON.stringify(this.model); }
}

