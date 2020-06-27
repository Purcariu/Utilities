import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  constructor(private http: HttpClient) { }

  signup(data) {
    return this.http.post(`${baseUrl}/signup`, data);
  }

  login(data) {
    return this.http.post(`${baseUrl}/login`, data);
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${baseUrl}/sendPasswordResetLink`, data);
  }

  changePassword(data) {
    return this.http.post(`${baseUrl}/resetPassword`, data);
  }
}
