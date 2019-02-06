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
    // let id = +this.route.snapshot.params['id'];
    let id = +this.route.snapshot.queryParams['id'];
    if (id) {
      this.student = this.studentService.getStudent(id);
      this.createForm(this.student);
    } else {
      this.createForm({ name: '', gender: '', mobileNumber: '', isActive: true, isDeleted: false, dateOfJoin: new Date() });
    }

  }

  createForm(fields) {
    this.studentForm = this.fb.group(fields);
  }

  ngOnInit() {
    // this.subscriber = this.route.params.subscribe(params => {
    //   this.id = +params['id']; // (+) converts string 'id' to a number
    // });
  }

  ngOnDestroy() {
    // this.subscriber.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }

  saveData(): void {
    console.log(this.studentForm.value);
  }

}
