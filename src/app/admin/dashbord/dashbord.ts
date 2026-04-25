import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin';

@Component({
  selector: 'app-dashbord',
  imports: [],
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.css',
})
export class Dashbord implements OnInit {

  stats = {
    totalUsers: 0,
    totalEtudiants: 0,
    totalEnseignants: 0,
    totalChefs: 0,
    totalSoutenances: 0
  };

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.adminService.getDashboardStats().subscribe(data => {
      this.stats = data;
    });
  }
}

