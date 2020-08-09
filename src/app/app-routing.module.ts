import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainScreenComponent} from './main-screen/main-screen.component';
import {GameComponent} from './game/game.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/mainScreen', pathMatch: 'full' },
  { path: 'mainScreen', component: MainScreenComponent},
  { path: 'game', component: GameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
