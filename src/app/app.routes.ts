import { Routes } from '@angular/router';
import { CatalogoProductosComponent } from './seccion-productos/catalogo-productos/catalogo-productos.component';
import { PaginaInicioComponent } from './seccion-informativa/pagina-inicio/pagina-inicio.component';
import { FormAyudaComponent } from './seccion-ayuda/form-ayuda/form-ayuda.component';

export const routes: Routes = [
  { path: 'productos', component: CatalogoProductosComponent },
  { path: 'paginaInicio', component: PaginaInicioComponent },
  { path: 'infoContacto', component: FormAyudaComponent },
];
