import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
  <h1>Angular2 simples app</h1>
       Hello {{msg}}
  `})
class AppComponent {
    private msg: string;
    constructor() {
        this.msg = 'world!!';
    }
}

bootstrap(AppComponent);