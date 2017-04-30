import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AboutComponent} from './about.component';
import {FavoriteComponent} from './fav.component';

@Component({
    selector: 'my-app',
    template: `
    <i class="glyphicon glyphicon-star"></i>
    <favorite [isFavorite]="post.isFavorite" (chang)="onFavoriteChang($event)"></favorite>
    `,
    directives: [CoursesComponent, AboutComponent, FavoriteComponent]
})
export class AppComponent { 
	post = {
		title: 'Title',
		isFavorite: true
	}

	onFavoriteChang($event){
		console.log($event)
	}
}