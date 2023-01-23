import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommentSectionComponent } from '../comment-section.component';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {

 @Output () cancelButton = new EventEmitter<void>();
 @Output () deleteButton = new EventEmitter<void>();

 cancelDeletion(){
  this.cancelButton.emit();
 }
 confirmDeletion(){
  this.deleteButton.emit();
 }
}
