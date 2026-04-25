import { Component, OnInit } from '@angular/core';
import { AdminChefDepartement } from '../../../services/admin/admin-chef-departement';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adminchefdepartement',
  imports: [FormsModule],
  templateUrl: './adminchefdepartement.html',
  styleUrl: './adminchefdepartement.css',
})
export class Adminchefdepartement implements OnInit {

  chefs: any[] = [];
  newChef: any = {};
  editChef: any = null;

  constructor(private chefService: AdminChefDepartement) {}

  ngOnInit(): void {
    this.loadChefs();
  }

  loadChefs() {
    this.chefService.getAll().subscribe(data => this.chefs = data);
  }

  add() {
    this.chefService.create(this.newChef).subscribe(() => {
      this.newChef = {};
      this.loadChefs();
    });
  }

  edit(chef: any) {
    this.editChef = { ...chef };
  }

  save() {
    this.chefService.update(this.editChef.id, this.editChef)
      .subscribe(() => {
        this.editChef = null;
        this.loadChefs();
      });
  }

  delete(id: number) {
    if (confirm('Supprimer ce chef de département ?')) {
      this.chefService.delete(id).subscribe(() => this.loadChefs());
    }
  }

}
