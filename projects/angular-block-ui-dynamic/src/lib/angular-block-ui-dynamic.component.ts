import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'block-ui-dynamic',
  templateUrl: './angular-block-ui-dynamic.component.html',
  styleUrls: ['./angular-block-ui-dynamic.component.css']
})
export class AngularBlockUiDynamicComponent {
  @Input() visible: boolean;
}
