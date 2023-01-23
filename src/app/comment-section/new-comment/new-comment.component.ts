import { Component, EventEmitter, Output } from '@angular/core';
import data from "../../../assets/data.json";

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent {
  currentUser = data.currentUser;
  placeholder: string = "Add a comment...";

  newCommentContent: string = "";
  @Output () commentAdded = new EventEmitter<string>();

  addNewComment(){
    this.commentAdded.emit(this.newCommentContent);
  }

}
