import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BGGService } from './bgg.service';

import { Comment } from './models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: Comment[] = [];

  constructor(private activatedRoute: ActivatedRoute, private bggSvc: BGGService) { }

  ngOnInit() {
    this.bggSvc.getComments(this.activatedRoute.snapshot.params['gid'])
      .then(result => {
        this.comments = result;
      })
  }

}
