// export interface IBlog {
//   id: number;
//   imagePath: string;
//   author: string;
//   title: string;
//   text: string;
// }

export interface IBlogRequest {
  imagePath: string;
  author: string;
  title: string;
  text: string;
}

export interface IBlogResponse extends IBlogRequest {
  id: number;
}
