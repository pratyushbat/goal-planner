import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardActionsComponent } from '../card-actions/card-actions.component';
import { CardContentComponent } from '../card-content/card-content.component';
import { CardTitleComponent } from '../card-title/card-title.component';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'corp-root',
  standalone: true,
  imports: [CommonModule, ButtonComponent,
    CardComponent,
    CardTitleComponent,
    CardContentComponent,
    CardActionsComponent],

  template: `
      <corp-card>
  <corp-card-title>Introduction to Angular</corp-card-title>
  <corp-card-content>
    Angular is a component-based framework for building scalable web applications.
  </corp-card-content>
  <corp-card-actions>
    <corp-button>View</corp-button>
  </corp-card-actions>
</corp-card>

<corp-card>
  <corp-card-title>Introduction to TypeScript</corp-card-title>
  <corp-card-content>
    TypeScript is a strongly typed programming language that builds on JavaScript, providing better tooling at any scale.
  </corp-card-content>
  <corp-card-actions>
    <corp-button>View</corp-button>
  </corp-card-actions>
</corp-card>
  `,
  styleUrls: ['./root.component.scss'],
})
export class RootComponent {

}
