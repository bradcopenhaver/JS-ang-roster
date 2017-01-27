import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ClanDetailComponent} from './clan-detail/clan-detail.component';

const appRoutes: Routes = [   {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'clan/:id',
    component: ClanDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
