import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserDto, UserDto, User } from '../user';
import { Observable } from 'rxjs';
import { AuthService } from './authentification';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:8082/users';
  constructor(private http: HttpClient, private authService: AuthService) { }

  createUser(user: CreateUserDto): Observable<User> {
    const connectedUserId = this.authService.getConnectedUserId();
    return this.http.post<User>(this.url + `/add?adminId=${connectedUserId}`, user);
  }
  
  getAllUsers(): Observable<UserDto[]> {
    const connectedUserId = this.authService.getConnectedUserId();
    return this.http.get<UserDto[]>(this.url + `?adminId=${connectedUserId}`);
  }

  getUserbyId(id: number): Observable<UserDto> {
    return this.http.get<UserDto>(this.url + `/${id}`);
  }

  updateUser(id: number, user: UserDto): Observable<UserDto> {
    const connectedUserId = this.authService.getConnectedUserId();
    return this.http.put<UserDto>(this.url + `/update/${id}?userConnectId=${connectedUserId}`, user);
  }
  deleteUser(id: number): Observable<void> {
    const connectedUserId = this.authService.getConnectedUserId();
    return this.http.delete<void>(this.url + `/delete/${id}?adminId=${connectedUserId}`);
  }
}
