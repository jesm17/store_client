import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  URL: string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(this.URL);
  }
}
