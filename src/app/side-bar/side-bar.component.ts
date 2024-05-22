import { Component, inject } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { InfoService } from '../services/info.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [NgFor, CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  newPosts: Post[] = []

  route: ActivatedRoute = inject(ActivatedRoute)
  infoService: InfoService = inject(InfoService)


  constructor() {

    this.infoService.getPosts().then((post: Post[]) => {
      this.newPosts = post
    })

  }


}
