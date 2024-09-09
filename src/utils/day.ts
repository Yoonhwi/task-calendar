import { TaskType } from "@/types";
import dayjs from "dayjs";

export const isEqual = (task: TaskType, dayjs: dayjs.Dayjs) => {
  return task.date === dayjs.format("YYYY-MM-DD");
};
