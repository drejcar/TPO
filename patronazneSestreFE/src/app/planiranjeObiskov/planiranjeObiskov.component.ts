import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { izpisDNService } from '../izpisDelovnihNalogov/izpisDN.service';

@Component({
  selector: 'planiranjeObiskov',
  templateUrl: './planiranjeObiskov.component.html',
  styleUrls: ['./planiranjeObiskov.component.css']
})

export class PlaniranjeObiskovComponent{

}
