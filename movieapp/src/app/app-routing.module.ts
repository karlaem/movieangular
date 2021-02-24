import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const routes: Routes = [
{
  path: '',
  component: SearchMovieComponent,
},
{
  path: 'detail/:id',
  component: MovieDetailComponent
},
{
  path: '**', component: FourOhFourComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
