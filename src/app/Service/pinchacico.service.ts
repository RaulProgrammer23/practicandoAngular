import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vacuna } from '../Models/vacuna.model';

@Injectable({
  providedIn: 'root'
})
export class PinchacicoService {

  ArrVacunas:Vacuna[];
  url = "https://raulico-122a5-default-rtdb.europe-west1.firebasedatabase.app/vacuna.json";
  
  constructor(private http: HttpClient) {
    this.ArrVacunas = [];
    this.http.get<Vacuna[]>(this.url)
    .subscribe(response => {
      if(response != null){
        this.ArrVacunas = response;
      }
    });
  }

   insertar(nombre:string, dni:string, fecha_vacuna:string,
    fecha_sintoma:string, sintomas:string){
      const obj = new Vacuna(nombre, dni, fecha_vacuna, fecha_sintoma, sintomas);
      this.ArrVacunas.push(obj);
      this.http.put(this.url, this.ArrVacunas).subscribe();
    }
}
