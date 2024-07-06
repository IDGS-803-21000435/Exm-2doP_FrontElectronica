import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from '../interfaces/products';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ElectronicaService {
  private _endPoint: string = environment.endPoint;
  private _apiURL: string = this._endPoint + 'Productos/';

  constructor(private http: HttpClient) {}
  getList(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(`${this._apiURL}ListaElectronicos`);
  }
}
