import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjetsComponent } from './projets/projets.component';

const routes: Routes = [
  {path: '', redirectTo: "/about", pathMatch: 'full'},
  // {path: "home", component: HomeComponent},
  {path: "projets", component: ProjetsComponent},
  // {path: "veille", component: VeilleTechnoComponent},
  {path: "about", component: CvComponent},
  {path: "contact", component: ContactComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
