import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../material.module';
import { GameComponent } from './game.component';
import { CommentComponent } from './comment.component';
import { BGGService } from './bgg.service';

const MODULES: Routes = [
  { path: '', component: GameComponent },
  { path: 'games', component: GameComponent },
  { path: 'comment/:gid', component: CommentComponent }
]

@NgModule({
  declarations: [GameComponent, CommentComponent],
  imports: [
    CommonModule, HttpClientModule,
    MaterialModule,
    RouterModule.forChild(MODULES)
  ],
  exports: [ RouterModule ],
  providers: [ BGGService ]
})
export class GamesModule { }
