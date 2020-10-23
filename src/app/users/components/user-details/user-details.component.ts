import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  userData: any;

  constructor( private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // read URL Param in angular
    const userId = this.route.snapshot.paramMap.get('id');

    this.userService.getUserById(userId)
      .subscribe( (res: any) => {
        console.log(res);
        this.userData = res;
      });
  }

}
