import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name: string[];
  addQuote(Quote: HTMLInputElement, Author: HTMLInputElement): boolean {
console.log(`Adding quote: ${Quote.value} and Author: ${Author.value}`);
  return false;
  }

  constructor() { }

  ngOnInit() {
    //this.title='Quotes'
    //this.quotes=['Life is beautiful','Context']

}



onClick(){
//console.log('love')

//addQuote(quote){
//console.log(quotes);
//this.quotes.push('quote');
return false;
}
}
}
