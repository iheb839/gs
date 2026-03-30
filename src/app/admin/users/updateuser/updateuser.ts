import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDto } from '../../../user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-updateuser',
  imports: [CommonModule, FormsModule,MatIcon],
  templateUrl: './updateuser.html',
  styleUrl: './updateuser.css',
})
export class Updateuser implements OnInit {
  user: UserDto = {
    id: 0,
    email: '',
    firstname: '',
    lastname: '',
    tel: '',
    dateN: new Date(),
    genre: '',
    role: '',
    departement: ''
  };
   departements: string[] = [
  'Informatique',
  'Réseaux',
  'Sécurité Informatique',
  'Développement',
  'Finance',
  'Ressources Humaines'
];

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserbyId(+id).subscribe({
        next: (data) => this.user = data,
      });

    }
  }
  updateUser(user: UserDto) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.updateUser(Number(id), user).subscribe({
        next: (data) => {
          console.log('User updated successfully', data);
          this.router.navigate(['/users']);

        },
        error: (error) => {
          console.error('Error updating user', error);
        },
      });
    }
  }
  cancel() {
    this.router.navigate(['/users']);
  }
}