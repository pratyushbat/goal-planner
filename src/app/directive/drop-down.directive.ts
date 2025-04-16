import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[app-dropdown]'
})
export class DropDownDirective{
    @HostBinding('class.open') isOpen:boolean=false;

    @HostListener('click') toggleDropDown(){
        this.isOpen=!this.isOpen;
    }

}