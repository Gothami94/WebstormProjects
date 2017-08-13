import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor() { }

  title='Members';
  memberArr=['Gothami','Hashan','Shashika','Madusanka'];

  ngOnInit() {
  }

}
