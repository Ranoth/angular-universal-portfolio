import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

const optional = { optional: true };

export const fader = trigger('routeAnimations', [
    transition('undef => *', [
        style({ opacity: 1 })
    ]),
    transition('* => undef', [
        style({ opacity: 1 })
    ]),
    transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', style({
            opacity: 0,
        }), optional),
        query(':leave', [
            style({ opacity: 1 }),
            animate('299ms', style({ opacity: 0 })),
            animate('1ms', style({ position: 'absolute' }))
        ], optional),
        query(':enter', [
            style({ opacity: 0, display: 'block' }),
            animate('300ms', style({ opacity: 1 }))
        ], optional),
    ])
])