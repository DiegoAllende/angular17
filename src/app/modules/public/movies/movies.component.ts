import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '@core/services/movie.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  private _movieService = inject(MovieService);

  listaMovies: any[] = [];
  frGenero = "accion";
  frPage = 1;
  frTotal = 0;

  ngOnInit(): void {
    this.getMovieCue(this.frGenero, this.frPage);
  }

  getMovieCue(genero: string, page: number) {
    this.listaMovies = [];
    this._movieService.getMovieCue(genero, page).subscribe({
      next: (resp: any) => {
        this.listaMovies = resp?.pageProps?.movies || [];
        if (this.listaMovies.length > 0) {
          this.listaMovies = this.listaMovies.map(x => {
            return {
              ...x,
              url: x.url.slug.replace("movies", 'pelicula'),
            }
          });
          this.listaMovies.sort((a, b) => b.rate.average - a.rate.average);
          this.frTotal = resp?.pageProps?.pages || 0;
        }
      }
    });
  }

  changeGenero() {
    this.frPage = 1;
    this.frTotal = 0;
    this.getMovieCue(this.frGenero, this.frPage);
  }

  changePage(isNext: boolean) {
    if (isNext) {
      this.frPage++;
    } else {
      this.frPage--;
    }

    if (this.frPage === 0) {
      this.frPage = 1;
      return;
    }

    this.getMovieCue(this.frGenero, this.frPage);
  }
}
