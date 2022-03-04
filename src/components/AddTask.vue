<template>
  <div class="row justify-content-center">
    <div class="col-11">
      <img src="../assets/logo.png" alt="Image" class="d-block mx-auto" />
      <label>New Task</label>
      <input type="text" class="form-control" v-model="task" />
      <button class="btn btn-dark mt-3" @click="addTodo">Add New Task</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      task: "",
    };
  },
  methods: {
    addTodo() {
      if (this.task == "") {
        return alert("The task field is required.");
      }
      this.$store.commit("addTodo", { task: this.task, done: false }); //vuex commit to central store
      //this.$emit("addTask", { task: this.task, done: false }); //vue emit
      //this.todos.push({'task':this.task,'done':false});

      this.$notify({
        group: "foo",
        title: "Created",
        text: "The Todo has been created successfully!",
        type: "success",
      });

      this.task = "";
    },
  },
};
</script>
