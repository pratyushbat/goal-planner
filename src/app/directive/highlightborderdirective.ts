import { Directive } from "@angular/core";
import { HighlightDirective } from "./highligh.directive";
import { BorderDirective } from "./border.directive";

@Directive({
    selector: '[appHighlightAndBorder]',
    // hostDirectives: [HighlightDirective, BorderDirective],
    hostDirectives: [{
        directive: HighlightDirective,
        inputs: ['color: highlightColor'],
      },
      {
        directive: BorderDirective,
        inputs: ['color: borderColor'],
      },],
    standalone: true,
  })
  export class HighlightAndBorderDirective {}
  