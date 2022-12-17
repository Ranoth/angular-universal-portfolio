import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetsComponent } from './projets.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GhReposService } from './gh-repos.service';
import { RepositoriesComponent } from './repositories/repositories.component';



const routes: Routes = [
  {
    path: '',
    component: ProjetsComponent
  }
];

@NgModule({
  declarations: [
    ProjetsComponent,
    RepositoriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GhReposService]
})
export class ProjetsModule { }
