import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instructor } from 'src/app/domain/instructor';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {

  public id: number = 0;
  public instructor: Instructor = new Instructor(0, '', '', new Date());

  constructor(public activatedRoute: ActivatedRoute,
    public instructorService: InstructorService) { }

  ngOnInit(): void {
    this.getById();
  }

  public getById() {
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    // this.instructor = this.instructorService.getById(this.id);
    this.instructorService.getById(this.id).subscribe(data => {
      this.instructor = data;
    })
  }
}
