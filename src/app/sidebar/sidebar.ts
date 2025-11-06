import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../models/contact.model';
import { InputFieldComponent } from '../shared/components/input-field/input-field';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, InputFieldComponent],
  templateUrl: './sidebar.html',
})
export class SidebarComponent {
  @Input() contact: Contact | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Contact>();

  onClose() {
    this.close.emit();
  }

  onSave() {
    if (this.contact) {
      console.log('Saving contact:', this.contact);
      this.save.emit(this.contact);
      window.alert('Contacto guardado exitosamente.');
      this.onClose();
    }
  }

  onValueChange(field: keyof Contact, value: string) {
    if (this.contact) {
      // @ts-ignore
      this.contact[field] = value;
    }
  }

}
