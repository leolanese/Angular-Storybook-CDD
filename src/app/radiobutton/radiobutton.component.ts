import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radiobutton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="radiobutton toggle-container">
      <input
        type="checkbox"
        [name]="name"
        [value]="value"
        [(ngModel)]="selectedValue"
      />
      <span class="radiobutton-circle"></span>
      {{ label }}
    </label>
    <div *ngIf="showError" class="error-message">{{ errorMessage }}</div>
  `,
  styleUrl: './radiobutton.component.scss'
})

export class RadioButtonComponent {
  @Input() label: string = 'radioButton';
  @Input() showError: boolean = false;
  @Input() errorMessage: string = 'radioButton';

  isToggled = false;
}
