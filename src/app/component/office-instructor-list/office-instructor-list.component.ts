import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Instructor } from 'src/app/domain/instructor';
import { OfficeAssignment } from 'src/app/domain/office-assignment';
import { InstructorService } from 'src/app/service/instructor.service';
import { OfficeAssignmentService } from 'src/app/service/office-assignment.service';

@Component({
  selector: 'app-office-instructor-list',
  templateUrl: './office-instructor-list.component.html',
  styleUrls: ['./office-instructor-list.component.css']
})
export class OfficeInstructorListComponent implements OnInit, OnDestroy  {

  public id: number = 0;
  public instructor: Instructor = new Instructor(0, '', '', new Date());
  public office: OfficeAssignment = new OfficeAssignment(0, '', new Instructor(0, '', '', new Date()));
  public offices: OfficeAssignment[] = [];
  public ifofficesExist: boolean = false;
  public subOffices: Subscription = new Subscription();

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public instructorService: InstructorService,
    public officeService: OfficeAssignmentService,
    public activedRoute: ActivatedRoute,
    public router: Router) { }

  ngOnDestroy(): void {
    this.subOffices.unsubscribe();
  }

  ngOnInit(): void {
    this.getInstructorById();
    this.getOfficesByInstructorId();
  }

  getInstructorById() {
    let param = this.activedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    this.instructorService.getById(this.id).subscribe((data) => {
      this.instructor = data;
    });
  }
  getOfficesByInstructorId() {
    let param = this.activedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    this.subOffices = this.officeService.getAll().subscribe((data) => {
      this.offices = data;
      //filtrar por el id
      this.offices = this.offices.filter(x => x.InstructorID ===   this.id);

      if (this.offices.length > 0) {
        this.ifofficesExist = true;
        this.office = this.offices[0];
      } 
    });
  }

  public saveOffice() {

    this.office.InstructorID = this.id;
    console.log(this.office);

    this.officeService.save(this.office).subscribe(data => {
      this.router.navigate(['/instructor-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }
}
