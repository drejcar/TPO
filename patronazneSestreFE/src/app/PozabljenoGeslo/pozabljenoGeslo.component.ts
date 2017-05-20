import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { izpisDNService } from '../izpisDelovnihNalogov/izpisDN.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'pozabljenoGeslo',
  templateUrl: './pozabljenoGeslo.component.html',
  styleUrls: ['./pozabljenoGeslo.component.css']
})
export class PozabljenoGesloComponent{

}
