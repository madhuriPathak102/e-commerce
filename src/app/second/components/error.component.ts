import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styles: [
  ]
})
export class ErrorComponent {
  @Output() reload = new EventEmitter();

  @Input() errorTitle: any;

}
