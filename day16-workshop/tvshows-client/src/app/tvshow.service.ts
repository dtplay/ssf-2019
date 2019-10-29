import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { TVShow } from './models';

@Injectable()
export class TVShowService {
  constructor(private http: HttpClient) { }

  findTvShowsBySummary(searchTerm: string): Promise<TVShow[]> {
    const query = new HttpParams().set('q', searchTerm);
    return (
      this.http.get<TVShow[]>('http://localhost:3000/api/tv_shows/search',
          { params: query}).toPromise()
    );
  }

}
