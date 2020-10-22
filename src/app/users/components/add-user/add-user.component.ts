import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  // Step 1: Have the HTML form tag equivalent in TS
  userForm: FormGroup;
  isSaved: boolean;

  constructor(private userService: UserService) { // dependency injection

  }

  ngOnInit(): void {
    // Step 1 continues...
    this.userForm = new FormGroup({
      // Step 2: Have the form field equivalents in TS - Step 3, 4 refer comp HTML
      name: new FormControl('Arun', Validators.required), // Step 5: Work on Validations
      phone: new FormControl('23523452', Validators.required), // todo: work on min length validation
      email: new FormControl('a@b.com', [Validators.required, Validators.email])
    });

  }

  userFormSubmitHandler() {
    // console.log(this.userForm); // for more validation work with form related properties
    console.log(this.userForm.value);

    // 1. send the above data to service
    this.userService.createUser(this.userForm.value)
      .subscribe((res: any) => { // 2. get the resp from service
        console.log(res);
        if (res && res.id) {
          this.isSaved = true;
        }
      });
  }

}
