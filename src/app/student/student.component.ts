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
  loading: boolean;
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location) {
    this.createForm();
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
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams.id) {
        this.loading = true;
        this.studentService.getStudent(queryParams.id).subscribe(student => {
          this.student = student;
          this.loading = false;
          this.studentForm.setValue({
            name: this.student.name,
            gender: this.student.gender,
            mobileNumber: this.student.mobileNumber,
            dateOfJoin: this.student.dateOfJoin,
            isActive: this.student.isActive,
            isDeleted: this.student.isDeleted
          });
        });
      }
    });
  }

  ngOnDestroy() {
    //  some unsubscribe code 
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
