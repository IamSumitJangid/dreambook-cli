import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [
    { id: 1, name: 'b', mobile_number: "+91-XXXXXXXXXX" },
    { id: 2, name: 'a', mobile_number: "+91-XXXXXXXXXX" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
