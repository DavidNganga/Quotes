export class Quotes implements OnInit{
  @HostBinding('attr.class') cssClass = 'row';

title: string;
Author: string;
constructor() {
this.title = false
this.link = false

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
}
