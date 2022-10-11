import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { SearchComponent } from './search/search.component';
import { LayoutComponent } from './layout/layout.component';
import { ServiceListComponent } from './sidebar-right/service-list/service-list.component';
import { CategoryListComponent } from './sidebar-right/category-list/category-list.component';
import { ProfileMenuComponent } from './sidebar-right/profile-menu/profile-menu.component';
import { NotificationMenuComponent } from './sidebar-right/notification-menu/notification-menu.component';
import { NavMenuComponent } from './sidebar-left/nav-menu/nav-menu.component';
import { VerticalBannerComponent } from './sidebar-left/vertical-banner/vertical-banner.component';
import { HeroMainComponent } from './hero-main/hero-main.component';
import { MovieListingComponent } from './movie-listing/movie-listing.component';
import { FiltersComponent } from './sidebar-right/filters/filters.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { TvSeriesComponent } from './tv-series/tv-series.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    SearchComponent,
    LayoutComponent,
    ServiceListComponent,
    CategoryListComponent,
    ProfileMenuComponent,
    NotificationMenuComponent,
    NavMenuComponent,
    VerticalBannerComponent,
    HeroMainComponent,
    MovieListingComponent,
    FiltersComponent,
    MovieDetailsComponent,
    MoviesComponent,
    TvSeriesComponent,
    UpcomingComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatListModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
