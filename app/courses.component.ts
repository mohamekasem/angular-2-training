import {Component} from 'angular2/core';
import {CourseService} from './courses.service';
import {AutoGrowDirective}from './auto-grow.directive'
@Component({
	selector: 'courses',
	template: `<h1>Welcome Visitors</h1>
	{{titel}}
	<input type="text" autoGrow />
	<ul>
	<li *ngFor="#service of services">
	{{service}}
	</li>
	</ul>
	`,
	providers: [CourseService],
	directives: [AutoGrowDirective]
})
export class CoursesComponent {
	titel = "We happy to hellp you";
	services;
	constructor(courseService:CourseService){
		this.services = courseService.getCourses();
	}
}