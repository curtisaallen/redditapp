import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { RedditComponent } from './component/reddit.component';
import { ArticleComponent } from './component/article/article.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, RedditComponent, ArticleComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }