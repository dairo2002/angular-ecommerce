import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

/** 
 * provideRouter(routes): Esta función crea un proveedor para el enrutador
 * de la aplicación, utilizando la configuración de rutas definida en la variable routes. Esto configura el enrutador para que AngularJS pueda manejar la navegación entre diferentes vistas de la aplicación.
 
 * provideClientHydration(): Esta función configura la "hidratación del cliente", que es un concepto utilizado en aplicaciones de una sola página (SPA) para inicializar y sincronizar el estado del cliente con el 
 * estado del servidor al cargar la aplicación en el navegador del usuario.
 
 * provideHttpClient(): Esta función crea un proveedor para el servicio HttpClient, que se utiliza para realizar solicitudes
 * HTTP en la aplicación AngularJS para obtener datos del servidor. 
 */




export const appConfig: ApplicationConfig = {
  //providers: [provideRouter(routes), provideHttpClient()]
  // providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch())]
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient()]
};
