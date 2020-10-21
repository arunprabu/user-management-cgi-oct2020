import { Component, OnInit } from '@angular/core';

// Decorator
@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
      .redText{
        color: red;
      }

      .greenText{
        color: green;
      }
    `
  ]
})
export class ConceptsComponent implements OnInit {

  // public variables, private variable

  // String Interpolation
  appName = 'User Management App!';
  year = 2020;

  // property binding
  companyName = 'CGI';
  isLoggedIn = false;

  // two way binding
  courseName = 'Angular 9';

  // CEB Related
  dataFromChildComp;

  constructor() {

  }

  ngOnInit(): void {
  }

  // ideal place for your custom methods
  clickMeHandler( event ){ // event - an object
    console.log(event);
    // todo: change the button text as clicked
    // todo: disable the button also
    alert('clicked');
  }

  profileLoadedHandler(event){
    this.dataFromChildComp = event;
  }

}
