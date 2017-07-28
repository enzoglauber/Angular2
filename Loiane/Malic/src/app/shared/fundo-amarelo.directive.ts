import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    // console.log(el.nativeElement.style.backgroundColor = "yellow"); //inseguro
    console.log('renderer', this.renderer);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }
}


