import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({ 'app-id': environment.appId });

  public getPosts(): Observable<any> {
    return this.http.get('https://dummyapi.io/data/v1/post?limit=10', {
      headers: this.headers,
    });
  }

  public getPostsByUserId(userId: string): Observable<any> {
    return this.http.get(
      `https://dummyapi.io/data/v1/user/${userId}/post?limit=10`,
      {
        headers: this.headers,
      }
    );
  }
}
