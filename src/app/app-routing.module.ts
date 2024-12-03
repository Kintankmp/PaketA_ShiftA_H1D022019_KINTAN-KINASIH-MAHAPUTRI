import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'races', // Mengarahkan ke halaman races saat root path diakses
    pathMatch: 'full'
  },
  {
    path: 'races',
    loadChildren: () => import('./races/races.module').then(m => m.RacesPageModule) // Memuat modul races
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) // Strategi preloading
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
