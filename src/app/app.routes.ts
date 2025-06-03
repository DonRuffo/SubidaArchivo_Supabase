import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'upload',
    loadComponent: () => import('./page/upload/upload.page').then( m => m.UploadPage)
  },
  {
    path: '',
    loadComponent: () => import('./page/auth/auth.page').then( m => m.AuthPage)
  },
];
