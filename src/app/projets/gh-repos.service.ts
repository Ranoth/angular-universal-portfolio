import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class GhReposService {
  private userUrl: string = '';

  constructor(private http: HttpClient) {
    this.userUrl = `${environment.gitHubApiUrl}/users/${environment.username}`;
  }

  getRepos(): Observable<any> {
    return this.http.get<Repository[]>(this.userUrl + "/repos").pipe(
      map((repos: any[]) => repos.filter(repo => !repo.fork)));
  }
}
