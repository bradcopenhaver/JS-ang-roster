import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ClanDetailComponent} from './clan-detail/clan-detail.component';
import {AdminComponent} from './admin/admin.component';

const appRoutes: Routes = [   {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'clan/:id',
    component: ClanDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
