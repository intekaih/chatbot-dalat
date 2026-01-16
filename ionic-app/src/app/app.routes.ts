import { Routes } from '@angular/router';
import { authGuard, publicGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.page').then(m => m.LoginPage),
    canActivate: [publicGuard]
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/auth/register/register.page').then(m => m.RegisterPage),
    canActivate: [publicGuard]
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/layout/layout.routes').then(m => m.LAYOUT_ROUTES),
    canActivate: [authGuard]
  },
  {
    path: 'tabs/chat',
    redirectTo: 'app/chat',
    pathMatch: 'full'
  },
  {
    path: 'tabs/history',
    redirectTo: 'app/history',
    pathMatch: 'full'
  },
  {
    path: 'tabs/favorites',
    redirectTo: 'app/saved',
    pathMatch: 'full'
  },
  {
    path: 'tabs/settings',
    redirectTo: 'app/settings',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    redirectTo: 'app',
    pathMatch: 'full'
  }
];
