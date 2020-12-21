import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TwitterserviceService {
  api_url = 'https://localhost:3000';

  constructor(private http: HttpClient) { }

    getTimeline() {
    return this.http
      .get<any[]>(this.api_url+'/home_timeline')
      .pipe(map(data => data));

  }

  getMentions() {
    return this.http
      .get<any[]>(this.api_url+'/mentions_timeline')
      .pipe(map(data => data));

  }
}
