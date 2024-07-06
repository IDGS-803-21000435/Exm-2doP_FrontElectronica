import { Component, OnInit } from '@angular/core';
import { IProducto } from '../../interfaces/products';
import { ElectronicaService } from '../../services/electronica.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrl: './catalogo-productos.component.css',
})
export class CatalogoProductosComponent implements OnInit {
  productos: IProducto[] = [];
  productosBuscados: IProducto[] = [];

  constructor(private electroService: ElectronicaService) {}

  ngOnInit(): void {
    this.electroService.getList().subscribe(
      (data: IProducto[]) => {
        this.productos = data;
        this.productosBuscados = data; // Inicializa filteredProducts con todos los productos
        console.log('Products:', this.productos);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  buscarProducto(event: any): void {
    const searchTerm = event.target.value.toLowerCase();
    this.productosBuscados = this.productosBuscados.filter((product) =>
      product.nombre.toLowerCase().includes(searchTerm)
    );
  }
}
