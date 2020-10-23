import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit, OnDestroy {

  userList: any[];
  usersSubscription: Subscription;

  constructor(private userService: UserService) {
    console.log('Inside Constructor');
  }

  // life cycle hook
  ngOnInit(): void { // would be called when the comp comes into the view
    console.log('Inside ngOnInit');
    // ideal place for you to send ajax calls
    this.usersSubscription = this.userService.getUsers()
      .subscribe((res: any) => {
        console.log(res);
        this.userList = res;
      });
  }

  ngOnDestroy() {
    console.log('Inside ngOnDestroy');
    // ideal place for you to clear the array, object, unsubscribe, clear interval
    this.usersSubscription.unsubscribe();
    if (this.userList && this.userList.length > 0) {
      this.userList.length = 0;
    }
  }

}
