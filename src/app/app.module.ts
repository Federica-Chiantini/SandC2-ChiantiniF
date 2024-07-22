import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GruppoPostsComponent } from './components/gruppo-posts/gruppo-posts.component';
import { PostSingoloComponent } from './components/post-singolo/post-singolo.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component';

@NgModule({
  declarations: [
    AppComponent,
    GruppoPostsComponent,
    PostSingoloComponent,
    PreferitiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
