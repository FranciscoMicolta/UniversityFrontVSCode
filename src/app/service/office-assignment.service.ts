import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfficeAssignment } from '../domain/office-assignment';

@Injectable({
  providedIn: 'root'
})
export class OfficeAssignmentService {
  public url: string = '';

  constructor(public httpClient: HttpClient) {
    this.url = 'http://localhost/University.API/api/OfficeAssignments/'
    //this.url = 'http://university-api.azurewebsites.net/api/OfficeAssignments/';
   }

   public getAll(): Observable<any>{
     return this.httpClient.get(this.url);
     //return this.httpClient.get(this.url + 'GetOfficeAssignments/');
   }

   public getById(id: number): Observable<any> {
    // public getById(id: number): OfficeAssignment {
      //json
      // let officeAssignment: OficeAssignment = new OficeAssignment(0, '', '', new Date(), '');
      // let data = this.httpClient.get(this.url);
  
      // data.forEach(x => {
      //   let officeAssignmentTemp = Object.assign(new OficeAssignment(0, '', '', new Date(), ''), x);
      //   if (officeAssignmentTemp.ID === id){
      //     depaofficeAssignmentrtment = officeAssignmentTemp;
      //   }
      // });
  
      // return officeAssignment;
  
      return this.httpClient.get(this.url + id);
      //return this.httpClient.get(this.url + 'GetDepartments/' + id );
    }

    public save(officeAssignment: OfficeAssignment): Observable<any>{
      return this.httpClient.post(this.url, officeAssignment);
    }

    public edit(officeAssignment: OfficeAssignment): Observable<any> {
      return this.httpClient.put(this.url + officeAssignment.InstructorID, officeAssignment);
    }
  
    public delete(id: number): Observable<any> {
      return this.httpClient.delete(this.url + id);
    }
}
 