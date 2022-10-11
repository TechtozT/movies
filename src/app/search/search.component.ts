import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  query = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  search() {
    if (this.query.length < 1) return;
    this.router.navigateByUrl(`/search?query=${this.query}`);
  }
}
