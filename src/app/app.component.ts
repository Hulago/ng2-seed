import { Component } from '@angular/core';
import { MainComponent } from './+main';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
//   moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
//   styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: MainComponent}
])
export class AppComponent {
  title = 'grid works!';
}