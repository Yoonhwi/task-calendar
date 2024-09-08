import { TaskType } from "@/types";

interface DB {
  tasks: TaskType[];
}

const defaultDB = {
  tasks: [],
};

export const readDB = (): DB => {
  const db = localStorage.getItem("db");
  console.log("db:", db);
  if (!db) return defaultDB;
  return JSON.parse(db);
};

export const writeDB = (updatedDB: DB) => {
  localStorage.setItem("db", JSON.stringify(updatedDB));
};

export const updateDB = (id: number, newData: TaskType) => {
  const db = readDB();
  db.tasks = db.tasks.map((task) => (task.id === id ? newData : task));
  writeDB(db);
};
