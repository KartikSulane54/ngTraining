import { Student } from './app.student.model';
import { AbstractControl } from '@angular/forms';

export class StudentLogic {
  static studentss: any;

  constructor() {
    this.students = new Array<Student>();
    this.students.push(new Student(101, 'Don', 'Nagapada', 'Pune', 'Computer', 2000));
    this.students.push(new Student(102, 'Raphael', 'Ghatkopar', 'Mumbai', 'Mech', 4000));
    this.students.push(new Student(103, 'Micheal', 'NalaSupara', 'Amravati', 'BA', 1000));
    this.students.push(new Student(104, 'Shredder', 'Lokhandwala', 'Kolhapur', 'Medical', 5000));
    this.students.push(new Student(105, 'Marvel', 'Bandra', 'Ahmedabad', 'Accounts', 8000));
    StudentLogic.studentss = this.students;
  }
  students: Array<Student>;

  static checkDuplicates(ctrl: AbstractControl): any {
    const val = parseInt(ctrl.value);
    const found = StudentLogic.studentss.find(x => x.StudentId == val);
    if (found != null) {
      return {invalid: true};
     } else {
       return null;
     }
  }

  getStudents(): Array<Student> {
    return this.students;
  }

  saveStudent(std: Student): Array<Student> {
    this.students.push(std);
    return this.students;
  }

}
