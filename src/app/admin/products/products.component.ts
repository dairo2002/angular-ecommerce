import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  // Ocultamos el contenedor de esta forma
  isSidePanelVisible: boolean = false;
  productObj: any = {
    productId: 0,
    productSku: '',
    productName: '',
    productPrice: 0,
    productShortName: '',
    productDescription: '',
    createdDate: new Date(), // Instancia a la fecha,
    deliveryTimeSpan: '',
    categoryId: 0,
    productImageUrl: '',
  };

  // Arreglo con la lista de categorias
  categoriaList: any[] = [];
  productsList: any[] = [];

  constructor(private productSrv: ProductService) {}

  // Inicializamos los metodos que se van a mostrar en los componentes
  ngOnInit(): void {
    this.getProducts();
    this.getAllCategory();

  }

  getProducts() {
    this.productSrv.getProducts().subscribe((res: any) => {
      this.productsList = res.data;
    });
  }

  // Realizamos la peticion a la api en donde llama los metodos que componen la URL de la api para todas las categorías
  getAllCategory() {
    // Aquí estamos llamando al método getCategory() del servicio productSrv.
    this.productSrv.getCategory().subscribe((res: any) => {
      // Utilizamos el método subscribe() para suscribirnos a este Observable y recibir la respuesta.
      // El parámetro 'res' representa la respuesta recibida del servidor.
      // 'res' puede ser de tipo 'any', lo que significa que puede contener cualquier tipo de datos, dependiendo de la respuesta del servidor.

      // Almacenamos la respuesta en el arreglo
      this.categoriaList = res.data;
      // console.log("JSON ",res.data)
    });
  }

  // Este metodo se llama es al hacer click
  guardarProducto() {
    // this.productObj se llaman los campos los cuales son utlizados para guardar el producto
    this.productSrv.guardarProducto(this.productObj).subscribe((res: any) => {
      // La función de devolución de llamada proporcionada al método subscribe() se ejecuta cuando se completa la solicitud HTTP y se recibe una respuesta del servidor.
      // Utilizamos 'debugger' para detener la ejecución del código y permitir la depuración en este punto.
      debugger;
      // Verificamos si la propiedad 'result' de la respuesta es verdadera. Esto generalmente indica que la operación de guardado fue exitosa.
      if (res.result) {
        alert('Producto creado!!');
        // Llamas el metodo, para cuando se cree un producto se muestre al instante
        this.getProducts();
      } else {
        alert(res.message);
      }
    });
  }


  // Consulta los datos y los muestra en los compos
  editarProducto(item: any) {
    this.productObj = item;
    this.openSidePanel();
  }

  actualizarProducto() {
    this.productSrv.actualizarProducto(this.productObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert('Producto actualizado!!');
        this.getProducts();
      } else {
        alert(res.message);
      }
    });
  }



  eliminarProducto(item: any) {
    const eliminar = confirm("Está seguro de eliminar este producto ?")
    if (eliminar){
      this.productSrv.eliminarProducto(item.productId).subscribe((res: any) => {
        debugger;
        if (res.result) {
          alert('Producto creado!!');        
          this.getProducts();
        } else {
          alert(res.message);
        }
      });
      
    }  
  }

  
  // Funciones utilizadas en los contenedor, para ocultar o ver un contenedor
  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}
