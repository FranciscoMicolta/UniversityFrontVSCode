import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

  public course: Course = new Course(0, '', 0);

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public courseService: CourseService,
    public router: Router) { }

  ngOnInit(): void {
  }

  public save() {
    console.log(this.course);

    if (this.course.Title.trim() === '') {
      this.showMsg = true;
      this.msg = 'The field Title is required';
      this.type = 'warning';
      return;
    }

    this.courseService.edit(this.course).subscribe(data => {
      this.router.navigate(['course-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = error;
      this.type = 'danger';
    });
  }
}
