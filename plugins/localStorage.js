// https://github.com/robinvdvleuten/vuex-persistedstate
// https://qiita.com/sakapun/items/a0cf5698751ae70c8088
import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  if (process.client) {
    window.onNuxtReady((nuxt) => {
      createPersistedState({ key: 'rabada' })(store)
    })
  }
}