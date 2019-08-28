import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Student } from './../models/app.student.model';
import { Universities, Courses } from './../../app/models/app.constants';
import { StudentLogic } from './../models/app.student-logic';
import { CustomValidation } from './../models/app.customvalidation';

@Component({
  selector: 'app-student-component',
  templateUrl: './app.studentcomponent.view.html'
})
export class StudentComponent implements OnInit {
  student: Student;
  students: Student[];
  showTextBox: boolean;
  private logic: StudentLogic;
  textInput: string;
  radiodata: any;
  frmStudent: FormGroup;

  // local data store for data from constants
  universities = Universities;
  courses = Courses;
  headers: Array<string>;
  constructor() {
    this.student = new Student(0, '', '', '', '', 0);
    this.students = new Array<Student>();
    this.logic = new StudentLogic();
    this.headers = new Array<string>();
    this.showTextBox = false;
    // map the student model class and its properties with FormControl
    // inside an instance of the FormGroup

    this.frmStudent = new FormGroup({
      StudentId: new FormControl(this.student.StudentId, Validators.compose([
        Validators.required, Validators.minLength(3), Validators.maxLength(8), Validators.pattern('[0-9]+'),
         CustomValidation.checkDuplicates
      ])),
      StudentName: new FormControl(this.student.StudentName, Validators.compose([
        Validators.required, Validators.minLength(6), Validators.maxLength(15), Validators.pattern('[^0-9]')
      ])),
      Address: new FormControl(this.student.Address, Validators.compose([
        Validators.required, Validators.maxLength(50)
      ])),
      University: new FormControl(this.student.University, Validators.compose([
        Validators.required
      ])),
      Course: new FormControl(this.student.Course, Validators.compose([
        Validators.required
      ])),
      Fees : new FormControl(this.student.Fees, Validators.compose([
        Validators.required
      ]))
    });
  }

  ngOnInit(): void {
    // tslint:disable-next-line: forin
    for (const p in this.student) {
      this.headers.push(p);
    }

    this.students = this.logic.getStudents();
  }

  clear(): void {
    this.student = new Student(0, '', '', '', '', 0);
  }

  save(): void {
    // console.log(this.student);
    // the value property of the FormGroup is the instance of Student Class
    const std = this.frmStudent.value;
    this.students = this.logic.saveStudent(std);
  }

  showText(): void {
    this.showTextBox = true;
  }

  textAreaEmpty() {
    if (this.textInput.length <= 0 ) {
      this.students = this.logic.getStudents();
    }
}

  getSelectedStudent(s: Student): void {
    // s and this.student are tightly coupled
    // such that changes to s are reflected in student

    // create a blank object using Object.assign()
    // and store the values (schema and value) of s into
    // the blank object
    // point this blank object to this.student
    this.student = Object.assign({}, s);
  }

  search() {
    const crit = this.textInput;
    const field = this.radiodata;
    switch (field) {
      case 'StudentName':
        this.students = this.students.filter(x => x.StudentName.indexOf(crit) > -1);
        break;

      case 'University':
        this.students = this.students.filter(x => x.University.indexOf(crit) > -1);
        break;

      case 'Course':
        this.students = this.students.filter(x => x.Course.indexOf(crit) > -1);
        break;

      default:
        break;
    }
  }

  sort(): void {
    const field = this.radiodata;
    switch (field) {
      case 'StudentName':
         this.students = this.students.sort(
          (a, b) => {
            const nameA = a.StudentName.toLowerCase();
            const nameB = b.StudentName.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
         break;

      case 'University':
          this.students = this.students.sort(
            (a, b) => {
              const nameA = a.University.toLowerCase();
              const nameB = b.University.toLowerCase();
              if (nameA < nameB) {
                  return -1;
              }
              if (nameA > nameB) {
                  return 1;
              }
              return 0;
          });
          break;

      case 'Course':
          this.students = this.students.sort(
            (a, b) => {
              const nameA = a.Course.toLowerCase();
              const nameB = b.Course.toLowerCase();
              if (nameA < nameB) {
                  return -1;
              }
              if (nameA > nameB) {
                  return 1;
              }
              return 0;
          });
          break;

      default:
        break;
    }
  }

  reverse(): void {
    this.students = this.students.reverse();
  }
}
