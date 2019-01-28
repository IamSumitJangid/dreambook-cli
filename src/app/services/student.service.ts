import { Injectable } from '@angular/core';
import { Student } from '../shared/student';

const STUDENTS: Student[] = [
  { id: 1, name: 'b', mobile_number: "+91-XXXXXXXXXX" },
  { id: 2, name: 'a', mobile_number: "+91-XXXXXXXXXX" },
  { id: 3, name: 'c', mobile_number: "+91-XXXXXXXXXX" },
  { id: 4, name: 'd', mobile_number: "+91-XXXXXXXXXX" }
];

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(): Student[] {
    return STUDENTS;
  }

}
