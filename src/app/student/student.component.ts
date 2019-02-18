import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student, Gender } from '../shared/student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    this.createForm();
    // let id = +this.route.snapshot.params['id'];
    let id = +this.route.snapshot.queryParams['id'];

    if (id) {
      this.student = this.studentService.getStudent(id);
      this.studentForm.setValue({
        name: this.student.name,
        gender: this.student.gender,
        mobileNumber: this.student.mobileNumber,
        dateOfJoin: this.student.dateOfJoin,
        isActive: this.student.isActive,
        isDeleted: this.student.isDeleted
      });
    }
  }

  // decorator to view child dom element of form
  @ViewChild('SForm') studentFormDirective;


  createForm() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      mobileNumber: [null, Validators.required],
      dateOfJoin: [new Date(), Validators.required],
      isActive: true,
      isDeleted: false
    });
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
    // this.studentForm.reset({
    //   name: '',
    //   gender: '',
    //   mobileNumber: null,
    //   dateOfJoin: new Date(),
    //   isActive: true,
    //   isDeleted: false
    // });
    // this.studentFormDirective.resetForm();
  }

}
