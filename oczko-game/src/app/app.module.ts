import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { PlayerComponent } from './game/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MainScreenComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
