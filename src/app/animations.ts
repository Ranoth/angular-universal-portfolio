import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

const optional = { optional: true };

// export const fader = trigger('routeAnimations', [
//     transition('* <=> *', [
//         style({ position: 'relative', height: '!', width: '!' }),
//         query(':enter', style({opacity: 0}), {optional: true}),
//         query(':leave', style({opacity: 1}), {optional: true}),
//         query(':enter, :leave', [
//             style({ opacity: 0, position: 'absolute', left: 0, top: 0, width:'!', height:'!' })
//         ], { optional: true }),
//         group([
//             query(':enter', [animate('600ms', style({opacity: 1, offset: 0}))], {optional: true}),
//             query(':leave', [animate('600ms', style({opacity: 0, offset: 1}))], {optional: true}),
//         ])
//     ])
// ])

export const fader = trigger('routeAnimations', [
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

// export const fader = trigger('routeAnimations', [
//     transition('* => *', [
//         style({ opacity: 0 }),           // initial styles
//         animate('500ms ease',
//             style({ opacity: 1 })          // final style after the transition has finished
//         )
//     ]),
//     transition(':leave', [
//         style({ opacity: 1 }),
//         animate('500ms ease',
//             style({ opacity: 0 })          // we asume the initial style will be always opacity: 1
//         )
//     ])
// ])

// export const fader = trigger('routeAnimations', [
//     transition('* <=> *', [
//         query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 2 }), optional),
//         group([
//             query(':enter', [
//                 style({ transform: 'translateX(100%)' }),
//                 animate('500ms ease-out', style({ transform: 'translateX(0%)' }))
//             ], optional),
//             query(':leave', [
//                 style({ transform: 'translateX(0%)' }),
//                 animate('500ms ease-out', style({ transform: 'translateX(100%)' }))
//             ], optional)
//         ])
//     ])
// ])

// export const fader =
//     trigger('routeAnimations', [
//         transition('* <=> *', [
//             style({ position: 'relative' }),
//             query(':enter, :leave', [
//                 style({
//                     position: 'absolute',
//                     left: 0,
//                     width: '100%',
//                     opacity: 0,
//                     transform: 'scale(0) translateY(100%)'
//                 })
//             ], { optional: true }),
//             query(':enter', [
//                 animate('600ms ease', style({
//                     opacity: 1, transform: 'scale(1) translateY(0)'
//                 })),
//             ], { optional: true })
//         ])
//     ]);