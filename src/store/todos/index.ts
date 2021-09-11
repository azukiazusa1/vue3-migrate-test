import { Module } from "vuex";
import TodoRepository from "@/repositories/TodoRepository";
import { TodosState } from "./types";
import { Params, Todo } from "@/repositories/TodoRepository/types";
const todoRepository = new TodoRepository();

const initialState = (): TodosState => ({
  todos: [],
});

// eslint-disable-next-line @typescript-eslint/ban-types
const todos: Module<TodosState, {}> = {
  namespaced: true,
  state: initialState(),
  getters: {
    getTodos(state) {
      return state.todos;
    },
    findById(state) {
      return (id: number) => state.todos.find((todo) => todo.id === id);
    },
  },
  mutations: {
    setTodos(state, todos: Todo[]) {
      state.todos = todos;
    },
    addTodo(state, todo: Todo) {
      state.todos.push(todo);
    },
    removeTodo(state, id: number) {
      state.todos = state.todos.filter((v) => v.id !== id);
    },
    updateTodo(state, todo: Todo) {
      const index = state.todos.findIndex((v) => v.id === todo.id);
      if (index === -1) {
        throw new Error("not found");
      }
      state.todos[index] = todo;
    },
  },
  actions: {
    fetchTodo({ commit }) {
      const todos = todoRepository.findAll();
      commit("setTodos", todos);
    },
    findTodo({ commit }, id: number) {
      const todo = todoRepository.findById(id);
      commit("addTodo", todo);
    },
    createTodo({ commit }, params: Params) {
      const todo = todoRepository.create(params);
      commit("addTodo", todo);
    },
    updateTodo({ commit }, { id, params }: { id: number; params: Params }) {
      const todo = todoRepository.update(id, params);
      commit("updateTodo", todo);
    },
    deleteTodo({ commit }, id: number) {
      todoRepository.delete(id);
      commit("removeTodo", id);
    },
  },
};

export default todos;
