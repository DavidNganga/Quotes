import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotess',
  templateUrl: './quotess.component.html',
  styleUrls: ['./quotess.component.css']
})
export class QuotessComponent implements OnInit {

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
