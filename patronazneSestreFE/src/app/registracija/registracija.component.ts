import { Component} from '@angular/core';
import { Uporabnik } from '../uporabnik';
import { Router } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { UporabnikService} from './uporabnik.service';
import { Spols } from './sifranti';


@Component({
  selector: 'registracija',
  templateUrl: './registracija.component.html',
  styleUrls: [ './registracija.component.css' ]
})

export class RegistracijaFormComponent /*implements OnInit*/{
	isLoading: boolean = true;
  constructor(
    private router:Router, private uporabnikService: UporabnikService){}
  gotoRegistracija(): void {
    this.router.navigate(['/registracija']);
  }
  spoli=['Moski','Zenska'] //: Spols[] = [{idspol: 1,opis:'moski'}];
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
	this.uporabnikService.save(this.model).subscribe(
            (r: Response) => {console.log('success');}
          );
		  //tukaj bo navigacija na page kjer bo povedal ali je registracija uspešna
	this.router.navigate(['/dashboard']);
  }
  novUporabnik(){
    this.model=new Uporabnik(this.ime,this.priimek,this.mail,
      this.pwd,this.stKartice,this.tel,this.ulica,this.hisnaStevilka,
      this.postnaStevilka,this.okolisi[0],this.datumRojstva,
      this.spoli[0],this.test);
  }
  //ne potrebujes
  get diagnostic() { return JSON.stringify(this.model); }
  /*ngOnInit(){
	this.uporabnikService.getSpol().subscribe(data => {this.spoli = data 
	console.log(this.spoli);
	
	});
  } TODO*/
  
}

