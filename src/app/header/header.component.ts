import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbModule],
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
