import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GhReposService } from '../gh-repos.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [GhReposService],
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoriesComponent {
  @Input() public repo!: Repository;
}
