import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../shared/student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnDestroy {
  student: Student;
  // subscriber: any;
  constructor(private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // this.subscriber = this.route.params.subscribe(params => {
    //   this.id = +params['id']; // (+) converts string 'id' to a number
    // });
    let id = +this.route.snapshot.params['id'];
    this.student = this.studentService.getStudent(id);
  }

  ngOnDestroy() {
    // this.subscriber.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }

}
