# Assignment 14 - TypeScript OOP (Simple Notes Management System)

## Run
```bash
npm install
npm run dev      # run with ts-node
# or
npm run build && npm start
```

## Structure
| Question | File |
|---|---|
| 1. Base Class - User | `src/User.ts` |
| 2. Inheritance - Admin | `src/Admin.ts` |
| 3. Class - Note | `src/Note.ts` |
| 4. Composition - NoteBook & Notes | `src/NoteBook.ts` |
| 5. Aggregation - User & NoteBook | `src/User.ts` (`notebooks`, `addNotebook`) |
| 6. Association - Note & User | `src/Note.ts` (`author`, `userId`) |
| 7. Generics - Storage | `src/Storage.ts` |
| Demo | `src/index.ts` |
| Part B - UML | `uml/class-diagram.png` + `uml/class-diagram.mmd` |

## Relationships
- **Inheritance:** Admin extends User
- **Composition:** NoteBook creates and owns its Notes (filled diamond)
- **Aggregation:** User has NoteBooks, they exist independently (hollow diamond)
- **Association:** Note -> User (author)
