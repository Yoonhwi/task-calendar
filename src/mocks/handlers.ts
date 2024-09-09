import { DefaultBodyType, http, HttpResponse, PathParams } from "msw";
import { readDB, writeDB } from "./db";
import { ApiRoutes } from "./routes";
import { Nullable, TaskType } from "@/types";
import {
  ApiResponse,
  DeleteTaskBody,
  PostTaskBody,
  UpdateTaskBody,
} from "./types";
import { getUrl } from "./apis";
import { v4 } from "uuid";

export const handlers = [
  http.get<PathParams, DefaultBodyType, ApiResponse<TaskType[]>>(
    getUrl(ApiRoutes.Tasks),
    async () => {
      return HttpResponse.json({
        data: readDB().tasks,
        message: "Successfully fetch tasks",
      });
    }
  ),

  http.post<PathParams, PostTaskBody, ApiResponse<Nullable<string>>>(
    getUrl(ApiRoutes.Tasks),
    async ({ request }) => {
      const body = await request.json();
      const id = v4();
      const { content, date, status } = body;

      const update = readDB();
      update.tasks.push({ id, content, date, status });
      writeDB(update);

      return HttpResponse.json({
        data: null,
        message: "Successfully post task",
      });
    }
  ),

  http.put<PathParams, UpdateTaskBody, ApiResponse<Nullable<string>>>(
    getUrl(ApiRoutes.Tasks),
    async ({ request }) => {
      const body = await request.json();
      const { id, content, date, status } = body;

      const update = readDB();
      update.tasks = update.tasks.map((task) =>
        task.id === id ? { id, content, date, status } : task
      );
      writeDB(update);

      return HttpResponse.json({
        data: null,
        message: "Successfully update task",
      });
    }
  ),

  http.delete<PathParams, DeleteTaskBody, ApiResponse<Nullable<string>>>(
    getUrl(ApiRoutes.Tasks),
    async ({ request }) => {
      const body = await request.json();
      const { id } = body;
      const update = readDB();
      update.tasks = update.tasks.filter((task) => task.id !== id);
      writeDB(update);

      return HttpResponse.json({
        data: null,
        message: "Successfully delete task",
      });
    }
  ),
];
