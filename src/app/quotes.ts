export class Quotes implements OnInit{
  @HostBinding('attr.class') cssClass = 'row';

title: string;
Author: string;
constructor() {
//this.title = 'Angular 2';
//this.link = 'http://angular.io';

}
voteUp() {
this.votes += 1;

}
voteDown()  {
this.votes -= 1;

}
}
ngOnInit() {
}
};
