import { Component, OnInit } from '@angular/core';
import { BGGService } from './bgg.service';
import { Boardgame } from './models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games: Boardgame[] = [];

  constructor(private bggSvc: BGGService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.bggSvc);
    this.bggSvc.getBoardgames()
      .then(result => {
        console.info(result);
        this.games = result;
      })
  }

  viewComments(gid: number) {
    this.router.navigate(['comment', gid], { relativeTo: this.activatedRoute });
  }
}
