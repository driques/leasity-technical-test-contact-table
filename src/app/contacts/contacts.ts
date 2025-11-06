import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar';
import { Contact } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';
import { catchError } from 'rxjs';
import { LucideAngularModule, PencilIcon } from 'lucide-angular';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, SidebarComponent, LucideAngularModule],
  templateUrl: './contacts.html',
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  selectedContact: Contact | null = null;
  sidebarOpen = false;
  isLoading = false;
  readonly PencilIcon = PencilIcon;

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.fetchContacts();
  }

  fetchContacts() {
    this.isLoading = true;
    this.contactsService.getContacts()
      .pipe(
        catchError(err => {
          console.error('Error fetching contacts:', err);
          this.isLoading = false;
          return [];
        })
      )
      .subscribe(data => {
        this.contacts = data;
        this.isLoading = false;
      });
  }

  openSidebar(contact: Contact) {
    this.selectedContact = { ...contact };
    this.sidebarOpen = true;
  }

  closeSidebar() {
    this.sidebarOpen = false;
    this.selectedContact = null;
  }

  saveContact(contact: Contact) {
    if (!contact) return;
    const index = this.contacts.findIndex(c => c.id === contact.id);
    this.contacts[index] = contact;
    this.closeSidebar();
  }
}
