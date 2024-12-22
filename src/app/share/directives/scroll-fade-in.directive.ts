import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appScrollFadeIn]',
})
export class ScrollFadeInDirective {
  @HostBinding('@fadeIn') fadeInState = 'hidden';

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();

    const viewHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= viewHeight) {
      console.log(rect);
      this.fadeInState = 'visible';
    }
  }
}
