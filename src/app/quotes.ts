export class Quotes{
//  @HostBinding('attr.class') cssClass = 'row';
votes: number;
title: any;
Author: any;
constructor(title:any, Author:any,votes?:any,time?:any) {
  this.title = title;
  this.Author = Author;
}
}
