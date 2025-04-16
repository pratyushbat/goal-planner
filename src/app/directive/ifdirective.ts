import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[csdIf]',
})
export class IfDirective implements OnInit {
  // @Input() csdIf: boolean = false;
  private show = false;
  @Input() set csdIf(show: boolean) {
    this.show = show;
    this.displayTemplate();
  }

  @Input() csdIfElse:TemplateRef<unknown>;

  constructor(
    private templateRef: TemplateRef<unknown>,
    private vcr: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.displayTemplate();
  }
  displayTemplate() {
    this.vcr.clear();
    if (this.show) {
      this.vcr.createEmbeddedView(this.templateRef);
    }
    else if(this.csdIfElse){
        this.vcr.createEmbeddedView(this.csdIfElse);
    }
  }
}
