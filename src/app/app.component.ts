import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-universal-portfolio';

  constructor(private metaTag: Meta) {
    this.metaTag.addTags([
      {name: "robots", content: 'index, follow'},
      {name: "author", content: 'Léo Buhot'},
      {name: "date", content: "2022-12-15", scheme: "YYYY-MM-DD"},
      {name: "keywords", content: 'Léo Buhot Portfolio'},
      {charset: "UTF-8"}
    ])
  }
}
