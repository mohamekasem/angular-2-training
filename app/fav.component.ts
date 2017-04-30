import {Component, Input, EventEmitter, Output} from 'angular2/core';

@Component({
	selector: 'favorite',
	templateUrl: 'app/favorite.template.html',
	styles: [`
	.glyphicon-star {
		color: orange;
	}
	`]
})
export class FavoriteComponent{
	@Input()isFavorite = false;

	@Output() chang = new EventEmitter();
	onClick(){
		this.isFavorite = !this.isFavorite;
		this.chang.emit({newValue: this.isFavorite});
	}
}