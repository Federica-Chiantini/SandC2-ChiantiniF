import { Injectable } from '@angular/core';
import { POSTCATEGORIES, POSTS } from '../data/blog';
import { TipoPost, TipoPostCateg } from '../models/tipiBlog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  listaPreferiti : TipoPost[] = [];
  FiltroSelezionato : string = "";
  listaPostsFiltrati : TipoPost [] = [];

  constructor() { }

  getPost(){
    return POSTS as TipoPost[];
  };

  getCategorie(){
    return POSTCATEGORIES as TipoPostCateg[];
  };

  getPostPreferito(postPr : TipoPost){
    if(!this.listaPreferiti.find( p => p.id == postPr.id)){
      this.listaPreferiti.push(postPr)
    }
  }

  getRimuoviPreferito(numPreferito : number){
    let postSelezionato = this.listaPreferiti.find(p => p.id == numPreferito)

    if(postSelezionato){
      const index = this.listaPreferiti.indexOf(postSelezionato);
      this.listaPreferiti.splice(index, 1);
    }
  }

  getPostFiltrati(catSelezionata : TipoPostCateg){
      this.FiltroSelezionato = catSelezionata.id
      this.listaPostsFiltrati = POSTS.filter(f => f.category == this.FiltroSelezionato)
  }

  getTuttiPost(post : string){
    this.FiltroSelezionato = post
    this.listaPostsFiltrati = POSTS
  }

}
