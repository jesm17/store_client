import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  adminSigIn(user: Login) {
    return this.http.post(`${this.URL}/admin/sigin`, user);
  }
}
