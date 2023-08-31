import { Component, Input } from '@angular/core';
import { CommentSchema } from './data/comment-schema';
import Comment from './models/Comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nested-component';
  commentSchema: Array<Comment> = CommentSchema;
}
