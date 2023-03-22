import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }

  /**
   * desc
   * @date 2023-03-22
   * @param { Contact } contact
   */
  submitContact(contact: Contact) {
    return this.http.post<Contact>(environment.formspreeApiUrl, contact).subscribe();    
  }
}
