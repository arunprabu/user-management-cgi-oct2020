import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root', // exposed in a selector -- element selector -- mandatory
  templateUrl: './app.component.html', // template -- mandatory -- only one
  styleUrls: ['./app.component.css'] // css -- optional--  can be multiple
})
export class AppComponent {
  // ts
  title = 'user-management-cgi';
}
