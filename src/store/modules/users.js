import { api } from '@/api/index'

export const state = {
  columns: ['name', 'email', 'phone'],
  ready: false,
  users: [],
  limit: 5,
  page: 1,
  total: null,
}

export const getters = {
  columns: state => state.columns,
  page: state => state.page,
  ready: state => state.ready,
  users: state => state.users,
  total: state => state.total,
}

export const mutations = {
  SET_PAGE(state, page = 1) {
    state.page = page
  },
  SET_USERS(state, { users, total = 0 }) {
    state.users = users
    state.total = total
  },
  SET_READY(state, ready) {
    state.ready = ready
  },
}

export const actions = {
  async GET_USERS({ getters, commit }) {
    const params = {
      _page: getters.page,
      _limit: getters.limit,
    }
    const response = await api.get('users', { params })
    const { data: users = [], headers = {} } = response || {}
    const count = parseInt(headers['x-total-count'])
    const total = Math.ceil(count / getters.limit)
    commit('SET_USERS', {
      users,
      total,
    })
    commit('SET_READY', true)
  },
  SET_PAGE({ getters, state, commit, dispatch }, page) {
    commit('SET_PAGE', page)
    dispatch('GET_USERS')
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
