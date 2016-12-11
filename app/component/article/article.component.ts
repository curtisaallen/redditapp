import { Component } from '@angular/core';
import {Article} from '../../article';

@Component({
    moduleId: module.id,
    selector: 'reddit-article',
    inputs: ['article'],
    host: {
        class: 'row'
    },
    templateUrl: 'article.component.html'
})
export class ArticleComponent {
    public article: Article;

    voteUp(): boolean {
        this.article.voteUp();
        return false;
    }
    voteDown(): boolean {
        this.article.voteDown();
        return false;
    }
}