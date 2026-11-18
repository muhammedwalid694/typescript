// ===== 4. Composition - NoteBook and Notes (1 Mark) =====
// The NoteBook CREATES and OWNS its notes. Notes can't exist outside it:
// the array is private and Notes are created inside addNote().
// If the NoteBook is deleted, its notes are deleted with it.
import { Note } from "./Note";
import type { User } from "./User";

export class NoteBook {
  public id: number;
  public title: string;
  private notes: Note[] = [];
  private nextNoteId: number = 1;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }

  public addNote(title: string, content: string, author: User): Note {
    const note = new Note(this.nextNoteId++, title, content, author);
    this.notes.push(note);
    return note;
  }

  public removeNote(noteId: number): boolean {
    const index = this.notes.findIndex((n) => n.id === noteId);
    if (index === -1) {
      console.log(`Note ${noteId} not found in "${this.title}"`);
      return false;
    }
    this.notes.splice(index, 1);
    console.log(`Note ${noteId} removed from "${this.title}"`);
    return true;
  }

  public getNotes(): Note[] {
    return [...this.notes]; // copy, to protect the internal array
  }
}
