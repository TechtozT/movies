import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  movies: any[] = [];
  query = '';
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params['query'];
      console.log(this.query);
      
      this.searchMovies();
    });
    this.searchMovies();
  }

  searchMovies() {
    this.movieService.searchMovies(this.query).subscribe({
      next: (res) => {
        console.log(res);
        this.movies = res.results;
      },
      error: (e) => console.log(e),
    });
  }
}
