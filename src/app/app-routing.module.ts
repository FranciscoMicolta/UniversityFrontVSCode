import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCreateComponent } from './component/course-create/course-create.component';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { CourseDetailComponent } from './component/course-detail/course-detail.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { DepartmentCreateComponent } from './component/department-create/department-create.component';
import { DepartmentDeleteComponent } from './component/department-delete/department-delete.component';
import { DepartmentDetailComponent } from './component/department-detail/department-detail.component';
import { DepartmentEditComponent } from './component/department-edit/department-edit.component';
import { DepartmentListComponent } from './component/department-list/department-list.component';
import { InstructorCreateComponent } from './component/instructor-create/instructor-create.component';
import { InstructorDeleteComponent } from './component/instructor-delete/instructor-delete.component';
import { InstructorDetailComponent } from './component/instructor-detail/instructor-detail.component';
import { InstructorEditComponent } from './component/instructor-edit/instructor-edit.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { OfficeInstructorListComponent } from './component/office-instructor-list/office-instructor-list.component';
import { StudentCoursesListComponent } from './component/student-courses-list/student-courses-list.component';
import { StudentCreateComponent } from './component/student-create/student-create.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { StudentDetailComponent } from './component/student-detail/student-detail.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentListComponent } from './component/student-list/student-list.component';

const routes: Routes = [
  {path: 'student-list', component: StudentListComponent},
  {path: 'student-detail/:id', component: StudentDetailComponent},
  {path: 'student-create', component: StudentCreateComponent},
  {path: 'student-edit/:id', component: StudentEditComponent},
  {path: 'student-delete/:id', component: StudentDeleteComponent},
  {path: 'student-courses-list/:id', component: StudentCoursesListComponent},

  {path: 'course-list', component: CourseListComponent},
  {path: 'course-detail/:id', component: CourseDetailComponent},
  {path: 'course-create', component: CourseCreateComponent},
  {path: 'course-edit/:id', component: CourseEditComponent},
  {path: 'course-delete/:id', component: CourseDeleteComponent},

  {path: 'instructor-list', component: InstructorListComponent},
  {path: 'instructor-detail/:id', component: InstructorDetailComponent},
  {path: 'instructor-create', component: InstructorCreateComponent},
  {path: 'instructor-edit/:id', component: InstructorEditComponent},
  {path: 'instructor-delete/:id', component: InstructorDeleteComponent},
  
  {path: 'department-list', component: DepartmentListComponent},
  {path: 'department-detail/:id', component: DepartmentDetailComponent},
  {path: 'department-create', component: DepartmentCreateComponent},
  {path: 'department-edit/:id', component: DepartmentEditComponent},
  {path: 'department-delete/:id', component: DepartmentDeleteComponent},
  {path: 'office-instructor-list/:id', component: OfficeInstructorListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
