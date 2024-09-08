import { ApiRoutes } from "./routes";

const baseUrl = `http://localhost:5173/task-calendar`;
export const getUrl = (route: string) => {
  return `${baseUrl}${route}`;
};

export const getTasks = async () => {
  const response = await fetch(getUrl(ApiRoutes.Tasks));
  console.log("response:", response);
  return response.json();
};

getTasks();
