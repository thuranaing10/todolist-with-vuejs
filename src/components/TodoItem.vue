<template>
  <div class="col-11 mt-3">
    <div class="card">
      <div class="row p-3 justify-items-center">
        <div
          class="col-7 mt-3"
          :class="{ taskCompleted: todo.done }"
          @dblclick="editToggle = !editToggle"
        >
          <input
            type="text"
            class="form-control"
            v-if="editToggle"
            v-model="todo.task"
            @keyup.enter="editTodo"
          />
          <span v-else>{{ todo.task }}</span>
        </div>
        <div class="col text-right">
          <button class="btn btn-success m-3" @click="completedTodo(index)">
            <span class="material-icons"> check </span>
          </button>
          <button @click="deleteTodo(index)" class="btn btn-danger">
            <span class="material-icons"> delete </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo", "index"],
  components: {},
  data() {
    return {
      editToggle: false,
    };
  },
  methods: {
    completedTodo(index) {
      this.$emit("completedTodo", index);
    },
    deleteTodo(index) {
      this.$emit("deleteTodo", index);
    },
    editTodo() {
      this.$emit("editTodo", { todo: this.todo, index: this.index });
      this.editToggle = false;
    },
  },
};
</script>
