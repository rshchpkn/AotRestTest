import { Component } from '@angular/core';
import { Restangular } from "../lib";
// import {Test} from "../lib/testProvider";

@Component({
  selector: 'hello-world-app',
  templateUrl: 'hello-world.template.html',
  styleUrls: ['hello-world.style.css']
})
export class HelloWorldComponent {

  constructor(private restangular: Restangular){
    debugger;
  }
}
