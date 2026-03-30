import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UpdatePasswordRequest } from '../user';

@Injectable({
  providedIn: 'root',
})
export class Resetpassword {

 private url: string = 'http://localhost:8081/pass';
 constructor(private http: HttpClient, private router: Router) {
  const token = localStorage.getItem('token');
  
}
sendCode(email: string) {
  return this.http.post(this.url +`/send-code`,{email});
}
updatePassword(request:UpdatePasswordRequest) {
  return this.http.post(this.url +`/update-password`,request);
}
changePassword(data: any) {
  return this.http.post(this.url+`/change-password`, data);
}
}