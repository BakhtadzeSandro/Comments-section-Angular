import { Component, EventEmitter, Output } from '@angular/core';
import data from "../../../assets/data.json";

@Component({
  selector: 'app-reply-comment',
  templateUrl: './reply-comment.component.html',
  styleUrls: ['./reply-comment.component.css']
})
export class ReplyCommentComponent {
  currentUser = data.currentUser;
  // currentReplyId: number = 0;
  newReplyContent: string = "";
  @Output () replyAdded = new EventEmitter<string>();
  // @Output () replyIndex = new EventEmitter<number>();

  addNewReply(){
    this.replyAdded.emit(this.newReplyContent);
    // this.currentReplyId = index;
    // this.replyIndex.emit(this.currentReplyId);
  }
}
