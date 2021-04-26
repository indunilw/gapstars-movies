import { Component, Input } from '@angular/core';
import { Movie, MovieDetail } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() movie: Movie;
  private movieDetails : MovieDetail;

    
  constructor(private readonly movieService: MovieService) {
  }

  loadDetails() {
      this.getMovieDetails();
  }

  revertDetails(){
      this.movie.Summary = false;
  }  

  getMovieDetails(){
    this.movieService.getMovieDetails(this.movie.imdbID).subscribe(
      response => {
        this.movieDetails = response;
        this.movie.Summary = true;});     
  } 

}