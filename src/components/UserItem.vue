<script>
import { mapGetters, mapActions } from 'vuex'
import UserItemTodos from '@/components/UserItemTodos.vue'

export default {
  name: 'UserItem',
  components: {
    UserItemTodos,
  },
  computed: {
    ...mapGetters('user', ['user', 'todos']),
    back() {
      if (this.$route.params.back) {
        return {
          name: 'Users',
          query: this.$route.params.back,
        }
      }
      return { name: 'Users' }
    },
  },
  created() {
    const { payload = {}, id } = this.$route.params

    if (Object.keys(payload).length) {
      this.setUser(payload)
    } else {
      this.fetchUser(id)
    }
  },
  methods: {
    ...mapActions('user', {
      fetchUser: 'GET_USER',
      setUser: 'SET_USER',
    }),
  },
}
</script>

<template>
  <section>
    <router-link :to="back">
      Back to Users
    </router-link>
    <h1>{{ user.name }}</h1>
    <template v-if="todos.length">
      <user-item-todos :todos="todos" />
    </template>
  </section>
</template>
