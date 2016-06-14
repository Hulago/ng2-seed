import { Component } from '@angular/core';
import { MainComponent } from './+main';
import { Routes , ROUTER_DIRECTIVES, Router, ROUTER_PROVIDERS } from '@angular/router';

let template = require('./app.component.html!text');

@Component({
//   moduleId: module.id,
  selector: 'app-component',
  template: template,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/main', component: MainComponent}
])
export class AppComponent {
  title = 'grid works!';
  constructor(private router: Router) {
    console.log('App Components!!');
  }
}
