import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="text-center">
      <hr>
      <app-menu></app-menu>
      <ng-content></ng-content> <!-- content projection -->
      <p>Copyright 2020</p>
    </div>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {
  // ts
  constructor() { }

  ngOnInit(): void {
  }

}
