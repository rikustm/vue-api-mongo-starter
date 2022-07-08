<template>
  {{ tasks }}
</template>

<script>
import * as TaskService from "../services/TaskService";

export default {
  data() {
    return {
      tasks: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    TaskService.getAllTasks().then((res) => {
      next((vm) => {
        vm.tasks = res.data;
      });
    });
  },
};
</script>
