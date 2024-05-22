import { Component, Input } from '@angular/core';
import { Post } from '../post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-view',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.css'
})
export class PostViewComponent {
  @Input() post!:Post

}
