import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  movieSearch: string;
  movies$: Observable<Array<Movie>>;
  initialLoading: boolean;
  noDataFound : boolean;

  constructor(private readonly movieService: MovieService) {
    this.initialLoading = true;
   }

  getMovies() {
    if(this.movieSearch){
    this.movies$ = this.movieService.getMovie(this.movieSearch);
    this.movies$.subscribe(results => {
    this.noDataFound = (!results) ? true : false;
      });
    this.initialLoading =false;
    }
  }
}
