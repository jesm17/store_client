import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  URL: string = 'http://localhost:3000/categories';
  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get(this.URL);
  }
}
