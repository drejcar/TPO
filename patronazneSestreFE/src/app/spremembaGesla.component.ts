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
  model : Object = ({pwd: this.pwd, pwd2: this.pwd2});
  submitted=false;
  onSubmit(){
    this.submitted=true;
  }
  }
