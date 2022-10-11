import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-hero-main',
  templateUrl: './hero-main.component.html',
  styleUrls: ['./hero-main.component.css']
})
export class HeroMainComponent implements OnInit {
  latestMovie: any = {};
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.fetchTrendingMovies()
  }

  fetchTrendingMovies() {
    this.movieService.fetchTrendingMovies().subscribe({
      next: (res) => {
        this.latestMovie = res.results[0];
      },
      error: (e) => console.log(e),
    });
  }

  getMovieImagePath(path: string, size = 'original') {
    return `url(https://image.tmdb.org/t/p/${size}${path})`;
  }
}
