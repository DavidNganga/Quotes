import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotess',
  templateUrl: './quotess.component.html',
  styleUrls: ['./quotess.component.css']
})
export class QuotessComponent implements OnInit {
  //added
  @Input() quote:Quote;
    @Output() isComplete= new EventEmitter<boolean>();
    quoteDelete(complete:boolean){
        this.isComplete.emit(complete);
      }

  constructor() { }

  ngOnInit() {
    this.author= ''
    this.quote=""
    this.votes=0;
  }
voteUp(): boolean {
  this.votes +=1;
  return false;
}
voteDown(): boolean {
  this.votes -=1;
  return false;
}

}
