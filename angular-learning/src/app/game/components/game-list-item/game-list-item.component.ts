import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GamesComponent } from '../../containers/games/games.component';
import { GameModule } from '../../game.module';

@Component({
  selector: 'val-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.scss']
})
export class GameListItemComponent{

  @Input() game: any;
  @Output() onGameClicked: EventEmitter<GamesComponent> = new EventEmitter<GamesComponent>();
  selectGame(game: any): void{
    this.onGameClicked.emit(game);
    this.router.navigate(['./games',game.id,'details']);
  }

  constructor(private router: Router){}

}
