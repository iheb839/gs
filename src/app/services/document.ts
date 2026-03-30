
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateDocumentdto, DocumentDto } from '../document';
import { Observable } from 'rxjs';
import { AuthService } from './authentification';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  
  url: string = 'http://localhost:8081/documents';
  constructor(private http: HttpClient, private authService: AuthService) { }
 addDocument(formData: FormData, userId: number) {
  return this.http.post<DocumentDto>(`${this.url}/add?userId=${userId}`, formData);
}
  findById(id: string): Observable<DocumentDto> {
    const connectedUserId = this.authService.getConnectedUserId();
    return this.http.get<DocumentDto>(this.url + `/${id}?userId=${connectedUserId}`);
  }
  updateDocument(id: number, formData: FormData): Observable<DocumentDto> {
  const connectedUserId = this.authService.getConnectedUserId();
  return this.http.put<DocumentDto>(
    `${this.url}/update/${id}?userId=${connectedUserId}`,
    formData
  );
}
  delete(id: number): Observable<void> {
    const connectedUserId = this.authService.getConnectedUserId();
    return this.http.delete<void>(`${this.url}/delete/${id}?userId=${connectedUserId}`);
  }
  getMyDocuments(userId: number): Observable<DocumentDto[]> {
    return this.http.get<DocumentDto[]>(`${this.url}/mydocuments?userId=${userId}`);
  }
  getSharedDocuments(userId: number): Observable<DocumentDto[]> {
    return this.http.get<DocumentDto[]>(`${this.url}/shared?userId=${userId}`);
  }

}