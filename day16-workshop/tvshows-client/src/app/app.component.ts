import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TVShow } from './models';
import { TVShowService } from './tvshow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tvShows: TVShow[] = [];

  constructor(private tvSvc: TVShowService) { }

  search(form: NgForm) {
    this.tvSvc.findTvShowsBySummary(form.value['searchTerm'])
      .then(result => {
        this.tvShows = result;
        console.info('> result: ', result);
      })
      .catch(error => alert('Error' + JSON.stringify(error)))
      .finally(() => form.resetForm());
  }
}
