import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicGameInfosComponent } from './components/basic-game-infos/basic-game-infos.component';
import { GameListItemComponent } from './components/game-list-item/game-list-item.component';
import { GameDetailsComponent } from './containers/game-details/game-details.component';
import { GamesComponent } from './containers/games/games.component';

const routes: Routes = [
  // /games
  {path: '', component:GamesComponent, pathMatch:'full'},

  // /games/123/detailss
  {path: ':id/details', component: GameDetailsComponent},
  {path: ':id/list', component: GameListItemComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
