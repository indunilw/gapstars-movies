import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Movie, MovieDetail } from '../models/movie.model';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  /**
   * This method searches and maps the list of movies from the OMDB server.
   *
   * @param movieSearch user entered value
   * @returns Observable<Array<Movie>> type objects
   */
  getMovie(movieSearch: string): Observable<Array<Movie>> {
    return this.http.get(environment.apiendpoint +`?apikey=${environment.apikey}&s=${movieSearch}`)
      .pipe(
        map((response: any) => response.Search)
      );
  }

  /**
   * This method fetches details of a particula movie from the OMDB server.
   * @param movieId movie ID to retrieve the movie details
   * @returns Observable <Movie> object
   */
  getMovieDetails(movieId: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(
      environment.apiendpoint + `?apikey=${environment.apikey}&i=${movieId}&plot=short`);
  }
}