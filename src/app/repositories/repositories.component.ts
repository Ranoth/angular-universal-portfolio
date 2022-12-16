import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GhReposService } from '../gh-repos.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent {
  repos$: any | undefined;

  constructor(ghReposService: GhReposService) {
    ghReposService.getRepos().subscribe((data: any) => {
      this.repos$ = data;
    });
  }
}
