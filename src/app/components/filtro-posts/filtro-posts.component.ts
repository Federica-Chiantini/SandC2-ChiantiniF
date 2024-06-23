import { Component, Input } from '@angular/core';
import { TipoPostCateg } from '../../models/tipiBlog';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-filtro-posts',
  templateUrl: './filtro-posts.component.html',
  styleUrl: './filtro-posts.component.css'
})
export class FiltroPostsComponent {
  @Input()
  categoria : TipoPostCateg | undefined;

  constructor(public fs : BlogService){
  }
}
