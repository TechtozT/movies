import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = 'fdb18e80433a576b90bbd683a60dec10';
  constructor(private http: HttpClient) {}

  fetchMovieDetails(id: string, type = 'movie') {
    const url = `${this.baseUrl}/${type}/${id}?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  fetchMovieCredits(id: string, type = 'movie') {
    const url = `${this.baseUrl}/${type}/${id}/credits?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  fetchMovieSimilar(id: string, type = 'movie') {
    const url = `${this.baseUrl}/${type}/${id}/similar?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  fetchTrendingMovies(mediaType = 'movie', timeWindow = 'week') {
    const url = `${this.baseUrl}/trending/${mediaType}/${timeWindow}?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  fetchTopRatedMovies() {
    const url = `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  fetchLatest(type = 'movie') {
    const url = `${this.baseUrl}/${type}/latest?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  fetchUpcoming() {
    const url = `${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  fetchPopular() {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  discoverMovies(type = 'movie') {
    const url = `${this.baseUrl}/discover/${type}?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  searchMovies(query: string, type = 'movie') {
    const url = `${this.baseUrl}/search/${type}?api_key=${this.apiKey}&query=${query}`
    return this.http.get<any>(url);
  }
}
