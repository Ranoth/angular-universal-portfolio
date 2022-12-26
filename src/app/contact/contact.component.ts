import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PostNavHeaderComponent } from '../post-nav-header/post-nav-header.component';
import { Contact } from './contact';
import { ContactService } from './contact.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, PostNavHeaderComponent, FormsModule, HttpClientModule],
  providers: [ContactService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: []
})
export class ContactComponent {
  contactModel = new Contact();
  submitted: boolean = false;

  constructor(private contactService: ContactService, private title: Title, private metaTag: Meta) {
    this.title.setTitle("Prendre contact");
    this.metaTag.updateTag({ name: "description", content: "Formulaire de contact" })
  }

  onSubmit() {
    this.contactService.submitContact(this.contactModel);
    this.submitted = true;
  }

  onReturnClick() {
    this.contactModel = new Contact();
    this.submitted = false;
  }
}
