import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  state(
    'hidden',
    style({
      opacity: 0,
      transform: 'translateY(25%)',
    })
  ),
  state(
    'visible',
    style({
      opacity: 1,
      transform: 'translateY(0)',
    })
  ),
  transition('hidden <=> visible', [animate('.6s ease-in-out')]),
]);
