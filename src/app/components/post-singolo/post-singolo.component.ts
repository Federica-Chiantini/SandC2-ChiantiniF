import { Component, Input } from '@angular/core';
import { POST } from '../../models/tipiBlog';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-post-singolo',
  templateUrl: './post-singolo.component.html',
  styleUrl: './post-singolo.component.css'
})
export class PostSingoloComponent {
  @Input()
  post ? : POST

  constructor(public bs : BlogService){}
}
