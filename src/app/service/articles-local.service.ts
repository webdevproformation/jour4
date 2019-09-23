import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesLocalService {

  constructor() { }

  getAll()
  {
    return [
      {id : 1, titre: "un titre", contenu : "lorem" , img : "https://via.placeholder.com/400x200"},
      {id : 2, titre: "un titre", contenu : "lorem" , img : "https://via.placeholder.com/400x200"},
      {id : 3, titre: "un titre", contenu : "lorem" , img : "https://via.placeholder.com/400x200"},
      {id : 4, titre: "un titre", contenu : "lorem" , img : "https://via.placeholder.com/400x200"},
    ]
  }


  get(id)
  {
    // rechercher un article qui a l'id n° dans le tableau this.getAll()
    // vue dans Express [].find()
    const article = this.getAll().find( (article) => {
      if( article.id == id)
      return article
    } ) ;

    if(!article ) return {} ;
    return article ;
  }
}