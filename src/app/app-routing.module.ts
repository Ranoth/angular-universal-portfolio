import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: "/about", pathMatch: 'full' },
  { path: 'about', loadChildren: () => import('./cv/cv.module').then(m => m.CvModule) },
  { path: "contact", loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  {path: 'projets', loadChildren: () => import('./projets/projets.module').then(m => m.ProjetsModule)},
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  }),
  SharedModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
