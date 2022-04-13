import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css'],
})
export class UserFeedComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  public content: any;

  ngOnInit() {
    this.postsService
      .getPostsByUserId('60d0fe4f5311236168a109ca')
      .subscribe((response) => {
        this.content = response.data;
        console.log(this.content);
      });
  }
}
