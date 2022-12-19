import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PostNavHeaderComponent } from '../post-nav-header/post-nav-header.component';
import { GhReposService } from './gh-repos.service';
import { RepositoriesComponent } from './repositories/repositories.component';
import { Repository } from './repository';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule, PostNavHeaderComponent, RepositoriesComponent, HttpClientModule],
  providers: [GhReposService],
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent {
  public repos$!: Observable<Repository[]>;
  constructor(readonly ghReposService: GhReposService) {
    this.repos$ = ghReposService.getRepos();
  }
}
