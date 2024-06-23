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
    return POSTS as unknown as TipoPost[];
  };

  getPostPreferito(postPr : TipoPost){
    this.listaPreferiti.push(postPr)
    console.log(this.listaPreferiti)
  }
}
