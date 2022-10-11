import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { TvSeriesComponent } from './tv-series/tv-series.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv-shows', component: TvSeriesComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'search', component: SearchResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
