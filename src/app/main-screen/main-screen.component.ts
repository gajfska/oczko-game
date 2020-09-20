import {Component} from '@angular/core';
import {SessionService} from '../shared/session.service';

@Component({
    selector: 'app-main-screen',
    templateUrl: './main-screen.component.html',
    styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent {

    constructor(private sessionService: SessionService) {
        console.log('elelelelel')
    }

    startMultiplayerGame(): void {
        this.sessionService.isMultiplayerGame = true;
    }

}
