import { Component, OnInit } from '@angular/core';
import { AdminEncadrant } from '../../../services/admin/admin-encadrant';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adminencadrant',
  imports: [FormsModule],
  templateUrl: './adminencadrant.html',
  styleUrl: './adminencadrant.css',
})
export class Adminencadrant implements OnInit {

  encadrants: any[] = [];
  newEncadrant: any = {};
  editEncadrant: any = null;

  constructor(private service: AdminEncadrant) {}

  ngOnInit(): void {
    this.loadEncadrants();
  }

  loadEncadrants() {
    this.service.getAll().subscribe(data => this.encadrants = data);
  }

  add() {
    this.service.create(this.newEncadrant).subscribe(() => {
      this.newEncadrant = {};
      this.loadEncadrants();
    });
  }

  edit(enc: any) {
    this.editEncadrant = { ...enc };
  }

  save() {
    this.service.update(this.editEncadrant.id, this.editEncadrant)
      .subscribe(() => {
        this.editEncadrant = null;
        this.loadEncadrants();
      });
  }

  delete(id: number) {
    if (confirm('Supprimer cet enseignant ?')) {
      this.service.delete(id).subscribe(() => this.loadEncadrants());
    }
  }

}
