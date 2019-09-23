import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})
export class ArticlesOnlineService {

  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getAll()
  {
    return this.http.get(this.url);
  }

  getOne(id)
  {
    return this.http.get(`${this.url}/${id}`);
  }
}
