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
	aplikacijaInjekcije = true;
	kontrolaZdravstvenegaStanja = true;
	obiskNosecnice = true;
	obiskNovorojencka =true;
	obiskOtrocnice = true;
	odvzemKrvi = true;
	preventivaStarostnika = true;
  constructor(private http: Http,private router:Router) {}

	porociloAplikacijaInjekcijeA: PorociloAplikacijaInjekcije = ({'akt20':'','akt10':''});
	
	
}
