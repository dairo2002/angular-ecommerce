// Importamos el decorador Injectable de Angular, que se utiliza para decorar clases que se pueden inyectar con dependencias.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constante } from '../constant/contant';

// Decoramos la clase ProductService con @Injectable.
@Injectable({
  providedIn: 'root' // Especificamos que este servicio se proporciona en el nivel raíz de la aplicación.
})
export class ProductService {

   // La propiedad 'http' será inicializada con una instancia de HttpClient proporcionada por Angular.
  constructor(private http: HttpClient) { }

  // Se crean metodos donde se llaman las rutas de la api
  // http."get, post, put, delete" segun la peticion

  getCategory(){
    return this.http.get(Constante.API_END_POINT + Constante.METHODS.GET_ALL_CATEGORY)
  }

  getProducts(){
    return this.http.get(Constante.API_END_POINT + Constante.METHODS.GET_ALL_PRODUCT)
  }

  guardarProducto(obj: any){
    return this.http.post(Constante.API_END_POINT + Constante.METHODS.CREATE_PRODUCT, obj)
  }

  actualizarProducto(obj: any){
    return this.http.post(Constante.API_END_POINT + Constante.METHODS.UPDATE_PRODUCT, obj)
  }

  // Para eliminar se le pasa el id 
  // EJ: "https://freeapi.miniprojectideas.com/api/BigBasket/DeleteProductById?id=3"
  eliminarProducto(id: any){
    return this.http.get(Constante.API_END_POINT + Constante.METHODS.DELETE_PRODUCT + id)
  }
}
