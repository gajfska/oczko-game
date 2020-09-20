import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export const showAnimation = trigger('showCard', [
    state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    transition('void => *', [
        animate(1000, keyframes([
            style({
                transform: 'translateX(-100px)',
                opacity: 0,
                offset: 0
            }),
            style({
                transform: 'translateX(-75px)',
                opacity: 0.25,
                offset: 0.3
            }),
            style({
                transform: 'translateX(-50px)',
                opacity: 0.6,
                offset: 0.5
            }),
            style({
                transform: 'translateX(-25px)',
                opacity: 1,
                offset: 0.8
            }),
            style({
                transform: 'translateX(0px)',
                opacity: 1,
                offset: 1
            })
        ]))
    ])
]);

export const popupAnimation = trigger('popOverState', [
    state('show', style({
        opacity: 1
    })),
    // state('hide',   style({
    //     opacity: 0
    // })),
    // transition('show => hide', animate('600ms ease-out')),
    transition('* => show', animate('1000ms ease-in'))
]);


