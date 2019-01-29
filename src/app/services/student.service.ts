import { Injectable } from '@angular/core';
import { Student } from '../shared/student';

const STUDENTS: Student[] = [
  { id: 1, name: 'a', mobile_number: "+91-XXXXXXXXXX" },
  { id: 2, name: 'b', mobile_number: "+91-XXXXXXXXXX" },
  { id: 3, name: 'c', mobile_number: "+91-XXXXXXXXXX" },
  { id: 4, name: 'd', mobile_number: "+91-XXXXXXXXXX" },
  { id: 5, name: 'e', mobile_number: "+91-XXXXXXXXXX" },
  { id: 6, name: 'f', mobile_number: "+91-XXXXXXXXXX" },
  { id: 7, name: 'g', mobile_number: "+91-XXXXXXXXXX" },
  { id: 8, name: 'h', mobile_number: "+91-XXXXXXXXXX" }
];


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(): Student[] {
    return STUDENTS;
  }

  getStudent(id: number): Student {
    return STUDENTS.filter((student) => (student.id === id))[0];
  }

}
