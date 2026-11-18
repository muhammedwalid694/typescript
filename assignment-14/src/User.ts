// ===== 1. Base Class - User (1 Mark) =====
// Uses access modifiers: public, private, protected
import type { NoteBook } from "./NoteBook";

export class User {
  public id: number;
  public name: string;
  public email: string;
  private password: string; // private: only inside User
  protected phone: string; // protected: User + subclasses (Admin)
  protected age: number; // protected: must be between 18 and 60

  // ===== 5. Aggregation: User "has" NoteBooks =====
  // NoteBooks are created outside and can live without the User.
  protected notebooks: NoteBook[] = [];

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number
  ) {
    if (age < 18 || age > 60) {
      throw new Error("Age must be between 18 and 60");
    }
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.age = age;
  }

  // Prints the user's information (password is hidden on purpose)
  public displayInfo(): void {
    console.log(
      `User Info -> ID: ${this.id} | Name: ${this.name} | Email: ${this.email} | Phone: ${this.phone} | Age: ${this.age}`
    );
  }

  // Safe way to check the password from outside
  public checkPassword(input: string): boolean {
    return this.password === input;
  }

  // ===== Aggregation methods =====
  public addNotebook(notebook: NoteBook): void {
    this.notebooks.push(notebook);
  }

  public getNotebooks(): NoteBook[] {
    return this.notebooks;
  }
}
