export interface ITask {
  id?: number;
  content: string;
  dueDate: Date;
  createdAt: Date;
  subjectId: number;
  finished: boolean;
}
