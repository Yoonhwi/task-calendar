export interface TaskType {
  id: string;
  date: string;
  content: string;
  status: "todo" | "done";
}
