import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GhReposService } from '../gh-repos.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoriesComponent {
  repos$: Observable<Repository[]>;

  constructor(private ghReposService: GhReposService) {
    this.repos$ = this.ghReposService.getRepos();
  }
}
