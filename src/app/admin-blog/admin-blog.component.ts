import { Component, OnInit } from '@angular/core';
import { IBlogResponse } from '../shared/interfaces/blogs/blog.interface';
import { BlogService } from '../shared/services/blog/blog.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css'],
})
export class AdminBlogComponent implements OnInit {
  public adminBlogs!: IBlogResponse[];
  public blogTitle!: string;
  public blogText!: string;
  public blogAuthor!: string;
  public blogImagePath =
    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';

  public editStatus = false;
  public editID!: number;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  public getBlogs(): void {
    this.blogService.getAll().subscribe((data) => {
      this.adminBlogs = data;
    });
  }

  addBlog(): void {
    const newBlog = {
      imagePath: this.blogImagePath,
      author: this.blogAuthor,
      title: this.blogTitle,
      text: this.blogText,
    };

    if (this.checkForm()) {
      this.blogService.create(newBlog).subscribe(() => {
        this.getBlogs();
        this.resetForm();
      });
    } else {
      alert('Please fill in the data!');
    }
  }

  deleteBlog(blog: IBlogResponse): void {
    if (confirm('Are you sure?')) {
      this.blogService.delete(blog.id).subscribe(() => {
        this.getBlogs();
      });
    }
  }

  editBlog(blog: IBlogResponse): void {
    this.blogTitle = blog.title;
    this.blogImagePath = blog.imagePath;
    this.blogAuthor = blog.author;
    this.blogText = blog.text;
    this.editStatus = true;
    this.editID = blog.id;
  }

  saveBlog(): void {
    const updateBlog = {
      imagePath: this.blogImagePath,
      author: this.blogAuthor,
      title: this.blogTitle,
      text: this.blogText,
    };

    if (this.checkForm()) {
      this.blogService.update(updateBlog, this.editID).subscribe(() => {
        this.getBlogs();
        this.resetForm();
      });
    } else {
      alert('Please fill in the data!');
    }
  }

  private resetForm(): void {
    this.blogTitle = '';
    this.blogImagePath =
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';
    this.blogText = '';
    this.blogAuthor = '';
    this.editStatus = false;
  }

  private checkForm(): boolean {
    if (this.blogTitle && this.blogText && this.blogAuthor) {
      return true;
    } else {
      return false;
    }
  }
}
