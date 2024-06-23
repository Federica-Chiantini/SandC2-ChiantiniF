import { Component} from '@angular/core';
import { TipoPost } from '../../models/tipiBlog';
import { BlogService } from '../../service/blog.service';
import { POSTS } from '../../data/blog';

@Component({
  selector: 'app-gruppo-posts',
  templateUrl: './gruppo-posts.component.html',
  styleUrl: './gruppo-posts.component.css'
})
export class GruppoPostsComponent{
  listaPosts : TipoPost [] = [];

  constructor(public servizio : BlogService){
      this.listaPosts = this.servizio.getPost();
  }

  getListaPost(){
    if(this.listaPosts.length != 0){
      this.listaPosts = this.servizio.getPost();
    }
  }

}
