import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  
}
