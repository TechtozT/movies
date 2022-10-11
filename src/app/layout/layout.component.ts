import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  trendingMovies: any[] = [];
  upcomingMovies: any[] = [];
  trendingTvSeries: any[] = [];
  popularMovies: any[] = [];
  topRatedMovies: any[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.fetchTrendingMovies();
    this.fetchPopularMovies();
    this.fetchTopRatedMovies();
    this.fetchUpcomingMovies();
    this.fetchTrendingTV();
  }

  fetchTrendingMovies() {
    this.movieService.fetchTrendingMovies().subscribe({
      next: (res) => {
        this.trendingMovies = res.results.splice(0, 4);
      },
      error: (e) => console.log(e),
    });
  }

  fetchTrendingTV() {
    this.movieService.fetchTrendingMovies('tv', 'week').subscribe({
      next: (res) => {
        this.trendingTvSeries = res.results.splice(0, 4);
      },
      error: (e) => console.log(e),
    });
  }

  fetchUpcomingMovies() {
    this.movieService.fetchUpcoming().subscribe({
      next: (res) => {
        this.upcomingMovies = res.results.splice(0, 4);
      },
      error: (e) => console.log(e),
    });
  }

  fetchPopularMovies() {
    this.movieService.fetchPopular().subscribe({
      next: (res) => {
        this.popularMovies = res.results.splice(0, 4);
      },
      error: (e) => console.log(e),
    });
  }

  fetchTopRatedMovies() {
    this.movieService.fetchTopRatedMovies().subscribe({
      next: (res) => {
        this.topRatedMovies = res.results.splice(0, 4);
      },
      error: (e) => console.log(e),
    });
  }
}
