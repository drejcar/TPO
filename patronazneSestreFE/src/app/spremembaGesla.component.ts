import { Component } from '@angular/core';
import { ZdravstveniDelavec } from './ZdravstveniDelavec';
import { UporabnikZd } from './ZdravstveniDelavec';
import { Vloga } from './ZdravstveniDelavec';
import { FormsModule } from '@angular/forms'
import {UporabnikService} from "./registracija/uporabnik.service";
import {Router} from "@angular/router";


@Component({
  selector: 'spremembaGesla',
  templateUrl: './sprememba-gesla.component.html'
})

export class SpremembaGeslaComponent{
  constructor(
    private router:Router, private uporabnikService: UporabnikService){}

  pwd:String='';
  pwd2:String='';

  submitted=false;
  onSubmit(){
    this.submitted=true;
  }
  }
