import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost/api'; // Ganti dengan URL backend Anda

  constructor(private http: HttpClient) {}

  getRaces() {
    return this.http.get(`${this.apiUrl}/read.php`);
  }

  createRace(data: any) {
    return this.http.post(`${this.apiUrl}/create.php`, data);
  }

  updateRace(data: any) {
    return this.http.put(`${this.apiUrl}/update.php`, data);
  }

  deleteRace(id: number) {
    return this.http.post(`${this.apiUrl}/delete.php`, { id });
  }
}
