import { Component, OnInit } from '@angular/core';
import { ListStudents, StudentService } from './service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  providers: [StudentService],
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  listStudents: ListStudents;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.showConfig();
  }


  showConfig() {
    this.studentService.getConfig()
      .subscribe((data: ListStudents) => {
        this.listStudents = data;
      });
  }
}
