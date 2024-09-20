import { Component } from '@angular/core';
import { PinchacicoService } from 'src/app/Service/pinchacico.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(public servicio: PinchacicoService){}

  add(nombre:HTMLInputElement,dni:HTMLInputElement,fecha_vacuna:HTMLInputElement,
    fecha_sintoma:HTMLInputElement,sintomas:HTMLTextAreaElement){
      this.servicio.insertar(nombre.value,dni.value,fecha_vacuna.value,
        fecha_sintoma.value,sintomas.value);
    }

}
