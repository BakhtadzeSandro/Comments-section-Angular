import { Component } from '@angular/core';
import data from "../../assets/data.json";
import { NewComment, NewReply } from 'src/name.model';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})

export class CommentSectionComponent {
  comments = data.comments;
  currentUser = data.currentUser;
  replyButtonPath = "../../assets/images/icon-reply.svg";
  deleteButtonPath = "../../assets/images/icon-delete.svg";
  editButtonPath = "../../assets/images/icon-edit.svg";

  // Sorting comments depending on their scores.

  sortComments(){
    this.comments.sort((a, b) => b.score - a.score);
  }

  plusScore(index: number){
    this.comments[index].score++;
    this.sortComments();
  }

  minusScore(index: number){
    this.comments[index].score--;
    this.sortComments();
  }

  // Adding new comment.

  addNewCommentHandler(content: string){
    // console.log(content);
    // console.log(data);
    const newMessage: NewComment = {
      id: this.comments.length + 1,
      content: content,
      createdAt: "now",
      score: 0,
      user: {
        image: { 
          png: this.currentUser.image.png,
          webp: this.currentUser.image.webp
        },
        username: this.currentUser.username
      },
      replies: []
    }
    this.comments.push(newMessage);
  }

  // Adding replies to the main comments.

  currentCommentId: number = 0;
  currentCommentIndex: number = 0;
  currentReplyId: number = 0;
  replyIsActive: boolean = false;
  addReply(index: number){
    this.replyIsActive = true;
    this.currentCommentId = index + 1;
    this.currentCommentIndex = index;
  }

  newId = 7;
  addNewReplyHandler(replyContent: string){
    const newReply: NewReply = {
      id: this.newId,
      content: replyContent,
      createdAt: "now",
      score: 0,
      user: {
        image: {
          png: this.currentUser.image.png,
          webp: this.currentUser.image.webp
        },
        username: this.currentUser.username
      },
      replyingTo: 'test'
    }
    this.comments[this.currentCommentIndex].replies.push(newReply);
    this.replyIsActive = false;
    this.newId++;
  }

  // Deleting main comments.

  showDeleteModal: boolean = false;
  commentToBeDeletedIndex: number = 0;
  deleteComment(index: number){
    console.log(index);
    this.showDeleteModal = true;
    this.commentToBeDeletedIndex = index;
  }
  cancelDeletionHandler(){
    this.showDeleteModal = false;
  }
  confirmDeletionHandler(){
    this.comments.splice(this.commentToBeDeletedIndex, 1);
    this.showDeleteModal = false;
  }

  // Editing main comments.

  editIsActive = false;
  edittedCommentId: number = 0;
  edittedCommentIndex: number = 0;
  editComment(index: number){
    this.editIsActive = true;
    this.edittedCommentId = index + 1;
    console.log(this.edittedCommentId)
  }

  edittedCommentContent: string = "";
  updateComment(index: number){
    console.log(this.edittedCommentContent);
    this.edittedCommentIndex = index;
    console.log(this.edittedCommentIndex);
    this.comments[this.edittedCommentIndex].content = this.edittedCommentContent;
    console.log(data);
    this.edittedCommentContent = "";
    this.edittedCommentId = 0;
  }

  // Deleting replies.

  deleteReply(commentIndex: number, replyIndex: number) {
    this.comments[commentIndex].replies.splice(replyIndex, 1);
  }

  // Editting replies.

  edittedReplyId: number = 0;
  edittedReplyIndex: number = 0;
  editReply(commentIndex: number, replyIndex: number){
    let reply = this.comments[commentIndex].replies[replyIndex];
    this.edittedReplyId = reply.id;
    console.log(commentIndex,this.edittedReplyId, data);
  }

  edittedReplyContent: string = "";
  updateReply(commentIndex: number, replyIndex: number){
    let replyToBeEditted = this.comments[commentIndex].replies[replyIndex];
    replyToBeEditted.content = this.edittedReplyContent;
    this.edittedReplyContent = "";
    this.edittedReplyId = 0;
  }

}
