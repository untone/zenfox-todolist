<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UsersTableItem',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('users', ['columns']),
    path() {
      return {
        name: 'User',
        params: {
          id: this.user.id,
          back: this.$route.query,
          payload: this.user,
        },
      }
    },
  },
}
</script>

<template>
  <tr>
    <td v-for="(column, index) in columns"
      :key="index"
    >
      <router-link :to="path">
        {{ user[column] }}
      </router-link>
    </td>
  </tr>
</template>
