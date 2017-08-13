import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student',
  template: `
    <h2 style="text-align:center">{{value}}</h2>
    <img [ngStyle]=imageStyles [src]="image">
    <p>{{members}}</p>

    <a routerLink="/">Home |</a>
    <a routerLink="/member">Members |</a>
    <a routerLink="/course">Courses |</a>

    <router-outlet></router-outlet>
  
  `,
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private dataService:DataService) { }

  value:string="";
  members=[];
  image='http://az616578.vo.msecnd.net/files/2016/04/21/635968723277050082-897173380_thumbs%20up.jpg';
  imageStyles={
    'width':'400px',
    'height':'200px',
    'padding-left':'500px'
  };
  ngOnInit() {

    this.value=this.dataService.memberData();
    this.members=this.dataService.members;
  }

}
