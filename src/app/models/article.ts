import { User } from './user';

// Clase de artículos
export class Article {
  _id: number = 0;
  title: string = "";
  description: string = "";
  content: string = "";
  img: string = "";
  created_at: Date = new Date;
  updated_at: Date = new Date;
  user: User = new User;
}
