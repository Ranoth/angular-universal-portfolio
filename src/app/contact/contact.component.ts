import { Component } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
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
