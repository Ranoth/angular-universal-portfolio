import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: "/about", pathMatch: 'full' },
  {
    path: 'about',
    loadComponent: () => import('./cv/cv.component').then(m => m.CvComponent),
    data: { animation: 'fadeA' }
  },
  {
    path: 'projets',
    loadComponent: () => import('./projets/projets.component').then(m => m.ProjetsComponent),
    data: { animation: 'fadeP' }
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent),
    data: { animation: 'fadeC' }
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
