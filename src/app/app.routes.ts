import { Routes } from '@angular/router';
import { Login } from './auth/login/login';

import { Updatepassword } from './auth/updatepassword/updatepassword';
import { Signup } from './auth/signup/signup';
import { Etudiant } from './etudiant/etudiant';
import { Chefdepartement } from './chefdepartement/chefdepartement';
import { Admin } from './admin/admin';
import { Dashbord } from './admin/dashbord/dashbord';
import { Adminencadrant } from './admin/gererencadrant/adminencadrant/adminencadrant';
import { Adminchefdepartement } from './admin/gererchefdepartement/adminchefdepartement/adminchefdepartement';
import { Editetudiant      } from './admin/gereretudiant/editetudiant/editetudiant';
import { Listetudiant } from './admin/gereretudiant/listetudiant/listetudiant';


export const routes: Routes = [
  { path: '', component: Login },
    { path: 'admin/etudiants/edit/:id', component: Editetudiant },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'updatepassword/:email', component: Updatepassword },
  { path: 'etudiant', component: Etudiant },
  { path: 'adminencadrant', component: Adminencadrant },
  {path: 'chefdepartement', component: Chefdepartement},
  {path: 'admin', component: Admin},
  {path: 'dashbord', component: Dashbord},
  {path:'Listetudiant',component: Listetudiant},
  {path:'adminchefdepartement',component: Adminchefdepartement},

   { path: '**', redirectTo: 'login' }
];
