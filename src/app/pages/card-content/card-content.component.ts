import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'corp-card-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p class="corp-card-content">
      <ng-content></ng-content>
    </p>
  `,
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent {

}
