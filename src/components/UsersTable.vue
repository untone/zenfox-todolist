<script>
import { mapGetters } from 'vuex'
import UsersTableItem from '@/components/UsersTableItem.vue'

export default {
  name: 'UsersTable',
  components: {
    UsersTableItem,
  },
  computed: {
    ...mapGetters('users', ['ready', 'users', 'columns']),
  },
}
</script>

<template>
  <section>
    <template v-if="!ready">
      loading...
    </template>
    <template v-else>
      <template v-if="users.length">
        <table>
          <thead>
            <th v-for="(column, index) in columns" :key="index">
              {{ column }}
            </th>
          </thead>
          <tbody>
            <users-table-item
              v-for="(user, index) in users"
              :key="index"
              :user="user"
            />
          </tbody>
        </table>
      </template>
      <div v-else>
        no users
      </div>
    </template>
  </section>
</template>
