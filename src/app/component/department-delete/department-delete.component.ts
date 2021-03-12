import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/domain/department';
import { Instructor } from 'src/app/domain/instructor';
import { DepartmentService } from 'src/app/service/department.service';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.css']
})
export class DepartmentDeleteComponent implements OnInit {

  public id: number = 0;
  public department!: Department;
  public departments: Department = new Department(0, '', 0, new Date(), 0,
    new Instructor(0, '', '', new Date()))
  public instructors: Instructor[] = [];
  public instructorsFilter: Instructor[] = [];
  public instructor: Instructor = new Instructor(0, '', '', new Date());
  public subInstructors: Subscription = new Subscription;

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public activatedRoute: ActivatedRoute,
    public departmentService: DepartmentService,
    public instructorService: InstructorService,
    public router: Router) { }

  ngOnInit(): void {
    this.getById();
    this.getInstructors()
  }

  getById() {
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    this.departmentService.getById(this.id).subscribe(data => {
      this.department = data;
    });
  }

  public delete() {
    console.log(this.department);

    this.departmentService.delete(this.department.DepartmentID).subscribe(data => {
      this.router.navigate(['department-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = error;
      this.type = 'danger';
    });
  }

  getInstructors(){
    this.subInstructors = this.instructorService.getAll().subscribe(data =>{
      this.instructors = data;
      this.instructorsFilter = [];
    });
  }
}
