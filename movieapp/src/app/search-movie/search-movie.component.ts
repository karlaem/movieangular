import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  movies: any;
  searchkey: any;

  constructor(
    private movieAPI: MovieService,
    private route: ActivatedRoute
  ) { }

  searchMovie(){
    let searchTerm = this.searchkey; // Get that from an input control.
    this.movieAPI.getMovies(searchTerm)
    .subscribe(
      // This is our callback when the getMovies returns some data
      (data:any) =>{
        this.movies = data['Search']; // data.Search;
    })
  }
  onKeyUp(event: any, data: string) {
    console.log( `Key Up: ${event.target.value} Data: ${data}`);
    this.searchkey = event.target.value;
  }

  onKeyDown(event: any) {
    console.log( `Key Down: ${event.target.value}`);
  }

  onKeyPress(event: any) {
    console.log( `Key Press: ${event.target.value}`);
  }

  ngOnInit(): void {
  }

}
