import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirect root to splash
  { path: '', redirectTo: 'splash', pathMatch: 'full' },

  // Routes without BottomTabBar (full screen)
  { path: 'splash', loadComponent: () => import('./pages/splash/splash.page').then(m => m.SplashPage) },
  { path: 'onboarding', loadComponent: () => import('./pages/onboarding/onboarding.page').then(m => m.OnboardingPage) },
  { path: 'auth', loadComponent: () => import('./pages/auth/auth.page').then(m => m.AuthPage) },
  { path: 'welcome', loadComponent: () => import('./pages/welcome/welcome.page').then(m => m.WelcomePage) },

  // Routes WITH BottomTabBar - parent path: 'home'
  {
    path: 'home',
    loadComponent: () => import('./components/layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      // /home → HomePage
      { path: '', loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage) },
      { path: 'explore', loadComponent: () => import('./pages/explore/explore.page').then(m => m.ExplorePage) },
      { path: 'chat', loadComponent: () => import('./pages/chat/chat.page').then(m => m.ChatPage) },
      { path: 'favorites', loadComponent: () => import('./pages/favorites/favorites.page').then(m => m.FavoritesPage) },
      { path: 'history', loadComponent: () => import('./pages/history/history.page').then(m => m.HistoryPage) },
      { path: 'profile', loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePage) },
      { path: 'settings', loadComponent: () => import('./pages/settings/settings.page').then(m => m.SettingsPage) },
      { path: 'place/:slug', loadComponent: () => import('./pages/place-detail/place-detail.page').then(m => m.PlaceDetailPage) },
      { path: 'trips', loadComponent: () => import('./pages/trips/trips.page').then(m => m.TripsPage) },
      { path: 'trips/:id', loadComponent: () => import('./pages/trip-detail/trip-detail.page').then(m => m.TripDetailPage) },
      { path: 'search', loadComponent: () => import('./pages/search/search.page').then(m => m.SearchPage) },
      { path: 'notifications', loadComponent: () => import('./pages/notifications/notifications.page').then(m => m.NotificationsPage) },
    ]
  },

  // Catch all
  { path: '**', redirectTo: 'splash' }
];
