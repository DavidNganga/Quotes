import { Component, HostBinding } from '@angular/core';
//added
import {quote} from './quotes'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  quote="don't give up son";
  title = 'Quotes'
}
