import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { routeFadeInOut } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeFadeInOut],
  providers: [BrowserAnimationsModule]
})
export class AppComponent {
  title?: string = 'angular-universal-portfolio';

  constructor(private contexts: ChildrenOutletContexts, private metaTag: Meta) {
    this.metaTag.addTags([
      { name: "robots", content: 'index, follow' },
      { name: "date", content: "2022-12-15", scheme: "YYYY-MM-DD" },
      { name: "keywords", content: 'Léo Buhot Portfolio' },
      { charset: "UTF-8" }
    ]);
  }

  getRouteAnimationData() {
    var animationData: string = this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    if (animationData == null) return 'undef';
    return animationData;
  }
}
