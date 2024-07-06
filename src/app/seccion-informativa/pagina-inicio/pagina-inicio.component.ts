import { Component, OnInit } from '@angular/core';
import { IProducto } from '../../interfaces/products';
import { ElectronicaService } from '../../services/electronica.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css',
})
export class PaginaInicioComponent implements OnInit {
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
}
