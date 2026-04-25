import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  register(user: any) {
    return this.http.post(`${this.baseUrl}/auth/register`, user);
  }

  login(data: any) {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }

  createBooking(data: any) {
    return this.http.post(`${this.baseUrl}/bookings`, data);
  }

  getBookings() {
    return this.http.get(`${this.baseUrl}/bookings`);
  }
}