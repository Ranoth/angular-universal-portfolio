import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PostNavHeaderComponent } from '../post-nav-header/post-nav-header.component';
import { Contact } from './contact';
import { ContactService } from './contact.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, PostNavHeaderComponent, FormsModule, HttpClientModule],
  providers: [ContactService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  public contactModel = new Contact();
  public submitted: boolean = false;

  constructor(private contactService: ContactService) { }

  onSubmit() {
    this.contactService.submitContact(this.contactModel);
    this.submitted = true;
  }

  onReturnClick() {
    this.contactModel = new Contact();
    this.submitted = false;
  }
}
