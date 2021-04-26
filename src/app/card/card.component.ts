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

  /**
   * This method triggers on click event of the details button.
   */
  loadDetails() {
      this.getMovieDetails();
  }

  /**
   * This method is used to hide the content from the card UI element.
   */
  revertDetails(){
    //Setting summary to false as no need to show on load.
      this.movie.Summary = false;
  }  

  /**
   * Getting movie details from the service and map it to the movieDetilas object.
   */
  getMovieDetails(){
    
    this.movieService.getMovieDetails(this.movie.imdbID).subscribe(
      response => {
        this.movieDetails = response;
        this.movie.Summary = true;});     
  } 

}