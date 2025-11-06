import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.html',
  standalone: true
})
export class InputFieldComponent {
  @Input() label?: string;
  @Input() type: string = 'text';
  @Input() value?: string;
  @Input() placeholder?: string;
  @Input() disabled: boolean = false;

  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
