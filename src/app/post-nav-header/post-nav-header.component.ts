import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-nav-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-nav-header.component.html',
  styleUrls: ['./post-nav-header.component.css']
})
export class PostNavHeaderComponent {
  @Input() public headerText: string | undefined;
  @Input() public headerIcon: string | undefined;
  @Input() public invertion: string | undefined;

}
