import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appScrollFadeIn]',
})
export class ScrollFadeInDirective implements AfterViewInit {
  @HostBinding('@fadeIn') fadeInState = 'hidden';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.setAnimation();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.setAnimation();
  }
  private setAnimation() {
    const rect = this.el.nativeElement.getBoundingClientRect();

    const viewHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= viewHeight) {
      this.fadeInState = 'visible';
    } else if (rect.top > viewHeight) {
      this.fadeInState = 'hidden';
    }
  }
}
