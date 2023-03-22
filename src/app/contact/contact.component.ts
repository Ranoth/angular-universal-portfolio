import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PostNavHeaderComponent } from '../post-nav-header/post-nav-header.component';
import { Contact } from './contact';
import { ContactService } from './contact.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, PostNavHeaderComponent, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [ContactService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: []
})
export class ContactComponent {
  contactModel = new Contact();
  submitted: boolean = false;

  contactForm = this.fb.group({
    nom: ['', Validators.required],
    mail: ['', [Validators.required, Validators.email]],
    sujet: ['', Validators.required],
    message: ['', Validators.required]
  });

  constructor(private contactService: ContactService, private title: Title, private metaTag: Meta, private fb: FormBuilder) {
    this.title.setTitle("Prendre contact");
    this.metaTag.updateTag({ name: "description", content: "Formulaire de contact" })
  }

  /**
   * desc
   * @date 2023-03-22
   * @returns { void }
   */
  onSubmit(): void {
    if (this.contactForm.invalid) return;
    this.contactModel = this.contactForm.value as Contact;
    this.contactService.submitContact(this.contactModel);
    this.submitted = true;
  }

  /**
   * desc
   * @date 2023-03-22
   * @returns { void }
   */
  onReturnClick(): void {
    this.contactForm.reset();
    this.contactModel = new Contact();
    this.submitted = false;
  }
}
