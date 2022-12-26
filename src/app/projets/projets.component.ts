import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { fadeInOut } from '../animations';
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
  styleUrls: ['./projets.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjetsComponent {
  repos$!: Observable<Repository[]>;
  constructor(readonly ghReposService: GhReposService, private title: Title, private metaTag: Meta) {
    this.title.setTitle("Mes projets");
    this.metaTag.updateTag({ name: "description", content: "Mes projets disponnibles sur GitHub" })
    this.repos$ = ghReposService.getRepos();
  }
}
