<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UsersTablePager',
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters('users', ['page', 'total']),
    firstPage() {
      return {
        alias: 'First Page',
        ...this.path(),
      }
    },
    prevPage() {
      const page = this.page - 1 > 1 ? this.page - 1 : null
      return {
        alias: 'Prev Page',
        ...this.path(page),
      }
    },
    nextPage() {
      const page = this.page + 1 < this.total ? this.page + 1 : this.total
      return {
        alias: 'Next Page',
        ...this.path(page),
      }
    },
    lastPage() {
      return {
        alias: 'Last Page',
        ...this.path(this.total),
      }
    },
  },
  watch: {
    $route({ query }) {
      this.setPage(query.page)
    },
  },
  methods: {
    ...mapActions('users', {
      setPage: 'SET_PAGE',
    }),
    path(page = null) {
      const query = page ? { query: { page: page } } : null
      return {
        path: {
          name: this.to,
          ...query,
        },
      }
    },
  },
}
</script>

<template>
  <ol>
    <li>
      <router-link :to="firstPage.path">
        {{ firstPage.alias }}
      </router-link>
    </li>
    <li>
      <router-link :to="prevPage.path">
        {{ prevPage.alias }}
      </router-link>
    </li>
    <li>Page: {{ this.page }}</li>
    <li>
      <router-link :to="nextPage.path">
        {{ nextPage.alias }}
      </router-link>
    </li>
    <li>
      <router-link :to="lastPage.path">
        {{ lastPage.alias }}
      </router-link>
    </li>
  </ol>
</template>
