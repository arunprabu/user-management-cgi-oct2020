import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1 of CPB: Creating Custom Property -- Refer Concepts.comp.html for Step 2
  @Input() age = 10; // @Input() that makes age as custom property
  // todo: lean about alias in @Input()

  constructor() { }

  ngOnInit(): void {
  }

}
