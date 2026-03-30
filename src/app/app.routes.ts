import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Updatedocument } from './documents/updateDocument/updateDocument';
import { Listdocument } from './documents/listdocument/listdocument';
import { Listuser } from './admin/users/listuser/listuser';
import { Profile } from './profile/profile';
import { Adddocument } from './documents/addDocument/addDocument';
import { Updatepassword } from './auth/updatepassword/updatepassword';
import { Adduser } from './admin/users/adduser/adduser';
import { Updateuser } from './admin/users/updateuser/updateuser';
import { Dashboard } from './admin/dashboard/dashboard';
import { RoleGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'login', component: Login },
  { path: 'profile', component: Profile },
  { path: 'documents', component: Listdocument },
  { path: 'addDocument', component: Adddocument },
  { path: 'updateDocument/:id', component: Updatedocument },
  { path: 'updatepassword/:email', component: Updatepassword },
  {path: 'users',component: Listuser, canActivate: [RoleGuard], data: { roles: ['ADMIN','AGENT_ADMINISTRATIF'] }},
  {path: 'addUser',component: Adduser,canActivate: [RoleGuard], data: { roles: ['ADMIN','AGENT_ADMINISTRATIF'] }},
  {path: 'updateuser/:id',component: Updateuser,canActivate: [RoleGuard],data: { roles: ['ADMIN','AGENT_ADMINISTRATIF'] }},
  { path: 'adminDashboard', component: Dashboard,canActivate: [RoleGuard],data: { roles: ['ADMIN',] }},
   { path: '**', redirectTo: 'login' }
];
