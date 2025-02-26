import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/domain/department';
import { Instructor } from 'src/app/domain/instructor';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public id: number = 0;
  public department: Department = new Department(0, '', 0, new Date(), 0,
    new Instructor(0, '', '', new Date()));

  constructor(
    public activeRoute: ActivatedRoute,
    public departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.getById();
  }

  getById() {
    let param = this.activeRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    // this.student = this.studentService.getById(this.id);
    this.departmentService.getById(this.id).subscribe(data => {
      this.department = data;
    });
  }
}
