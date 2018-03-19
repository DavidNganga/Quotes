import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {Quotes} from "../quotes"


@Component({
  selector: 'app-quotess',
  templateUrl: './quotess.component.html',
  styleUrls: ['./quotess.component.css']
})
export class QuotessComponent implements OnInit {
votes: number;
  //added
  //title:string[];
  //quote:string[];
  @Input() quote:Quotes;
    @Output() isComplete= new EventEmitter<boolean>();
    quoteDelete(complete:boolean){
        this.isComplete.emit(complete);
      };

  ngOnInit() {
    this.votes=0;
};
    voteUp(): boolean {
       this.votes +=1;
     return false
   };
    voteDown(): boolean {
      this.votes -=1;
     return false
   };
//  deleteQuote(quote) {
//   for (let i = 0; i < this.quotes.length; i++) {
  //   if (this.quotes[i] === quote) {
    //   this.quotes.splice(i, 1);
    // }
//   }
};
