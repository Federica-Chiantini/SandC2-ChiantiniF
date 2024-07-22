import { Component} from '@angular/core';
import { POST, POSTCATEGORY } from '../../models/tipiBlog';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-gruppo-posts',
  templateUrl: './gruppo-posts.component.html',
  styleUrl: './gruppo-posts.component.css'
})
export class GruppoPostsComponent{
  Listaposts : POST[] = []
  vociMenu : POSTCATEGORY[] = []

constructor(public bs : BlogService){}

  ngOnInit(): void {
    this.vociMenu = this.bs.GetSoloLeCategorie()

      this.Listaposts = this.bs.GetSoloIposts()
  }

  filterCat(cat? : POSTCATEGORY){
    if (cat == undefined) {
      this.Listaposts = this.bs.GetSoloIposts();
    } else {
      this.Listaposts = this.bs.getFiltro(cat);
    }
  }
}
