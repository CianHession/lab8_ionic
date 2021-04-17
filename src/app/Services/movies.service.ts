import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) { }

  getMovieData():Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?apikey=c212232d&s=%27war%27');
  }
}
