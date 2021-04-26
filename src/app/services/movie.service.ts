import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';

import { Movie, MovieDetail } from '../models/movie.model';

@Injectable()
export class MovieService {

  private readonly API_KEY = `2911272e`;

  constructor(private http: HttpClient) { }

  getMovie(movieSearch: string): Observable<Array<Movie>> {
    return this.http.get(`https://omdbapi.com/?apikey=${this.API_KEY}&s=${movieSearch}`)
      .pipe(
        map((response: any) => response.Search)
      );
  }

  getMovieDetails(movieId: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(
      `https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${movieId}&plot=short`);
  }
}