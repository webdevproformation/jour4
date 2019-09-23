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
      {id : 5, titre: "un titre", contenu : "lorem" , img : "https://via.placeholder.com/400x200"},
      {id : 6, titre: "un titre", contenu : "lorem" , img : "https://via.placeholder.com/400x200"},
      {id : 7, titre: "un titre", contenu : "lorem" , img : "https://via.placeholder.com/400x200"},
      {id : 8, titre: "un titre", contenu : "lorem" , img : "https://via.placeholder.com/400x200"},
      {id : 9, titre: "un titre", contenu : "lorem" , img : "https://via.placeholder.com/400x200"},
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

  getFromTo(numPage ?: number , nbArticleParPage ?: number)
  {
    let vraiNumeroPage :number = numPage || 0 ;
    const vraiNbArticleParPage :number = nbArticleParPage || 2 ;
  
    return this.getAll().slice( 
        vraiNumeroPage * vraiNbArticleParPage, 
        vraiNumeroPage * vraiNbArticleParPage + vraiNbArticleParPage 
    );
   
  }
}
