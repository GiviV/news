import { Component, inject, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostComponent } from '../post/post.component';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../services/info.service';
import { PostViewComponent } from '../post-view/post-view.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostComponent, NgFor, PostViewComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {


  route: ActivatedRoute = inject(ActivatedRoute)
  filterPosts: Post[] = []

  postList: Post[] = []

  newsSerive: InfoService = inject(InfoService)

  constructor() {
    this.newsSerive.getPosts().then((postList: Post[]) => {
      this.postList = postList
    })

  }

  category: string = ''
  ngOnInit(): void {
 

    this.route.params.subscribe(params => {
      this.category = params['category']; // Use the '+' to convert the string to a number
      this.filterPosts = this.postList.filter((el) => el.category == this.category)
    });
  }



}
