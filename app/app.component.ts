import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AboutComponent} from './about.component';


@Component({
    selector: 'my-app',
    template: `<h1>We Hear to help You</h1>
    <courses></courses>
<about></about>
    `,
    directives: [CoursesComponent, AboutComponent]
})
export class AppComponent { }