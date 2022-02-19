<template>
   
        <div class="row justify-content-center">
            <div class="col-11">
                <img src="../assets/logo.png" alt="Image" class="d-block mx-auto">
                <label>New Task</label>
                <input type="text" class="form-control" v-model="task">
                <button class="btn btn-dark mt-3" @click="addTodo">Add New Task</button>
            </div>
        </div>
   
</template>

<script>
    export default{
        name:"AddTask",
        data(){
            return{
                task:"",
            }
        },
        methods:{
            addTodo(){
                if(this.task == ""){
                    return alert('The task field is required.');
                }
                this.$emit('addTask',{'task':this.task,'done':false});
                //this.todos.push({'task':this.task,'done':false});
                this.task = '';
            },
        }
    }
</script>