/* import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateDocumentdto, DocumentDto } from '../../document';
import { DocumentService } from '../../services/document';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../user';
import { UserService } from '../../services/user';
import { AuthService } from '../../services/authentification';

@Component({
  selector: 'app-addDocument',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './addDocument.html',
  styleUrl: './addDocument.css',
})
export class Adddocument implements OnInit {
  ngOnInit() {
    this.userService.getAllUsers().subscribe({
      next: (users) => this.allUsers = users,
      error: (err) => console.error('Error fetching users', err)
    });
  }
  allUsers: User[] = [];
  constructor(private authService: AuthService,
    private userService: UserService,
    private documentService: DocumentService,
    private router: Router
  ) { }
  createdoc: CreateDocumentdto = {
    title: '',
    description: '',
    file: '',
    visibility: 'PUBLIC',
    usersHasAccess: []
  };
  selectedFile: File | null = null;
  // return user meme dep et pour l'admin tous les user
  getvisibleUsers(): User[] {
    if (this.authService.isAdmin()) {
      return this.allUsers;
    } else {
      const currentDept = this.authService.getCurrentUserDepartement();
      return this.allUsers.filter(u => u.departement === currentDept);
    }
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

  }
  ajouter(dto: CreateDocumentdto) {
    this.documentService.addDocument(dto).subscribe({
      next: (data) => {
        console.log('Document added successfully:', data);
        this.router.navigate(['/documents']);
      },
      error: (err) => {
        console.error('Error adding document:', err);
      }
    });

  }
} */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateDocumentdto, DocumentDto } from '../../document';
import { DocumentService } from '../../services/document';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../user';
import { UserService } from '../../services/user';
import { AuthService } from '../../services/authentification';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-addDocument',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, MatFormFieldModule, MatSelectModule, MatOptionModule],
  templateUrl: './addDocument.html',
  styleUrl: './addDocument.css',
})
export class Adddocument implements OnInit {
  allUsers: User[] = [];
  createdoc: CreateDocumentdto = {
    title: '',
    description: '',
    file: '',
    visibility: 'PUBLIC',
    usersHasAccess: []
  };
  selectedFile: File | null = null;
  
  constructor(private authService: AuthService,
    private userService: UserService,
    private documentService: DocumentService,
    private router: Router
  ) { }


  ngOnInit() {
    this.userService.getAllUsers().subscribe({
      next: (users) => this.allUsers = users,
      error: (err) => console.error('Error fetching users', err)
    });
  }

  
  // return user meme dep pour admin tous les user
getVisibleUsers(): User[] {
  const currentUser = this.authService.getConnectedUserId(); // l'utilisateur connecté

  if (this.authService.isAdmin()) {
    // Tous les utilisateurs sauf l'utilisateur connecté
    return this.allUsers.filter(u => u.id !== currentUser);
  } else {
    const currentDept = this.allUsers.find(u => u.id === currentUser)?.departement; // ou this.authService.getCurrentUserDepartement()
    // Tous les utilisateurs du même département sauf l'utilisateur connecté
    return this.allUsers.filter(u => u.departement === currentDept && u.id !== currentUser);
  }
}


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  ajouter(dto: CreateDocumentdto) {
    const userId = this.authService.getConnectedUserId();
    if (!userId) return;

    const formData = new FormData();

    const dtoBlob = new Blob([JSON.stringify(dto)], { type: 'application/json' });
    formData.append('document', dtoBlob);

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    this.documentService.addDocument(formData, userId).subscribe({
      next: (data) => {
        console.log('Document added successfully:', data);
        this.router.navigate(['/documents']);
      },
      error: (err) => console.error('Error adding document:', err)
    });

  }


}


