import { Component } from '@angular/core';
import { UserService } from '../../../services/user';
import { Router, RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { AuthService } from '../../../services/authentification';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listuser',
  imports: [RouterModule, FormsModule, MatIconModule],
  templateUrl: './listuser.html',
  styleUrl: './listuser.css',
})
export class Listuser implements OnInit {
  Users: any[] = [];
  filteredUsers: any[] = [];
  searchText: string = '';

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    this.getUserList();
  }
  onSearch(): void {
    const value = this.searchText.toLowerCase();
    this.filteredUsers = this.Users.filter(user =>
      (user.email?.toLowerCase().includes(value)) ||
      (user.firstname?.toLowerCase().includes(value)) ||
      (user.lastname?.toLowerCase().includes(value))
    );
  }
  getUserList(): void {
    this.userService.getAllUsers().subscribe({
      next: list => {
        this.Users = list;
        this.filteredUsers = list;
      },
    });
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe({
      next: () => {
        this.getUserList();
      },
    });
  }

}
