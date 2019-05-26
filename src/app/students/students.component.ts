import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student';
import { StudentService } from '../services/student.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService, db: AngularFireDatabaseModule) {
    console.log(db);
    // db.database('/student').once('value').then(function (snapshot) {
    //   console.log(snapshot);
    // });

  }

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

}
