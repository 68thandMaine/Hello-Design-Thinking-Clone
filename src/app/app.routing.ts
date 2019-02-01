import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './edit-user/edit.component';



const appRoutes: Routes = [
  {
    path: 'profile/:id',
    component: EditComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
