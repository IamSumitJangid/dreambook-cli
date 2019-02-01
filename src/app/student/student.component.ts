import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student, Gender } from '../shared/student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnDestroy {
  studentForm: FormGroup;
  student: Student;
  genders = Gender;
  date = new Date();
  // subscriber: any;
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location) {
    let id = +this.route.snapshot.params['id'];
    this.student = this.studentService.getStudent(id);
    this.createForm();
  }

  ngOnInit() {
    // this.subscriber = this.route.params.subscribe(params => {
    //   this.id = +params['id']; // (+) converts string 'id' to a number
    // });
  }

  createForm() {
    this.studentForm = this.fb.group(this.student);
  }

  ngOnDestroy() {
    // this.subscriber.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }

}
