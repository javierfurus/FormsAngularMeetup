import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  public getPosts(): Observable<any> {
    return this.http.get('https://dummyapi.io/data/v1/user/', {
      headers: { 'app-id': environment.appId },
    });
  }
}
