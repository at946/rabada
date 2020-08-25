export const state  = () => ({
  posts: [
    {name: "Duck", msg: "悩みごと？ラバーダック・デバックで解決しよう！"},
    {name: "Duck", msg: "ポストのクリアは右上のメニューから！"}
  ]
})

export const mutations = {
  add(state, post) {
    state.posts.push(post)
  },

  delete(state, index) {
    state.posts.splice(index, 1)
  }
}