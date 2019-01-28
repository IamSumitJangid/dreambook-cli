import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentName: string;
  students: Student[] = [
    { id: 1, name: 'b', mobile_number: "+91-XXXXXXXXXX" },
    { id: 2, name: 'a', mobile_number: "+91-XXXXXXXXXX" },
    { id: 3, name: 'c', mobile_number: "+91-XXXXXXXXXX" },
    { id: 4, name: 'd', mobile_number: "+91-XXXXXXXXXX" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
