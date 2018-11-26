<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="https://vuejs.org/images/logo.png" width="30" height="30" alt="">
      </a>
    </nav>
    <div class="container-fluid ">
      <div class="row">
        <div class="col-md-4">
          <create-todo></create-todo>
        </div>
        <div class="col-md-8">
          <list-todo></list-todo>
        </div>
      </div>
    </div>
    <nav class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Sample App</a>
      
    </nav>
  </div>
</template>

<script>
  import CreateTodo from './CreateTodo.vue';
  import ListTodo from './ListTodo.vue';
  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {CreateTodo,  ListTodo},
  }
</script>
