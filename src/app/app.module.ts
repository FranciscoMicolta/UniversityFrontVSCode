import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailComponent } from './component/student-detail/student-detail.component';
import { FormsModule } from '@angular/forms';
import { StudentService } from './service/student.service';
import { StudentCreateComponent } from './component/student-create/student-create.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { StudentCoursesListComponent } from './component/student-courses-list/student-courses-list.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { CourseDetailComponent } from './component/course-detail/course-detail.component';
import { CourseCreateComponent } from './component/course-create/course-create.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { InstructorEditComponent } from './component/instructor-edit/instructor-edit.component';
import { InstructorDetailComponent } from './component/instructor-detail/instructor-detail.component';
import { InstructorDeleteComponent } from './component/instructor-delete/instructor-delete.component';
import { InstructorCreateComponent } from './component/instructor-create/instructor-create.component';
import { DepartmentListComponent } from './component/department-list/department-list.component';
import { DepartmentEditComponent } from './component/department-edit/department-edit.component';
import { DepartmentDetailComponent } from './component/department-detail/department-detail.component';
import { DepartmentDeleteComponent } from './component/department-delete/department-delete.component';
import { DepartmentCreateComponent } from './component/department-create/department-create.component';
import { OfficeInstructorComponent } from './component/office-instructor/office-instructor.component';
import { OfficeInstructorListComponent } from './component/office-instructor-list/office-instructor-list.component'

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailComponent,
    StudentCreateComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    StudentCoursesListComponent,
    CourseListComponent,
    CourseEditComponent,
    CourseDeleteComponent,
    CourseDetailComponent,
    CourseCreateComponent,
    InstructorListComponent,
    InstructorEditComponent,
    InstructorDetailComponent,
    InstructorDeleteComponent,
    InstructorCreateComponent,
    DepartmentListComponent,
    DepartmentEditComponent,
    DepartmentDetailComponent,
    DepartmentDeleteComponent,
    DepartmentCreateComponent,
    OfficeInstructorComponent,
    OfficeInstructorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
