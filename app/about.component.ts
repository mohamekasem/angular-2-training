import {Component} from 'angular2/core';
import {AboutService} from './about.service'

@Component({
	selector: 'about',
	template: `<hr />
	<h2>About us</h2>
<ul>
<li *ngFor="#about of info">
{{about}}
</li>
</ul>
	`,
	providers : [AboutService]
})
export class AboutComponent{
 info : string[];

 constructor(aboutService:AboutService){
 	this.info = aboutService.getAboutUs();
 }
}