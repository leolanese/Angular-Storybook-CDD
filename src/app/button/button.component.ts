import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button
    type="button"
    [disabled]="disabled"
    (click)="onClick()"
    >
    {{ label }}
  </button>

  <div class="card" [ngClass]="{
                        activeClass: conditionToBeActive,
                        inactiveClass: !conditionToBeActive}">
    {{ conditionToBeActive }}
  </div>

  <div class="alert alert-{{ type }}" role="alert">
    {{ message }}
  </div>

  <button type="button" name="button" label="Log in">Show Label</button>
  <input type="text" name="input" [(ngModel)]="label">
  `,
  styles: `
      .activeClass {
        background-color: green;
      }
      .inactiveClass {
        background-color: red;
      }
  `
})

export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() disabled: boolean = true;
  @Input() colorStyle: string = 'inactiveClass';

  @Output() clicked = new EventEmitter<void>();

  conditionToBeActive: boolean = true;

  onClick() {
    this.conditionToBeActive = !this.conditionToBeActive;

    if (!this.disabled) {
      this.clicked.emit();
    }
  }

}

