import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProgressBar]'
})
export class ProgressBarDirective implements OnChanges {
  @Input('appProgressBar') percentage: number = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.percentage >= 0 && this.percentage <= 100) {
      const progressBarWidth = `${this.percentage}%`;
      this.renderer.setStyle(this.elementRef.nativeElement, 'width', progressBarWidth);
    }
  }
}
