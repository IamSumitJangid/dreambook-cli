import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student';
import { StudentService } from '../services/student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService) {


  }

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

}
