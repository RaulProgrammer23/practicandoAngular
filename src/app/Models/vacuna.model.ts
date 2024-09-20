export class Vacuna{

    nombre: string;
    dni: string;
    fecha_vacuna: string;
    fecha_sintoma: string;
    sintomas: string;

    constructor(nombre:string, dni:string, fecha_vacuna:string,
        fecha_sintoma:string, sintomas:string){
            this.nombre = nombre;
            this.dni = dni;
            this.fecha_vacuna = fecha_vacuna;
            this.fecha_sintoma = fecha_sintoma;
            this.sintomas = sintomas;
        }
}