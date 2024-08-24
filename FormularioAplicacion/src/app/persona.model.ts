export class Persona{

//01 manera de hacerlo
/* 
 nombre: string='';
apellido: string='';
edad: number=0;
constructor(nombre: string, apellido: string){
this.nombre=nombre;
this.apellido=apellido;
this.edad=edad;
}*/
 //02 manera de hacerlo
constructor(public nombre:string, public apellido: string, public edad: number){}

}