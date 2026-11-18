// ===== 2. Inheritance - Admin extends User (1 Mark) =====
import { User } from "./User";
import type { NoteBook } from "./NoteBook";

export class Admin extends User {
  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number
  ) {
    super(id, name, email, password, phone, age);
  }

  // Admin can manage notes: delete any note from any notebook
  public manageNotes(notebook: NoteBook, noteId: number): void {
    console.log(`Admin ${this.name} is managing notes in "${notebook.title}"...`);
    notebook.removeNote(noteId);
  }

  // Override to show the role
  public override displayInfo(): void {
    console.log("[ADMIN]");
    super.displayInfo();
  }
}
