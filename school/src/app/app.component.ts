import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1 [ngClass]="titleStyles">Welcome to {{title}}!</h1>
             <h4 [ngClass]="titleStyles">{{School.home}}</h4>

             <img [ngStyle]=logoStyles [src]="School.logo">

             <button [ngStyle]="buttonStyles" [disabled]="buttonStatus">Go>></button>
             <br>
             <a routerLink="/member">Members |</a>
             <a routerLink="/student">Student |</a>
             <a routerLink="/course">Courses |</a>

             <router-outlet></router-outlet>
           
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ABC School';

  titleStyles={
    'color-title':true,
    'align-title':true
  };

  // logo='http://is2.mzstatic.com/image/pf/us/r30/Purple/18/ff/4e/mzi.bmabwlcp.png';
  logoStyles={
    'width':'200px',
    'height':'200px',
    'padding-left':'600px',
    'padding-right':'100px'
  };

  buttonStatus=false;
  buttonStyles={

    'color':'blue',
    'font-size':'1em'

  };

  School={

    name:'ABC School',
    home:'USA',
    logo:'http://is2.mzstatic.com/image/pf/us/r30/Purple/18/ff/4e/mzi.bmabwlcp.png'

  }
}
// <app-member></app-member>
// <app-course></app-course>
// <app-student></app-student>