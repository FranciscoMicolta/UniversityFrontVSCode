import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instructor } from '../domain/instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  public url: string = '';

  constructor(public httpClient: HttpClient) {
    this.url = 'http://localhost/University.API/api/Instructors/'
    // this.url = 'http://university-api.azurewebsites.net/api/Instructors/';
  }

  public getAll(): Observable<any>{
    return this.httpClient.get(this.url);
    // return this.httpClient.get(this.url + 'GetInstructor/');
  }

  public getById(id: number): Observable<any>{
    // public getById(id: number): Instructor {
    //json
    // let instructor: Instructor = new Student(0, '', '', new Date(), '');
    // let data = this.httpClient.get(this.url);

    // data.forEach(x => {
    //   let instructorTemp = Object.assign(new Instructor(0, '', '', new Date(), ''), x);
    //   if (instructorTemp.ID === id){
    //     Instructor = instructorTemp;
    //   }
    // });

    // returniInstructor;

    return this.httpClient.get(this.url + id);
    // return this.httpClient.get(this.url + 'GetInstructor/' + id );
  }

  public save(instructor: Instructor): Observable<any> {
    return this.httpClient.post(this.url, instructor);
  }

  public edit(instructor: Instructor): Observable<any> {
    return this.httpClient.put(this.url + instructor.ID, instructor);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.url + id);
  }
}
