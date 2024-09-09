import { TaskType } from "@/types";
import { ApiRoutes } from "./routes";
import { ApiResponse } from "./types";

interface PostTask {
  content: string;
  date: string;
}

const baseUrl = `http://localhost:5173/task-calendar`;

export const getUrl = (route: string) => {
  return `${baseUrl}${route}`;
};

export const getTasks = async (): Promise<ApiResponse<TaskType[]>> => {
  const response = await fetch(getUrl(ApiRoutes.Tasks));
  return response.json();
};

export const postTask = async ({ content, date }: PostTask) => {
  const response = await fetch(getUrl(ApiRoutes.Tasks), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content,
      date,
      status: "todo",
    }),
  });
  return response.json();
};

export const updateTask = async ({ id, content, status, date }: TaskType) => {
  const response = await fetch(getUrl(ApiRoutes.Tasks), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, content, status, date }),
  });
  return response.json();
};

export const deleteTask = async ({ id }: { id: string }) => {
  const response = await fetch(getUrl(ApiRoutes.Tasks), {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  return response.json();
};
