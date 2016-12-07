import {Injectable} from "@angular/core";


@Injectable()
export class Test {
  public name;

  constructor(name){
    this.name = name
  }

  test(){
    console.log("test");
  }
}

