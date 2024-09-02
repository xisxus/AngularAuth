import { Routes } from '@angular/router';
import { LoginComponent } from './Component/login/LoginComponent';
import { LayerComponent } from './Component/layer/layer.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { RegisterComponent } from './Component/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayerComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
  { path: 'db', component: DashboardComponent },
  { path: 'reg', component: RegisterComponent },
];
