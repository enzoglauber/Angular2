import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {
    private backgroundColor: string;
    @HostListener('mouseenter') onMouseOver() {
        // this._renderer.setStyle( this._elementeRef.nativeElement, 'background-color', 'red');
        this.backgroundColor = 'red';
    }
    @HostListener('mouseleave') onMouseOut() {
        // this._renderer.setStyle(this._elementeRef.nativeElement,'background-color', '' );
        this.backgroundColor = '';
    }
    // @HostBinding('style.backgroundColor') backgroundColor:string;
    @HostBinding('style.backgroundColor') get setColor() {
        return this.backgroundColor;
    }
    constructor(
        private _elementeRef: ElementRef,
        private _renderer: Renderer2,
    ) { }
}
