import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
    private backgroundColor: string;
    @Input() default: string;
    @Input('appHighlight') highlight: string;
    @HostListener('mouseenter') onMouseOver() {
        this.backgroundColor = this.highlight;
    }
    @HostListener('mouseleave') onMouseOut() {
        this.backgroundColor = this.default;
    }
    @HostBinding('style.backgroundColor') get setColor() {
        return this.backgroundColor;
    }
    constructor(
    ) {
        this.default = '';
        this.highlight = 'green';
    }
    ngOnInit() {
        this.backgroundColor = this.default;
    }
}


