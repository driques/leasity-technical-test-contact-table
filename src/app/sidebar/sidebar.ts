import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../models/contact.model';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sidebar.html',
})
export class SidebarComponent implements OnInit {
  @Input() contact: Contact | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Contact>();

  contactForm!: FormGroup;

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact?.name || '', Validators.required),
      email: new FormControl(this.contact?.email || '', [Validators.required, Validators.email]),
      rut: new FormControl(this.contact?.rut || '', Validators.required),
    });
  }

  onClose() {
    this.close.emit();
  }

  onSave() {
    if (this.contactForm.valid && this.contact) {
      const updatedContact: Contact = {
        ...this.contact,
        ...this.contactForm.value,
      };
      console.log('Saving contact:', updatedContact);
      this.save.emit(updatedContact);
      this.onClose();
    }
  }
}
