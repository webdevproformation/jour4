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

  create(ressource)
  {
    return this.http.post(this.url,ressource) ;
  }

  // update

  update(ressource)
  {
    return this.http.put(`${this.url}/${ressource.id}`,ressource) ;
  }

  // delete

  delete(id)
  {
    return this.http.delete(`${this.url}/${id}`);
  }

}
