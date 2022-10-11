import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css'],
})
export class TvSeriesComponent implements OnInit {
  tvSeries: any[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.discoverTVSeries();
  }

  discoverTVSeries() {
    this.movieService.discoverMovies('tv').subscribe({
      next: (res) => {
        this.tvSeries = res.results;
      },
      error: (e) => console.log(e),
    });
  }
}
