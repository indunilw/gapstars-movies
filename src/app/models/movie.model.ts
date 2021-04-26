export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Summary: boolean;
  Error : boolean;
}


export interface Rating {
    Source: string;
    Value: string;
  }
  

  export interface MovieDetail {
    Plot: string;
    Actors: string;
    Ratings: Rating[];
  }
  