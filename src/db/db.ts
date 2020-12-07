import Dexie from "dexie";
import { ISubject } from "./models";
import { ITask } from './models/task';

export class RickManagerDatabase extends Dexie {
  subjects: Dexie.Table<ISubject, number>;
  tasks: Dexie.Table<ITask, number>;
  //phones: Dexie.Table<IPhoneNumber, number>;

  constructor() {
    super("RickManagerDatabase");

    //
    // Define tables and indexes
    // (Here's where the implicit table props are dynamically created)
    //
    this.version(2).stores({
      subjects: "++id, name",
      tasks: '++id, subjectId, dueDate',
      //phones: '++id, contactId, type, phone',
    });

    // The following lines are needed for it to work across typescipt using babel-preset-typescript:
    this.subjects = this.table("subjects");
    this.tasks = this.table("tasks");
    //this.phones = this.table("phones");
  }
}
