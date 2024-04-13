import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _http = inject(HttpClient);

  urlCue = "/_next/data/abhgRU__LH-emoup_c8Mr/es/genero/";

  getMovieCue(genero: string ,pages: number) {
    return this._http.get(`${this.urlCue}${genero}/page/${pages}.json?slug=${genero}&slug=page&slug=${pages}`);
  }
}
