<template>
  <div class="container mt-5">
    <notifications group="foo" class="mt-3" />
    <!-- <AddTask @addTask="addTask" /> for vue-->
    <AddTask />
    <TransitionGroup
      enter-active-class="animate__animated animate__bounceInLeft"
      leave-active-class="animate__animated animate__bounceOutRight"
      class="row justify-content-center mt-3"
    >
      <TodoItem
        v-for="(todo, index) in $store.getters['getTodos']"
        :key="index"
        :todo="todo"
        :index="index"
      />
    </TransitionGroup>
  </div>
</template>

<script>
import AddTask from "./components/AddTask.vue";
import TodoItem from "./components/TodoItem.vue";
export default {
  name: "App",
  components: {
    AddTask,
    TodoItem,
  },
  data: () => ({
    // todos: [],
  }),
  methods: {
    // addTask(todo) {
    //   this.todos.push(todo);
    //   this.$notify({
    //     group: "foo",
    //     title: "Deleted",
    //     text: "The Todo has been created successfully!",
    //     type: "success",
    //   });
    // },
    // deleteTodo(index) {
    //   if (confirm("Are you sure to delete?")) {
    //     this.todos.splice(index, 1);
    //     this.$notify({
    //       group: "foo",
    //       title: "Deleted",
    //       text: "The Todo has been deleted successfully!",
    //       type: "error",
    //     });
    //   }
    // },
    // completedTodo(index) {
    //   this.todos[index].done = true;
    //   this.$notify({
    //     group: "foo",
    //     title: "Completed",
    //     text: "The Todo has been completed successfully!",
    //     type: "success",
    //   });
    // },
    // editTodo({ todo, index }) {
    //   this.todos[index] = todo;
    //   this.$notify({
    //     group: "foo",
    //     title: "Updated",
    //     text: "The Todo has been updated successfully!",
    //     type: "success",
    //   });
    // },
  },
};
</script>

<style>
label {
  color: white;
}
.card {
  border-radius: 1rem !important;
}
</style>
