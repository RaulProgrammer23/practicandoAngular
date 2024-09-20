import { Component } from '@angular/core';
import { Vacuna } from 'src/app/Models/vacuna.model';
import { PinchacicoService } from 'src/app/Service/pinchacico.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  constructor(public servicio: PinchacicoService){
  }
  

}
