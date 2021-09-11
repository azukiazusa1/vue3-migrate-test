import { Params, Todo } from "./types";

const mockTodos: Todo[] = [
  {
    id: 1,
    title: "todo1",
    description: "1つ目",
    status: "waiting",
    createdAt: new Date("2020-12-01"),
    updatedAt: new Date("2020-12-01"),
  },
  {
    id: 2,
    title: "todo2",
    description: "2つ目",
    status: "waiting",
    createdAt: new Date("2020-12-02"),
    updatedAt: new Date("2020-12-02"),
  },
  {
    id: 3,
    title: "todo3",
    description: "3つ目",
    status: "working",
    createdAt: new Date("2020-12-03"),
    updatedAt: new Date("2020-12-04"),
  },
];

export default class TodoRepository {
  private todos: Todo[] = [...mockTodos];

  findAll(): Todo[] {
    return [...this.todos];
  }

  findById(id: number): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  create(params: Params): Todo {
    const todo: Todo = {
      ...params,
      id: Date.now(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.todos.push(todo);
    return todo;
  }

  update(id: number, params: Params): Todo {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      throw new Error("not found");
    }

    const updatedTodo: Todo = {
      ...this.todos[index],
      ...params,
      updatedAt: new Date(),
    };

    this.todos[index] = updatedTodo;

    return updatedTodo;
  }

  delete(id: number): void {
    this.todos.filter((todo) => todo.id !== id);
  }
}
