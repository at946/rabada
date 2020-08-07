<template>
  <div class="has-background-white" style="height: 100vh; display: flex; flex-direction: column; max-width: 540px; margin-right: auto; margin-left: auto;">
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item has-text-weight-bold">rabada</div>
      </div>
    </nav>
    <div class="my-5 mx-5" style="flex: 1; position: relative;">
      <div ref="posts_field" style="position: absolute; bottom: 0; overflow-y: scroll; max-height: 100%;  width: 100%">
        <post v-for="post of posts" :post="post" />
      </div>
    </div>
    <div class="field mb-5 mx-5">
      <div class="tabs is-centered is-boxed is-fullwidth mb-3">
        <ul>
          <li :class="{'is-active': poster == 'You'}"><a @click="click_you">You</a></li>
          <li :class="{'is-active': poster == 'Duck'}"><a @click="click_duck">Duck</a></li>
        </ul>
      </div>
      <div class="buttons is-centered mb-2" v-if="poster == 'Duck'">
        <button class="button is-rounded is-outlined is-primary" @click="post('なんで？')">なんで？</button>
        <button class="button is-rounded is-outlined is-primary" @click="post('つまり？')">つまり？</button>
      </div>
      <div class="control">
        <textarea class="textarea is-primary"
                  ref="post_msg"
                  rows=1
                  placeholder="Enterで送信、Shift+Enterで改行"
                  v-model="msg"
                  @keydown.enter.exact="keydown_enter"
                  @keyup="adjust_textarea_height"
                  autofocus
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
  components: {
    Post
  },
  data: function() {
    return {
      msg: '',
      poster: 'You',
      posts: [
        {name: "Duck", msg: "どうしたの？"},
        {name: "Duck", msg: "ちなみにリロードしたら消えちゃうから気をつけてね！"}
      ]
    }
  },
  methods: {
    keydown_enter(e) {
      if (e.keyCode == 13) { 
        e.preventDefault()
        this.msg = this.msg.trim()
        this.post(this.msg)
      }
    },
    post(msg) {
      if (msg) {
        this.posts.push({name: this.poster, msg: msg})
        this.msg = ""
        this.$nextTick(() => {
          const target = this.$refs.posts_field
          target.scrollTop = target.scrollHeight
        })
        if (this.poster == 'You') {
          this.poster = 'Duck'
        } else {
          this.poster = 'You'
        }
        this.$refs.post_msg.focus()
      }
    },
    adjust_textarea_height() {
      const textarea = this.$refs.post_msg
      textarea.style.height = "auto"
      textarea.style.height = textarea.scrollHeight + 'px'
    },
    click_you() {
      this.poster = 'You'
    },
    click_duck() {
      this.poster = 'Duck'
    }
  }
}
</script>

<style scoped>
</style>