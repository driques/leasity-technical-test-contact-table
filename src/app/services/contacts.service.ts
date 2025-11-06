import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private apiUrl = environment.mockForUserLeasity + '/users';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }
  saveContact(contact: Contact): Observable<Contact> {
    if (contact.id) {
      return this.http.put<Contact>(`${this.apiUrl}/${contact.id}`, contact);
    } else {
      return this.http.post<Contact>(this.apiUrl, contact);
    }
  }
}
