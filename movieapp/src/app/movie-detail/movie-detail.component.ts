import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie_detail_id: string = 'nothing';
  movie_detail: any;
  actors: any;

  constructor(
    private route:ActivatedRoute,
    private movieAPI: MovieService) {

    this.route.params.subscribe( // subscription
      params => {
        this.movie_detail_id = params['id'];
        this.getMovieDetailFromAPICall(this.movie_detail_id);
      }
    );
  }

  getMovieDetailFromAPICall(imdbID:string){
    // API CALL
    this.movieAPI.getMovieDetail(this.movie_detail_id)
    .subscribe(
      (data:any) =>{
        this.movie_detail = data;
        console.log(data);
        this.actors = data.Actors.split(',');
    })
  }

  ngOnInit(): void {
  }

}
