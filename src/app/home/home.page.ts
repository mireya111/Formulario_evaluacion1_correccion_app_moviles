import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormularioService, FormularioDatos } from '../services/formulario.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NgIf, NgFor],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  formularioDatos: FormularioDatos = {
    nombre: '',
    apellido: '',
    edad: 0,
    email: '',
    genero: '',
    telefono: '',
    fechaNaciminto: new Date(0),
    ciudad: ''
  };

  constructor(private formularioService: FormularioService) {}

  ngOnInit() {}

  sendCamposFormulario() {
    // Validación de campos obligatorios
    if (
      this.formularioDatos.nombre.trim() === '' ||
      this.formularioDatos.apellido.trim() === '' ||
      this.formularioDatos.ciudad.trim() === '' ||
      this.formularioDatos.edad <= 0 ||
      this.formularioDatos.email.trim() === '' ||
      this.formularioDatos.fechaNaciminto === null ||
      this.formularioDatos.telefono.trim() === '' ||
      !this.isGeneroSeleccionado()
    ) {
      console.error('Por favor, completa todos los campos obligatorios.');
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // Enviar datos al servicio
    this.formularioService.sendFormulario(this.formularioDatos)
      .then(() => {
        console.log('Formulario enviado con éxito');
         // Vaciar los campos del formulario
        this.formularioDatos = {
          nombre: '',
          apellido: '',
          edad: 0,
          email: '',
          genero: '',
          telefono: '',
          fechaNaciminto: new Date(0),
          ciudad: ''
        };
        alert('Formulario enviado con éxito');
      })
      .catch((error) => {
        console.error('Error al enviar el formulario:', error);
        alert('Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
      });
  }

  // Verifica si al menos un género está seleccionado
  private isGeneroSeleccionado(): boolean {
    return this.formularioDatos.genero !== '';
  }

}