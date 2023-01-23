import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { NewCommentComponent } from './comment-section/new-comment/new-comment.component';
import { ReplyCommentComponent } from './comment-section/reply-comment/reply-comment.component';
import { DeleteModalComponent } from './comment-section/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentSectionComponent,
    NewCommentComponent,
    ReplyCommentComponent,
    DeleteModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
