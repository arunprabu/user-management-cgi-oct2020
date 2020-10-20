import { Component, OnInit } from '@angular/core';

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

}
