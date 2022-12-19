import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: "/about", pathMatch: 'full' },
  {
    path: 'about',
    loadComponent: () => import('./cv/cv.component').then(m => m.CvComponent)
  },
  {
    path: 'projets',
    loadComponent: () => import('./projets/projets.component').then(m => m.ProjetsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
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
