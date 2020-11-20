import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]'
})
export class MiDirectivaDirective implements OnInit {

  constructor(
    public el: ElementRef,
    public renderer: Renderer2
  ) { }

  @Input() appMiDirectiva = false;
  ngOnInit(): void {
    if (this.appMiDirectiva) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    }
  }
}
