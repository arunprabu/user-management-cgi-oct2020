import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  today: Date = new Date();

  sampleText = 'Once data updated successfully';

  constructor() { }

  ngOnInit(): void {
  }

}
