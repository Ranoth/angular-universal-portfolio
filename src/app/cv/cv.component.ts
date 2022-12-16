import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  constructor(private title: Title, private metaTag: Meta) {
    this.title.setTitle("Qui suis-je");
    this.metaTag.updateTag({ name: "description", content: "mon CV" })
  }
}
