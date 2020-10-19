import {
  animation,
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const loginRegisterAnimation = animation([
  trigger('entrance', [
    state(
      '1',
      style({
        opacity: 1,
        height: '*',
      })
    ),
    state(
      '0',
      style({
        opacity: 1,
        height: '314px',
      })
    ),
    transition('true <=> false', [animate('1s ease-in-out')]),
  ]),
]);
