import { User } from "./User";
import { Admin } from "./Admin";
import { NoteBook } from "./NoteBook";
import { Note } from "./Note";
import { Storage } from "./Storage";

console.log("===== 1. User =====");
const user = new User(1, "Ahmed", "ahmed@mail.com", "1234", "01012345678", 25);
user.displayInfo();

try {
  new User(2, "Kid", "kid@mail.com", "0000", "01000000000", 10);
} catch (e) {
  console.log("Validation works:", (e as Error).message);
}

console.log("\n===== 2. Admin (Inheritance) =====");
const admin = new Admin(3, "Sara", "sara@mail.com", "admin", "01199999999", 30);
admin.displayInfo();

console.log("\n===== 4. NoteBook & Notes (Composition) =====");
const notebook = new NoteBook(1, "Study Notes");
notebook.addNote("TypeScript", "TypeScript is a typed superset of JavaScript.", user);
notebook.addNote("OOP", "Inheritance, Composition, Aggregation, Association.", user);
notebook.getNotes().forEach((n: Note) =>
  console.log(`#${n.id} ${n.title}: ${n.preview()}`)
);

console.log("\n===== 5. Aggregation (User - NoteBook) =====");
user.addNotebook(notebook);
console.log(`${user.name} owns ${user.getNotebooks().length} notebook(s)`);

console.log("\n===== 6. Association (Note - User) =====");
const firstNote = notebook.getNotes()[0];
console.log(`Note "${firstNote.title}" was written by ${firstNote.author.name} (userId=${firstNote.userId})`);

console.log("\n===== Admin manages notes =====");
admin.manageNotes(notebook, 2);
console.log("Remaining notes:", notebook.getNotes().length);

console.log("\n===== 7. Generic Storage =====");
const numbers = new Storage<number>();
numbers.addItem(10);
numbers.addItem(20);
numbers.removeItem(10);
console.log("Numbers:", numbers.getAllItems());

const users = new Storage<User>();
users.addItem(user);
users.addItem(admin);
console.log("Users stored:", users.getAllItems().map((u) => u.name));
