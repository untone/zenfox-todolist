import Vue from 'vue'
import Vuex from 'vuex'
import users from '@/store/modules/users'
import user from '@/store/modules/user'

Vue.use(Vuex)

const modules = {
  users,
  user,
}

const store = new Vuex.Store({
  modules,
  namespaced: true,
})

export default store
