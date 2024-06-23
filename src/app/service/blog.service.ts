import { Injectable } from '@angular/core';
import { POSTS } from '../data/blog';
import { TipoPost } from '../models/tipiBlog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  listaPreferiti : TipoPost[] = [];

  constructor() { }

  getPost(){
    return POSTS as TipoPost[];
  };

  getPostPreferito(postPr : TipoPost){
    if(!this.listaPreferiti.find( p => p.id == postPr.id)){
      this.listaPreferiti.push(postPr)
      console.log(this.listaPreferiti)
    }
  }

  getRimuoviPreferito(numPreferito : number){
    let postSelezionato = this.listaPreferiti.find(p => p.id == numPreferito)

    if(postSelezionato){
      const index = this.listaPreferiti.indexOf(postSelezionato);
      this.listaPreferiti.splice(index, 1);
    }
  }

}
