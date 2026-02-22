import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentification';
import { User } from '../user';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-profile',
  imports: [MatIconModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile implements OnInit {
  user?: User;
  constructor(private authService: AuthService, private router: Router,
    public dialogRef: MatDialogRef<Profile>
  ) { }

  ngOnInit(): void {
    const userInfo = localStorage.getItem('USER_INFO');
    if (userInfo) {
      this.user = JSON.parse(userInfo);
    }
  }
  closeModal() {
    this.dialogRef.close(true);
  }

}
