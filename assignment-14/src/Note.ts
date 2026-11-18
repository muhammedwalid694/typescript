// ===== 3. Class - Note (1 Mark) =====
// ===== 6. Association: Note -> User (author) =====
import type { User } from "./User";

export class Note {
  public id: number;
  public title: string;
  public content: string;
  public userId: number; // reference to the User id
  public author: User; // Association: each note has an author

  constructor(id: number, title: string, content: string, author: User) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
    this.userId = author.id;
  }

  // Returns a short preview of the content
  public preview(length: number = 20): string {
    return this.content.length > length
      ? this.content.substring(0, length) + "..."
      : this.content;
  }
}
