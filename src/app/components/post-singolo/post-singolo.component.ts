import { Component, Input } from '@angular/core';
import { TipoPost } from '../../models/tipiBlog';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-post-singolo',
  templateUrl: './post-singolo.component.html',
  styleUrl: './post-singolo.component.css'
})
export class PostSingoloComponent {
  @Input()
  postSingolo ? : TipoPost;

  constructor(private postServizio : BlogService) {
    
  }

  getPreferito(){
    this.postServizio.getPostPreferito(this.postSingolo!)
    console.log(this)
  }
}
