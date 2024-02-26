import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [],
  template: `
    <div class="toggle-container">
      <input type="checkbox" id="toggle" [(ngModel)]="isToggled">
      <label for="toggle"></label>
    </div>
  `,
  styleUrl: './toggle-button.component.scss'
})
export class ToggleButtonComponent {
  isToggled = false;
  isDisabled = false;
}
