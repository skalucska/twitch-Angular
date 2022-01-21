import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'val-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  gameList = [{"id": 1, "name":"Mario", "console":"Nes"},{"id": 2, "name":"League of legend", "console":"PC"}];
 
  gameNotEmpty(): boolean{
    if(this.gameList.length > 0){
      return true;
    }else{
      return false;
    }
  }

  showDetails(game: GamesComponent) : void {
    console.log(game);
  }

}
