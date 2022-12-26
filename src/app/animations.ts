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
            animate('550ms ease-out', style({ opacity: 0 })),
        ], optional),
        query(':enter', [
            style({ opacity: 0}),
            animate('550ms ease-in', style({ opacity: 1 }))
        ], optional),
    ])
])

export const contactInOut = trigger('contactInOut', [
    transition(':leave', [
        style({ opacity: 1, left: 0, top: 0, position: 'absolute' }),
        animate('500ms', style({ opacity: 0 })),
    ]),
    transition(':enter', [
        style({ opacity: 0, width: '100%' }),
        animate('500ms', style({ opacity: 1 })),
    ]),
])