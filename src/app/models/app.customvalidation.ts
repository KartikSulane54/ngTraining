import { AbstractControl } from '@angular/forms';
import { StudentLogic } from './app.student-logic';
export class CustomValidation {
  private logic: StudentLogic;
  constructor() {
    this.logic = new StudentLogic();
  }

  static checkDuplicates(ctrl: AbstractControl): any {
    return StudentLogic.checkDuplicates(ctrl);
  }
}
