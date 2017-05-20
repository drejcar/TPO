import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { izpisDNService } from '../izpisDelovnihNalogov/izpisDN.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'seznamObiskovPacient',
  templateUrl: './seznamObiskovPacient.component.html',
  styleUrls: ['./seznamObiskovPacient.component.css']
})

export class SeznamObiskovPacientComponent{

}
