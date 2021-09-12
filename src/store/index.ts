import { createStore } from "vuex";
import todos from "@/store/todos/index";

export default createStore({
  modules: {
    todos,
  },
});
