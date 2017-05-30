import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PorociloPreventivaStarostnika } from '../_entitete/porociloPreventivaStarostnika';
import { PorociloOdvzemKrvi } from '../_entitete/porociloOdvzemKrvi';
import { PorociloObiskOtrocnice } from '../_entitete/porociloObiskOtrocnice';
import { PorociloObiskNosecnice } from '../_entitete/porociloObiskNosecnice';
import { PorociloAplikacijaInjekcije } from '../_entitete/porociloAplikacijaInjekcije';
import { PorociloKontrolaZdravstvenegaStanja } from '../_entitete/porociloKontrolaZdravstvenegaStanja';
import { PorociloObiskNovorojencka } from '../_entitete/porociloObiskNovorojencka';

@Component({
  selector: 'vnosObisk',
  templateUrl: './vnosObisk.component.html',
  styleUrls: ['./vnosObisk.component.css']
})

export class VnosObiskComponent{
  constructor(private http: Http,private router:Router) {}


  akt10='';
  akt20='';
  akt20a=0;
  akt20b=0;
  akt30=0;
  akt40=0;
  akt50=0;
  akt60='';
  akt60a=0;
  akt60b='';
  akt70=0;
  akt80='';
  akt80a='';
  akt80b='';
  akt90='';
  akt100='';
  akt110='';
  akt120='';
  akt130='';
  akt140='';
  akt150='';
  akt160='';
  akt170='';
  akt170a='';
  akt170b='';
  akt180='';
  akt180a='';
  akt180b='';
  akt190='';
  akt190a=0;
  akt190b=0;
  akt200='';
  akt210='';
  akt220=0;
  akt230=0;
  akt240=0;
  //akt250='';
}
