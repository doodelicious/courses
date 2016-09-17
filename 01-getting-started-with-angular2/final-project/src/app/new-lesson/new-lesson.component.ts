import { Component, OnInit } from '@angular/core';
import {LessonsService} from "../lessons.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-new-lesson',
  templateUrl: './new-lesson.component.html',
  styleUrls: ['./new-lesson.component.css']
})
export class NewLessonComponent implements OnInit {

  courseId:string;

  constructor(private lessonsService: LessonsService,  route: ActivatedRoute) {

    this.courseId = route.snapshot.queryParams['courseId'];

  }

  ngOnInit() {

  }

  save(lesson) {
    console.log(lesson);
    this.lessonsService.createNewLesson(this.courseId, lesson)
      .subscribe(
        () => alert("lesson created succesfuly"),
        err => alert(`error creating lesson ${err}`)
      );

  }

}
