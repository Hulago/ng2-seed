import { Component } from '@angular/core';
let template = require('./main.component.html!text');

@Component({
  selector: 'main-component',
  template: template
//   styleUrls: ['app.component.css'],
})
export class MainComponent {
  title = 'grid works!';
  constructor() {
    console.log('Main!!!');
  }
}
