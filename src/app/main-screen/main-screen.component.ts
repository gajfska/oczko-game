import { Component, OnInit } from '@angular/core';
import {SessionService} from '../shared/session.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  startMultiplayerGame() {
    this.sessionService.isMultiplayerGame = true;
  }

  ngOnInit(): void {
  }

}
