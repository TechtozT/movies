import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: any = {};
  _movieSimilar: any[] = [];
  movieSimilar: any[] = [];
  credits: any = {};
  apiKey = 'fdb18e80433a576b90bbd683a60dec10';
  id: any;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      this.fetchMovie();
      this.fetchMovieCredit();
    });

    this.fetchMovie();
    this.fetchMovieCredit();
  }

  fetchMovie() {
    this.movieService.fetchMovieDetails(this.id, 'movie').subscribe({
      next: (res) => {
        this.movie = res;
        this.fetchMovieSimilar(this.movie.id);
      },
      error: (e) => console.log(e),
    });
  }

  fetchMovieCredit() {
    this.movieService.fetchMovieCredits(this.id, 'movie').subscribe({
      next: (res) => {
        this.credits = res;
      },
      error: (e) => console.log(e),
    });
  }

  fetchMovieSimilar(id: string, type = 'movie') {
    this.movieService.fetchMovieSimilar(id, type).subscribe({
      next: (res) => {
        this._movieSimilar = res;
        this.movieSimilar = res.results.slice(0, 4);
      },
      error: (e) => console.log(e),
    });
  }

  getMovieImagePath(path: string, size = 'original') {
    return `https://image.tmdb.org/t/p/${size}${path}`;
  }

  getPersonImagePath(id: number) {
    return `https://api.themoviedb.org/3/person/${id}/images?api_key=${this.apiKey}`;
  }

  formatRunTime(time: number) {
    const hours = Math.floor(time / 60);
    const mins = time % 60;

    return `${hours}h ${mins}m`;
  }

  getCredit(job = 'Director', type = 'crew') {
    let res;

    if (type === 'cast') {
      res = this.credits[type].filter((c: any) => c.order < 4);
    } else {
      res = this.credits[type].filter((c: any) => c.job === job);
    }
    return res;
  }

  getVoteCount(val: number) {
    if (val >= 1000) {
      return `${Math.floor(val / 1000)}.${Math.round((val % 1000) / 100)}k`;
    } else {
      return val;
    }
  }
}
