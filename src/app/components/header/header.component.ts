import { Component } from '@angular/core';
import { TipoPostCateg } from '../../models/tipiBlog';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  listaCategorie : TipoPostCateg [] = []
constructor(private listaCat : BlogService){
  this.listaCategorie = listaCat.getCategorie();
}
}
