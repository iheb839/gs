import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard';
import { Stats } from '../../user';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-dashboard',
  imports: [MatIconModule],
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {

  usersStats: any[] = [];
   stats: Stats = {
    totalDocs: 0,
    publicDocs: 0,
    privateDocs: 0,
    restrictedDocs: 0
  };
  loading: boolean = false;
  error: string = '';

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadStatsDoc();
    this.loadStatsUser();
  }

  loadStatsUser() {
    this.dashboardService.getAllUsersStats().subscribe({
      next: (data) => {
        this.usersStats = data;
      },
      error: (err) => {
        console.error('Erreur API', err);
      }
    });
  }
  loadStatsDoc() {
  this.dashboardService.getStats().subscribe({
    next: (data) => {
      console.log('Données reçues:', data);
      this.stats = data;
    },
    error: (err) => {
      console.error('Erreur API', err);
    }
  });
}
}
