import { Component, OnInit } from '@angular/core';
import { BGGService } from './bgg.service';
import { Boardgame } from './models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games: Boardgame[] = [];

  constructor(private bggSvc: BGGService) { }

  ngOnInit() {
    console.log(this.bggSvc);
    this.bggSvc.getBoardgames()
      .then(result => {
        console.info(result);
        this.games = result;
      })
  }

  viewComments(commentUrl) {
    console.info('>> comments: ', commentUrl);
  }
}
