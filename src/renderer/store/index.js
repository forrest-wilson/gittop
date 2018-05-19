import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

import createPersistedState from 'vuex-persistedstate'
import ElectronStore from 'electron-store'
const store = new ElectronStore()

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production',
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => store.get(key),
        setItem: (key, value) => store.set(key, value),
        removeItem: key => store.delete(key)
      }
    })
  ]
})
