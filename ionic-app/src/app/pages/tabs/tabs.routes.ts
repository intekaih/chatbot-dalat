import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const TABS_ROUTES: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'chat',
        loadComponent: () => import('./chat/chat.page').then(m => m.ChatPage)
      },
      {
        path: 'history',
        loadComponent: () => import('./history/history.page').then(m => m.HistoryPage)
      },
      {
        path: 'favorites',
        loadComponent: () => import('./favorites/favorites.page').then(m => m.FavoritesPage)
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings/settings.page').then(m => m.SettingsPage)
      },
      {
        path: '',
        redirectTo: 'chat',
        pathMatch: 'full'
      }
    ]
  }
];
