import Dexie from "dexie";
import { ISubject } from "./models";

export class RickManagerDatabase extends Dexie {
  subjects: Dexie.Table<ISubject, number>;
  //emails: Dexie.Table<IEmailAddress, number>;
  //phones: Dexie.Table<IPhoneNumber, number>;

  constructor() {
    super("RickManagerDatabase");

    //
    // Define tables and indexes
    // (Here's where the implicit table props are dynamically created)
    //
    this.version(1).stores({
      subjects: "++id, name",
      //emails: '++id, contactId, type, email',
      //phones: '++id, contactId, type, phone',
    });

    // The following lines are needed for it to work across typescipt using babel-preset-typescript:
    this.subjects = this.table("subjects");
    //this.emails = this.table("emails");
    //this.phones = this.table("phones");
  }
}
