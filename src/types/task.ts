export interface TaskType {
  id: string;
  date: string;
  content: string;
  status: "todo" | "done";
}

export type ViewMode = "all" | "todo" | "done";
