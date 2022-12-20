import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildrenOutletContexts } from '@angular/router';
import { fader } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fader],
  providers: [BrowserAnimationsModule]
})
export class AppComponent {
  title = 'angular-universal-portfolio';

  constructor(private contexts: ChildrenOutletContexts, private metaTag: Meta) {
    this.metaTag.addTags([
      { name: "robots", content: 'index, follow' },
      { name: "author", content: 'Léo Buhot' },
      { name: "date", content: "2022-12-15", scheme: "YYYY-MM-DD" },
      { name: "keywords", content: 'Léo Buhot Portfolio' },
      { charset: "UTF-8" }
    ]);
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
