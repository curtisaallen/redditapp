import { Component } from '@angular/core';
import {ArticleComponent} from './article/article.component';
import {Article} from '../article';
@Component({
    moduleId: module.id,
    selector: 'reddit',
    directives: [ArticleComponent],
    templateUrl: 'reddit.component.html'
})
export class RedditComponent {
    articles: Article[];
    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fullstack', 'http://fullstack.io', 2),
            new Article('Angular Homepage', 'http://angular.io', 1),
        ];
    }
    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        this.articles.push(new Article(title.value, link.value, 0));
        title.value = '';
        link.value = '';
        return false;
    }
    sortedArticles(): Article[] {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}