import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  // Step 1: Have the HTML form tag equivalent in TS
  userForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    // Step 1 continues...
    this.userForm = new FormGroup({
      // Step 2: Have the form field equivalents in TS - Step 3, 4 refer comp HTML
      name: new FormControl('', Validators.required), // Step 5: Work on Validations
      phone: new FormControl('', Validators.required), // todo: work on min length validation
      email: new FormControl('', [ Validators.required, Validators.email ])
    });

  }

  userFormSubmitHandler(){
    // console.log(this.userForm); // for more validation work with form related properties

    console.log(this.userForm.value);
  }

}
