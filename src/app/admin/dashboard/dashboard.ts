import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard';
import { Stats } from '../../user'; 
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

export interface UserStat {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  departement: string;
  totalDocs: number;
  publicDocs: number;
  privateDocs: number;
  restrictedDocs: number;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {
  usersStats: UserStat[] = [];
  groupedData: { [key: string]: UserStat[] } = {};
  groupKeys: string[] = [];

  stats: Stats = {
    totalDocs: 0,
    publicDocs: 0,
    privateDocs: 0,
    restrictedDocs: 0
  };

  loading: boolean = false;
  error: string = '';

  constructor(private dashboardService: DashboardService) { }
  ngOnInit(): void {
    this.chargerDonnees();
  }
  chargerDonnees() {
    this.loading = true;
    this.error = '';
    this.dashboardService.getAllUsersStats().subscribe({
      next: (data) => {
        this.usersStats = data || [];
        this.dashboardService.getStats().subscribe({
          next: (dataStats) => {
            this.stats = dataStats;
            this.trierParDepartement(); 
            this.loading = false;
          },
          error: (err) => {
            this.error = 'Erreur de chargement des stats.';
            this.loading = false;
          }
        });
      },
      error: (err) => {
        this.error = 'Erreur de chargement des utilisateurs.';
        this.loading = false;
      }
    });
  }
  trierParDepartement() {
    this.groupedData = {};
    this.groupKeys = [];
    for (let user of this.usersStats) {
      if (user.role === 'ADMIN') { 
        continue;
      }
      let clef = user.departement;
      if (!this.groupedData[clef]) {
        this.groupedData[clef] = [];
        this.groupKeys.push(clef);
      }
      this.groupedData[clef].push(user);
    }
    this.groupKeys.sort();
  }
}