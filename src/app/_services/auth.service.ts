import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://api.qal.travelplanet.click/auth/v1/click';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(site_id: "string", user_id: string, password: string): Observable<any> {
    return this.http.post(AUTH_API, {
      site_id,
      user_id,
      password
    }, httpOptions);
  }

  register(site_id: "string", user_id: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + '/signup', {
      site_id,
      user_id,
      password
    }, httpOptions);
  }
}