import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PostNavHeaderComponent } from '../post-nav-header/post-nav-header.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, PostNavHeaderComponent],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  constructor(private title: Title, private metaTag: Meta) {
    this.title.setTitle("Qui suis-je");
    this.metaTag.updateTag({ name: "description", content: "mon CV" })
  }
}
