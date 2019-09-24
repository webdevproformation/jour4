import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})
export class ArticlesOnlineService {

  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  // read All
  getAll()
  {
    return this.http.get(this.url);
  }

  // read One
  getOne(id)
  {
    return this.http.get(`${this.url}/${id}`);
  }

  // create


  // update


  // delete

  delete(id)
  {
    return this.http.delete(`${this.url}/${id}`);
  }

}