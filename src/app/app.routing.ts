import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ClanDetailComponent} from './clan-detail/clan-detail.component';
import {AdminComponent} from './admin/admin.component';
import {CreateClanComponent} from './create-clan/create-clan.component';
import {CreateMemberComponent} from './create-member/create-member.component';

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
  },
  {
    path: 'create-clan',
    component: CreateClanComponent
  },
  {
    path: 'create-member',
    component: CreateMemberComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
