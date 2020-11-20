import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]'
})
export class MiDirectivaDirective implements OnInit {

  constructor(
    public el: ElementRef,
    public renderer: Renderer2
  ) { }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.hover(true);
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.hover(false);
  }
  ngOnInit(): void {
  }
  hover(bandera: boolean): void{
    if (bandera) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    }
  }
}
