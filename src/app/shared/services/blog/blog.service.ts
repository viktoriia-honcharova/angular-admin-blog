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

  create(blog: IBlogRequest): Observable<IBlogResponse> {
    return this.http.post<IBlogResponse>(this.api.blogs, blog);
  }

  update(blog: IBlogRequest, id: number): Observable<IBlogResponse> {
    return this.http.patch<IBlogResponse>(`${this.api.blogs}/${id}`, blog);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.blogs}/${id}`);
  }
}
