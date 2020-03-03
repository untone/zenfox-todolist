<script>
import UsersTable from '@/components/UsersTable.vue'
import UsersTablePager from '@/components/UsersTablePager'

export default {
  name: 'Users',
  components: {
    UsersTable,
    UsersTablePager,
  },
}
</script>

<template>
  <main>
    <users-table />
    <users-table-pager to="Users" />
  </main>
</template>
