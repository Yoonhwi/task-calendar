export interface ApiResponse<T> {
  data: T;
  message: string;
}

export interface PostTaskBody {
  content: string;
  date: string;
  status: "todo" | "done";
}

export interface UpdateTaskBody {
  id: string;
  content: string;
  date: string;
  status: "todo" | "done";
}

export interface DeleteTaskBody {
  id: string;
}
