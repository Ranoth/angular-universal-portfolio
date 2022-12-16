import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  links = [
    // { title: "Accueuil", fragment: "/home" },
    { title: "Qui suis-je", fragment: "/about" },
    { title: "Projets", fragment: "/projets" },
    { title: "Contact", fragment: "/contact" },
    // { title: "Veille Technologique", fragment: "/veille" },
  ];

  constructor(public route: ActivatedRoute) { }
}
