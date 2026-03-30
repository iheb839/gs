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
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-addDocument',
  standalone: true,
  imports: [CommonModule, MatIcon, FormsModule, RouterLink, MatFormFieldModule, MatSelectModule, MatOptionModule],
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
  selectedFileName: string = '';

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
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.selectedFileName = this.selectedFile.name;
    }
  }
ajouter(dto: CreateDocumentdto) {
  const userId = this.authService.getConnectedUserId();
  if (!userId) return;

  // ✅ Contrôles de saisie
  if (!dto.title || dto.title.trim().length < 3) {
    alert('Le titre est obligatoire et doit contenir au moins 3 caractères.');
    return;
  }

  if (!dto.description || dto.description.trim().length < 5) {
    alert('La description est obligatoire et doit contenir au moins 5 caractères.');
    return;
  }

  if (!this.selectedFile) {
    alert('Veuillez sélectionner un fichier à télécharger.');
    return;
  }

  if (dto.visibility === 'RESTREINT' && (!dto.usersHasAccess || dto.usersHasAccess.length === 0)) {
    alert('Pour une visibilité RESTREINT, vous devez sélectionner au moins un utilisateur.');
    return;
  }

  // Si tout est OK → préparation du FormData
  const formData = new FormData();
  const dtoBlob = new Blob([JSON.stringify(dto)], { type: 'application/json' });
  formData.append('document', dtoBlob);

  if (this.selectedFile) {
    formData.append('file', this.selectedFile);
  }

  // Appel au service
  this.documentService.addDocument(formData, userId).subscribe({
    next: (data) => {
      console.log('Document added successfully:', data);
      this.router.navigate(['/documents']);
    },
    error: (err) => console.error('Error adding document:', err)
  });
}
}


