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

<<<<<<< HEAD
	porociloAplikacijaInjekcijeA: PorociloAplikacijaInjekcije = ({'akt20':'','akt10':''});
	
	
=======
  porociloPreventivaStarostnika:PorociloPreventivaStarostnika=({
    'akt10': '',
    'akt20': '',
    'akt30a':0,
    'akt30b':0,
    'akt40':0,
    'akt50':0,
    'akt60':0,
    'akt70':0,
    'akt80':'',
    'akt90':'',
    'akt100a':'',
    'akt100b':'',
    'akt110':'',
    'akt120a':'',
    'akt120b':'',
    'akt120c':'',
    'akt120d':'',
    'akt120e':'',
    'akt130':'',
    'akt140':'',
    'akt150a':'',
    'akt150b':'',
    'akt150c':'',
    'akt160':'',
    'akt170':''
  });
  porociloOdvzemKrvi : PorociloOdvzemKrvi=({
    'akt10modra':0,
    'akt10rdeca':0,
    'akt10rumena':0,
    'akt10zelena':0,
    'akt20':''
  });
  porociloObiskOtrocnice : PorociloObiskOtrocnice=({
    'akt10a': '',
    'akt10b': 0,
    'akt10c': 0,
    'akt10d': '',
    'akt20': '',
    'akt30': '',
    'akt40': '',
    'akt50': '',
    'akt60': '',
    'akt70': '',
    'akt80': '',
    'akt90': '',
    'akt100': '',
    'akt110': '',
    'akt120': '',
    'akt130': '',
    'akt140': '',
    'akt150': '',
    'akt160a': 0,
    'akt160b': 0,
    'akt170': 0,
    'akt180': 0,
    'akt190': 0,
    'akt200': 0,
    'akt210': '',
    'akt220': '',
    'akt230a': '',
    'akt230b': '',
    'akt240a': '',
    'akt240b': ''
  });
  porociloObiskNovorojencka:PorociloObiskNovorojencka=({
    'akt10':'',
    'akt20':'',
    'akt30':'',
    'akt40':'',
    'akt50':'',
    'akt60':0,
    'akt70':0,
    'akt80a':'',
    'akt80b':'',
    'akt90a':'',
    'akt90b':'',
    'akt100a':'',
    'akt100b':'',
    'akt110':'',
    'akt120':'',
    'akt130':'',
    'akt140':''
  });
  porociloObiskNosecnice:PorociloObiskNosecnice=({
    'akt10':'',
    'akt20':'',
    'akt30':'',
    'akt40':'',
    'akt50':'',
    'akt60':'',
    'akt70':'',
    'akt80':'',
    'akt90':'',
    'akt100':'',
    'akt110':'',
    'akt120':'',
    'akt130':'',
    'akt140':'',
    'akt150':'',
    'akt160':'',
    'akt170a':'',
    'akt170b':'',
    'akt180a':'',
    'akt180b':'',
    'akt190a':0,
    'akt190b':0,
    'akt200':'',
    'akt210':'',
    'akt220':0,
    'akt230':0,
    'akt240':0,
  });
  porociloKontrolaZdravstvenegaStanja:PorociloKontrolaZdravstvenegaStanja=({
    'akt10':'',
    'akt20a':0,
    'akt20b':0,
    'akt30':0,
    'akt40':0,
    'akt50':0,
    'akt60a':0,
    'akt60b':'',
    'akt70':0,
    'akt80a':'',
    'akt80b':'',
    'akt90':'',
    'akt100':'',
    'akt110':'',
  });

>>>>>>> 11f14dbc775eec49a92972389138d241304892e1
}
