import { Routes } from '@angular/router';
import { ProfileComponent } from './smart/entry-comp/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./smart/entry-comp/form/form.component').then(
        (m) => m.FormComponent
      ),
  },
];
