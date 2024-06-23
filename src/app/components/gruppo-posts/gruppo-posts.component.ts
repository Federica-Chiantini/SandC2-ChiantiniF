import { Component, OnInit } from '@angular/core';
import { TipoPost } from '../../models/tipiBlog';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-gruppo-posts',
  templateUrl: './gruppo-posts.component.html',
  styleUrl: './gruppo-posts.component.css'
})
export class GruppoPostsComponent implements OnInit {
  listaPosts : TipoPost [] = [];

  constructor(private servizio : BlogService){}

  ngOnInit(): void {
    this.listaPosts = this.servizio.getPost();
    console.log(this.listaPosts)
  }
}
