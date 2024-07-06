import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import { ElectronicaService } from '../services/electronica.service';

@NgModule({
  declarations: [CatalogoProductosComponent],
  imports: [CommonModule],
  exports: [CatalogoProductosComponent],
  providers: [ElectronicaService],
})
export class SeccionProductosModule {}
