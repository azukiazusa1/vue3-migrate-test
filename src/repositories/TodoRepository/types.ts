export type Status = "waiting" | "working" | "completed" | "pending";

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

export type Params = Pick<Todo, "title" | "description" | "status">;
