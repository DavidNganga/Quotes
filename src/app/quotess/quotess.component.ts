import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotess',
  templateUrl: './quotess.component.html',
  styleUrls: ['./quotess.component.css']
})
export class QuotessComponent implements OnInit {

  //added
  //title:string[];
  //quote:string[];
  @Input() quote:Quote;
    @Output() isComplete= new EventEmitter<boolean>();
    quoteDelete(complete:boolean){
        this.isComplete.emit(complete);
      }
  constructor() {
this.votes=0;
}
voteUp(): boolean {
  this.votes +=1;
return false
}
voteDown(): boolean {
  this.votes -=1;
return false
}
  ngOnInit() {
    //this.author= ''
    //this.quote=""
    //this.votes=0;
    ////this.title = 'Quotes';
  //this.quotes = ['Life is beautiful','Context is King'];
  //onClick() {
   //console.log('love');
  // this.quotes.unshift('quotes');
  ///}
  //addQuote(quote) {
  // this.quotes.unshift(quote);
  // return false;
  //}
//  deleteQuote(quote) {
//   for (let i = 0; i < this.quotes.length; i++) {
  //   if (this.quotes[i] === quote) {
    //   this.quotes.splice(i, 1);
    // }
//   }
 }
}
