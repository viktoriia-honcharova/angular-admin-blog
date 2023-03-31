import { Component, OnInit } from '@angular/core';
import { IBlogResponse } from '../shared/interfaces/blogs/blog.interface';
import { BlogService } from '../shared/services/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  public blogs!: IBlogResponse[];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  public getBlogs(): void {
    this.blogService.getAll().subscribe((data) => {
      this.blogs = data;
    });
  }
}
