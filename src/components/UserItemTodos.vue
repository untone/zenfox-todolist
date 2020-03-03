<script>
export default {
  name: 'UsersTableItem',
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
}
</script>

<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <span>{{ todo.completed ? '✓' : null }}</span>
      <span>{{ todo.title }}</span>
    </li>
  </ul>
</template>
