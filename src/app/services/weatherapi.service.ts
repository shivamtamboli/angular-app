import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weatherinterface } from '../model/weatherinterface';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  constructor(private http:HttpClient) { }

  weatherdata():Observable<Weatherinterface>
  {
    return this.http.get<Weatherinterface>(`${environment.API_URL+environment.API_KEY}`);
  }
}
