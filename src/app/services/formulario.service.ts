import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

// Aquí se colocan los campos que tendrá el formulario
export interface FormularioDatos {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  edad: number;
  ciudad: string;
  fechaNaciminto: Date;
  genero: string;
}

//Aquí se crea el servicio de Firebase para guardar los datos del formulario
@Injectable({
  providedIn: 'root'
})

// Aquí se crea el servicio de Firebase para guardar los datos del formulario
export class FormularioService {
  // Aquí se crea la colección de Firestore para guardar los datos del formulario
  constructor(private firestore:Firestore) {}
  // Aquí se crea la función para guardar los datos del formulario en Firestore
  sendFormulario(datos: FormularioDatos) {
    // Aquí se crea la colección de Firestore para guardar los datos del formulario
    const collectionRef = collection(this.firestore, 'formulario');
    // Aquí se guarda los datos del formulario en Firestore
    // Se utiliza la función addDoc para agregar un nuevo documento a la colección
    return addDoc(collectionRef, datos);
  }
}
