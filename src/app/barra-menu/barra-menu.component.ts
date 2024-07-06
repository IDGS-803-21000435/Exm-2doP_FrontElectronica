import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-barra-menu',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './barra-menu.component.html',
  styleUrl: './barra-menu.component.css',
})
export class BarraMenuComponent {}
