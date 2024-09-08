import { DefaultBodyType, http, HttpResponse, PathParams } from "msw";
import { readDB } from "./db";
import { ApiRoutes } from "./routes";
import { TaskType } from "@/types";
import { ApiResponse } from "./types";
import { getUrl } from "./apis";

export const handlers = [
  http.get<PathParams, DefaultBodyType, ApiResponse<TaskType[]>>(
    getUrl(ApiRoutes.Tasks),
    async ({ request }) => {
      console.log("request:", request);
      return HttpResponse.json({
        data: readDB().tasks,
        message: "Successfully fetched tasks",
      });
    }
  ),
];
