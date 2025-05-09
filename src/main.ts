import { enableProdMode, importProvidersFrom } from '@angular/core';
//Aquí estan las credenciales de Firebase
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { IonicModule } from '@ionic/angular';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// Aquí se importa el módulo de Firebase y Firestore
// y se inicializa la aplicación de Firebase con la configuración
if (environment.production) {
  enableProdMode();
}

// Se inicializa la aplicación de Firebase con la configuración
bootstrapApplication(AppComponent, {
  // Se importan los módulos de Ionic y Firebase
  providers: [
    // Se importan los módulos de Ionic y Firebase
    importProvidersFrom(IonicModule.forRoot({})),
    // Se importan las rutas de la aplicación
    provideRouter(routes),
    // Se inicializa la aplicación de Firebase con la configuración
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    //Se trae el modulo de Firestore
    provideFirestore(() => getFirestore())
  ],
});

