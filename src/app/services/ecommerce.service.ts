import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../interface/products.interface';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  private readonly API_URL = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.API_URL);
  }
}
