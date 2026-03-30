import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateDocumentdto, DocumentDto } from '../../document';
import { CommonModule } from '@angular/common';
import { DocumentService } from '../../services/document';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../services/user';
import { AuthService } from '../../services/authentification';
import { User } from '../../user';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-updateDocument',
  imports: [CommonModule, FormsModule, MatFormField, MatFormFieldModule, MatSelectModule, MatOptionModule, MatIcon],
  standalone: true,
  templateUrl: './updateDocument.html',
  styleUrl: './updateDocument.css',
})
export class Updatedocument implements OnInit {
  doc!: DocumentDto;
  allUsers: any[] = [];
  selectedFile?: File;
  selectedFileName: string = '';
  constructor(private userService: UserService, private authService: AuthService,
    private route: ActivatedRoute, private documentService: DocumentService, private router: Router) { }
  selectedUserIds: number[] = [];
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.documentService.findById(id).subscribe({
        next: (data) => {
          this.doc = data;
          if (this.doc.usersHasAccess) {
            this.selectedUserIds = this.doc.usersHasAccess.map(u => u.id);
          }

          // Convertir Base64 en File pour selectedFile
          if (this.doc.file && this.doc.type) {
            this.selectedFile = this.base64ToFile(this.doc.file, this.doc.title || 'document', this.doc.type);
            this.selectedFileName = (this.doc.title || 'document')+ '.' + this.doc.type.split('/')[1];
          }
        },
        error: (err) => console.error(err)
      });
    }

    this.userService.getAllUsers().subscribe({
      next: (data) => this.allUsers = data,
      error: (err) => console.error(err)
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.selectedFileName = this.selectedFile.name;
    }
  }
  updatedocument() {

    // transformer DocumentDto en CreateDocumentdto
    const dto: CreateDocumentdto = {
      id: this.doc.id,
      title: this.doc.title,
      description: this.doc.description,
      visibility: this.doc.visibility,
      usersHasAccess: this.selectedUserIds,
    };

    const formData = new FormData();

    formData.append(
      'document',
      new Blob([JSON.stringify(dto)], { type: 'application/json' })
    );

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }
    this.documentService
      .updateDocument(this.doc.id, formData)
      .subscribe({
        next: () => {
          alert('Document updated successfully');
          this.router.navigate(['/documents']);
        },
        error: (err) => console.error(err)
      });
  }
  cancel() {
    this.router.navigate(['/documents']);
  }

  private base64ToFile(base64String: string, filename: string, docType: string): File {
    const byteCharacters = atob(base64String.includes(',') ? base64String.split(',')[1] : base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new File([byteArray], filename, { type: docType });
  }
}
