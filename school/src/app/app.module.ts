import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { CourseComponent } from './course/course.component';

import { DataService } from './data.service';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    CourseComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([

      {
        path:'member',
        component:MemberComponent
      },
      {
        path:'student',
        component:StudentComponent
      },
      {
        path:'course',
        component:CourseComponent
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
