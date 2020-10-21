import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1: Create a var and make it custom event
  @Output() profileLoaded = new EventEmitter(); // @Output() will make profileLoaded as Custom Event
  // Refer Concepts.comp.html for Step 2

  constructor() { }

  ngOnInit(): void {
  }

  sendDataToParentHandler(){
    // custom event should be triggered / emitted
    // Step 3: Emit the event
    this.profileLoaded.emit('Arun'); // data sent from child comp
  }
}
