import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminEtudiant } from '../../../services/admin/admin-etudiant';
import { RouterModule } from '@angular/router'
@Component({
  selector: 'app-listetudiant',
  imports: [RouterModule],
  templateUrl: './listetudiant.html',
  styleUrl: './listetudiant.css',
})
export class Listetudiant implements OnInit {

  etudiants: any[] = [];

  constructor(
    private service: AdminEtudiant,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEtudiants();
  }

  loadEtudiants() {
    this.service.getAll().subscribe(data => {
      this.etudiants = data;
    });
  }

  edit(id: number) {
    this.router.navigate(['/admin/etudiants/edit', id]);
  }

  delete(id: number) {
    if (confirm('Supprimer cet étudiant ?')) {
      this.service.delete(id).subscribe(() => {
        this.loadEtudiants();
      });
    }
  }


}
