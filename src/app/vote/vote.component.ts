import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input('myLike') like = 0;
  @Input('myDislike') dislike = 0;

  @Output('voteFromChildToParent') voteFromChildToParent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  incLike() {
    this.like++;
    this.voteFromChildToParent.emit({ type: 1, value: this.like });
  }

  incDisLike() {
    this.dislike++;
    this.voteFromChildToParent.emit({ type: 0, value: this.dislike })
  }



}
