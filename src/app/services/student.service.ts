import { Injectable } from '@angular/core';
import { Student } from '../shared/student';

const STUDENTS: Student[] = [
  { id: 1, gender: "Male", name: 'Prince', mobileNumber: "+91-XXXXXXXXXX", dateOfJoin: new Date(), isDeleted: false, isActive: true },
  { id: 2, gender: 'Male', name: 'Manish', mobileNumber: "+91-XXXXXXXXXX", dateOfJoin: new Date(), isDeleted: false, isActive: true },
  { id: 3, gender: 'Male', name: 'Anish', mobileNumber: "+91-XXXXXXXXXX", dateOfJoin: new Date(2019, 1, 1), isDeleted: false, isActive: true },
  { id: 4, gender: 'Male', name: 'Sumit', mobileNumber: "+91-XXXXXXXXXX", dateOfJoin: new Date(), isDeleted: false, isActive: true },
  { id: 5, gender: 'Male', name: 'Darshil', mobileNumber: "+91-XXXXXXXXXX", dateOfJoin: new Date(), isDeleted: false, isActive: true },
  { id: 6, gender: 'Female', name: 'Nanu', mobileNumber: "+91-XXXXXXXXXX", dateOfJoin: new Date(), isDeleted: false, isActive: true },
  { id: 7, gender: 'Male', name: 'Anjali', mobileNumber: "+91-XXXXXXXXXX", dateOfJoin: new Date(), isDeleted: false, isActive: true },
  { id: 8, gender: 'Female', name: 'Payal', mobileNumber: "+91-XXXXXXXXXX", dateOfJoin: new Date(), isDeleted: false, isActive: true }
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
