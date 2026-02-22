import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DocumentDto } from '../../document';
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


@Component({
  selector: 'app-updateDocument',
  imports: [CommonModule, FormsModule, MatFormField, MatFormFieldModule, MatSelectModule, MatOptionModule],
  standalone: true,
  templateUrl: './updateDocument.html',
  styleUrl: './updateDocument.css',
})
export class Updatedocument implements OnInit {
  doc!: DocumentDto;
  allUsers: any[] = [];
  constructor(private userService: UserService, private authService: AuthService, private route: ActivatedRoute, private documentService: DocumentService, private router: Router) { }
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
        },
        error: (err) => console.error(err)
      });
    }

    this.userService.getAllUsers().subscribe({
      next: (data) => this.allUsers = data,
      error: (err) => console.error(err)
    });
  }
  getVisibleUsers(): User[] {
    if (this.authService.isAdmin()) {
      return this.allUsers;
    } else {
      const currentDept = this.authService.getCurrentUserDepartement();
      return this.allUsers.filter(u => u.departement === currentDept);
    }
  }

 selectedFile?: File;

onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}

updatedocument() {

  this.doc.usersHasAccess = this.allUsers
    .filter(u => this.selectedUserIds.includes(u.id));

  const formData = new FormData();

  formData.append(
    'document',
    new Blob([JSON.stringify(this.doc)], { type: 'application/json' })
  );

  if (this.selectedFile) {
    formData.append('file', this.selectedFile);
  }

  this.documentService
    .updateDocument(this.doc.id!, formData)
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
}
