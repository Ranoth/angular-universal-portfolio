import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostNavHeaderComponent } from './post-nav-header/post-nav-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    PostNavHeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostNavHeaderComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
