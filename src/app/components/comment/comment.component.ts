import { Component, Input } from '@angular/core';
import Comment from 'src/app/models/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comments: Array<Comment> | undefined;

}
