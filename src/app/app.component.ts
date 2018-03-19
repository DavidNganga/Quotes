import { Component, HostBinding } from '@angular/core';
//added
import {Quotes} from "./quotes"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  quotes:string[];
    ///new Quote(1,'dont give up'),
    //new Quote(2,'things get better i guess'),
  //]
  //quote="#newlink";
  title = 'Quotes'
  //quotes: string[];
  constructor(){
    this.quotes=["don't give up","buy cookies"]
  }
}
