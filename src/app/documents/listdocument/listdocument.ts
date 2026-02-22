import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserDto } from '../../user';
import { DocumentService } from '../../services/document';
import { AuthService } from '../../services/authentification';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { DocumentDto } from '../../document';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationPopupComponent } from '../../shared/confirmation-popup/confirmation-popup/confirmation-popup';


@Component({
  selector: 'app-listdocument',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, MatIconModule],
  templateUrl: './listdocument.html',
  styleUrl: './listdocument.css',
})
export class Listdocument implements OnInit {
  documents: DocumentDto[] = [];
  filteredDocuments: DocumentDto[] = [];
  searchText: string = '';
  viewMode: 'MY' | 'SHARED' = 'MY';
  readonly dialog = inject(MatDialog);

  constructor(
    private authService: AuthService, private http: HttpClient,
    private documentService: DocumentService,
    private router: Router
  ) { }



  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
   this.getMyDocuments();

  }
  getSharedDocuments(): void {
  const userId = this.authService.getConnectedUserId();

  if (!userId) {
    return;
  }

  this.documentService.getSharedDocuments(userId)
    .subscribe({
      next: list => {
        this.documents = list;
        this.filteredDocuments = list;
      }
    });
}


getMyDocuments(): void {
  const userId = this.authService.getConnectedUserId();

  if (!userId) {
    return;
  }

  this.documentService.getMyDocuments(userId)
    .subscribe({
      next: list => {
        this.documents = list;
        this.filteredDocuments = list;
      }
    });
}



switchView(mode: 'MY' | 'SHARED') {
  this.viewMode = mode;

  if (mode === 'MY') {
    this.getMyDocuments();
  } else {
    this.getSharedDocuments();
  }
}

  

  onSearch(): void {
    const value = this.searchText.toLowerCase();
    this.filteredDocuments = this.documents.filter(doc =>
      doc.title?.toLowerCase().includes(value) ||
      doc.description?.toLowerCase().includes(value) ||
      doc.visibility?.toLowerCase().includes(value) ||
      doc.owner?.email?.toLowerCase().includes(value)
    );
  }

  getUserNames(users: UserDto[]): string {
    return users.map(u => u.firstname + ' ' + u.lastname).join(',');
  }

  deleteDocument(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      width: '600px',
      data: {
        title: 'Suppression',
        message: 'Voulez-vous vraiment supprimer ce document ?',
        confirmText: 'Supprimer',
        cancelText: 'Annuler'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.documentService.delete(id).subscribe({
          next: () => {
            this.documents = this.documents.filter(d => d.id !== id);
            this.filteredDocuments = this.filteredDocuments.filter(d => d.id !== id);
          }
        });
      }
    });
  }
  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
  isOwner(doc: any): boolean {
    const currentEmail = this.authService.getCurrentUserEmail();
    return currentEmail ? currentEmail === doc.owner?.email : false;
  }


  downloadFile(base64String: string, fileName: string, docType: string = 'application/octet-stream') {


    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: docType });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  openFileInNewTab(
    base64String: string,
    docType: string = 'application/pdf'
  ) {

    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: docType });

    const url = window.URL.createObjectURL(blob);

    window.open(url, '_blank');
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 10000);
  }


}
