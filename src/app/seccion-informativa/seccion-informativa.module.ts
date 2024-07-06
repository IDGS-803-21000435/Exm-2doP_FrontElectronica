import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { ElectronicaService } from '../services/electronica.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [PaginaInicioComponent],
  imports: [CommonModule, BrowserModule],
  exports: [PaginaInicioComponent],
  providers: [ElectronicaService],
})
export class SeccionInformativaModule {}
