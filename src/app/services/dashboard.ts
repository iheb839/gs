import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = 'http://localhost:8081/api/dashboard';

  constructor(private http: HttpClient) {}


getStats(): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = { Authorization: `Bearer ${token}` }; 
  return this.http.get(`${this.baseUrl}/stats`, { headers });
}
getAllUsersStats(): Observable<any> {
  const token = localStorage.getItem('token');
  return this.http.get(`${this.baseUrl}/all-users-stats`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}


}
