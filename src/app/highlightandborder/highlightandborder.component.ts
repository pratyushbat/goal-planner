import { Component } from '@angular/core';
import { HighlightDirective } from '../directive/highligh.directive';
import { BorderDirective } from '../directive/border.directive';

@Component({
  selector: 'app-highlightandborder',
  template: `
    <p>My first component with border and highlight</p>
  `,
  styles: [
    `
    :host {
      cursor: pointer;
      display: block;
      padding: 16px;
      width: 500px;
    }
  `],
   hostDirectives: [HighlightDirective, BorderDirective],

})
export class HighlightandborderComponent {
  constructor(
    public highlight: HighlightDirective,
    public border: BorderDirective
  ) {}

  ngOnInit(): void {
    this.highlight.color = 'lightcoral';
    this.border.color = 'red';
  }
}
