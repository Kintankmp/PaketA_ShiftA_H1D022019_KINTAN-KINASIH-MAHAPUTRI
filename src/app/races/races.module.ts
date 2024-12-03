import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RacesPageRoutingModule } from './races-routing.module'; // Menghapus duplikasi dan typo

import { RacesPage } from './races.page'; // Menghapus impor yang tidak diperlukan

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RacesPageRoutingModule
  ],
  declarations: [RacesPage] // Deklarasi komponen RacesPage
})
export class RacesPageModule {} // Menggunakan PascalCase pada nama modul
