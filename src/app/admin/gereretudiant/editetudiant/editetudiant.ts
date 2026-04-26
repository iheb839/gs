import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminEtudiant } from '../../../services/admin/admin-etudiant';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-editetudiant',
  imports: [FormsModule,CommonModule],
  templateUrl: './editetudiant.html',
  styleUrl: './editetudiant.css',
})
export class Editetudiant implements OnInit {

  etudiant: any;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private service: AdminEtudiant,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadEtudiant();
  }

  loadEtudiant() {
    this.service.getById(this.id).subscribe(data => {
      this.etudiant = data;
    });
  }
  save() {
    this.service.update(this.id, this.etudiant).subscribe(() => {
      this.router.navigate(['/admin/etudiants']);
    });
  }
  cancel() {
    this.router.navigate(['/admin/etudiants']);
  }}
