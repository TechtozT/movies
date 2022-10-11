import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.discoverMovies();
  }

  discoverMovies() {
    this.movieService.discoverMovies().subscribe({
      next: (res) => {
        this.movies = res.results;
      },
      error: (e) => console.log(e),
    });
  }
}
