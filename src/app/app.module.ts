import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GruppoPostsComponent } from './components/gruppo-posts/gruppo-posts.component';
import { PostSingoloComponent } from './components/post-singolo/post-singolo.component';
import { HeaderComponent } from './components/header/header.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component';
import { FiltroPostsComponent } from './components/filtro-posts/filtro-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    GruppoPostsComponent,
    PostSingoloComponent,
    HeaderComponent,
    PreferitiComponent,
    FiltroPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
