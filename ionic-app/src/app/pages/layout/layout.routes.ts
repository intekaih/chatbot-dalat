import { Routes } from '@angular/router';
import { LayoutPage } from './layout.page';

export const LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      {
        path: 'chat',
        loadComponent: () => import('../tabs/chat/chat.page').then(m => m.ChatPage)
      },
      {
        path: 'history',
        loadComponent: () => import('../tabs/history/history.page').then(m => m.HistoryPage)
      },
      {
        path: 'saved',
        loadComponent: () => import('../tabs/favorites/favorites.page').then(m => m.FavoritesPage)
      },
      {
        path: 'settings',
        loadComponent: () => import('../tabs/settings/settings.page').then(m => m.SettingsPage)
      },
      {
        path: '',
        redirectTo: 'chat',
        pathMatch: 'full'
      }
    ]
  }
];
