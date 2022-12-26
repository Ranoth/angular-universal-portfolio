import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

const optional = { optional: true };

export const fadeInOut = trigger('routeAnimations', [
    transition('undef => *', []),
    transition('* => undef', []),
    transition('* <=> *', [
        style({ position: 'relative', height: '100%' }),
        query(':enter, :leave', style({
            opacity: 0
        }), optional),
        query(':leave', [
            style({ opacity: 1, position: 'absolute', left: 0, top: 0 , width: '100%' }),
            animate('150ms ease-out', style({ opacity: 0 })),
        ], optional),
        query(':enter', [
            style({ opacity: 0}),
            animate('150ms ease-in', style({ opacity: 1 }))
        ], optional),
    ])
])