import { Injectable } from '@angular/core';
import { BLOGTipo, POST, POSTCATEGORY } from '../models/tipiBlog';
import { BLOG } from '../data/blog';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  tuttiIposts : BLOGTipo = BLOG
  selectedCategory ?: POSTCATEGORY 

  preferiti : POST[] = []

  constructor() { }

  GetSoloIposts(){
    this.selectedCategory = undefined
    return this.tuttiIposts.posts
  }

  GetSoloLeCategorie(){
    return this.tuttiIposts.postCategories
  }

  GetPreferito(post : POST){
    let p = this.preferiti.find(x => x.id == post.id);

    if (!p) {
      this.preferiti.push(post);
    }
}

GetCancellaPreferito(post : POST){
  let e = this.preferiti.find( p => p.id == post.id)
  
  if(e){
    this.preferiti.splice(this.preferiti.indexOf(e), 1)
  }
}

getSvuotaPreferiti(){
  this.preferiti = []
}

getFiltro(cat : POSTCATEGORY) {
    this.selectedCategory = cat;
    return this.tuttiIposts.posts.filter(x => x.category == this.selectedCategory!.id);
}

}
