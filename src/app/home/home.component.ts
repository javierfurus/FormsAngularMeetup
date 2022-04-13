import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private postsService: PostsService,
    private snackBar: MatSnackBar
  ) {}

  public content: any;

  ngOnInit() {
    this.postsService.getPosts().subscribe((response) => {
      this.content = response.data;
      console.log(this.content);
    });
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close');
  }
}
