import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IBlogRequest,
  IBlogResponse,
} from '../../interfaces/blogs/blog.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private url = 'http://localhost:3000';
  private api = { blogs: `${this.url}/blogs` };

  constructor(private http: HttpClient) {}

  getAll(): Observable<IBlogResponse[]> {
    return this.http.get<IBlogResponse[]>(this.api.blogs);
  }
}
