import { api } from '@/api/index'

export const state = {
  user: {},
  todos: [],
}

export const getters = {
  user: state => state.user,
  todos: state => state.todos,
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_TODOS(state, todos) {
    state.todos = todos
  },
}

export const actions = {
  async GET_USER({ commit, dispatch }, id) {
    const response = await api.get(`users/${id}`)
    const { data: user = [] } = response
    commit('SET_USER', user)
    dispatch('GET_TODOS', id)
  },
  async GET_TODOS({ commit }, id) {
    const params = {
      userId: id,
    }
    const list = await api.get('todos', { params })
    const { data: todos = [] } = list
    commit('SET_TODOS', todos)
  },
  SET_USER({ commit, dispatch }, user) {
    commit('SET_USER', user)
    dispatch('GET_TODOS', user.id)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
