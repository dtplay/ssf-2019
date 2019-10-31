import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Boardgame, Comment } from './models';

@Injectable()
export class BGGService {

  constructor(private http: HttpClient) { }

  // make a call /api/games
  getBoardgames(limit = 20, offset = 0): Promise<Boardgame[]> {
    const params = new HttpParams()
      .set('limit', limit + '')
      .set('offset', offset + '');

    return (
      this.http.get<Boardgame[]>(
          'http://localhost:3000/api/games', { params })
        .toPromise()
    );
  }

  getComments(gid: number): Promise<Comment[]> {
    const commentUrl = `/api/comment/${gid}`
    return (
      this.http.get<Comment[]>(`http://localhost:3000${commentUrl}`)
        .toPromise()
    );
  }
}
