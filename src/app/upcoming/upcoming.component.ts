import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  upcomingMovies: any = [];
  ngOnInit(): void {
    this.fetchUpcomingMovies();
  }

  fetchUpcomingMovies() {
    this.movieService.fetchUpcoming().subscribe({
      next: (res) => {
        this.upcomingMovies = res.results;
      },
      error: (e) => console.log(e),
    });
  }
}
