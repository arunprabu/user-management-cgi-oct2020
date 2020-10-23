import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  userList: any[];

  constructor( private userService: UserService) {
    console.log('Inside Constructor');
  }

  // life cycle hook
  ngOnInit(): void { // would be called when the comp comes into the view
    console.log('Inside ngOnInit');
    // ideal place for you to send ajax calls
    this.userService.getUsers()
      .subscribe( (res: any) => {
        console.log(res);
        this.userList = res;
      });
  }
}
