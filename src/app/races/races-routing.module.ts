import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RacesPage } from './races.page'; // Import hanya satu kali

const routes: Routes = [
  {
    path: '',
    component: RacesPage, // Pastikan ini sesuai dengan nama komponen Anda
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule],
})
export class RacesPageRoutingModule {} // Perbaikan pada nama class routing
