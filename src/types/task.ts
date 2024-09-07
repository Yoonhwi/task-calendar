export interface TaskType {
  id: number;
  date: string;
  content: string;
  status: "todo" | "done";
}
