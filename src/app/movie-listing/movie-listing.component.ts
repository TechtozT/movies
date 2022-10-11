import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.css']
})
export class MovieListingComponent implements OnInit {

  @Input()
  title: string = ''

  @Input()
  viewMoreRoute: string = '#'

  @Input()
  items: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  getMovieImagePath(path: string, size = 'original') {
    return `https://image.tmdb.org/t/p/${size}/${path}`;
  }

}
