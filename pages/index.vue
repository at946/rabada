<template>
  <div class="px-5 py-5" style="height: 100%; display: flex; flex-direction: column;">

    <div ref="posts_field" style="flex-grow: 1; flex-basis: 0; overflow-y: scroll;">
      <post v-for="(post, index) in posts" :post="post" :key="index" />
    </div>

    <div class="field pt-5" style="margin-top: auto;">
      <div class="tabs is-centered is-boxed is-fullwidth mb-3">
        <ul>
          <li :class="{'is-active': poster == 'You'}"><a @click="poster = 'You'">You</a></li>
          <li :class="{'is-active': poster == 'Duck'}"><a @click="poster = 'Duck'">Duck</a></li>
        </ul>
      </div>

      <div class="buttons is-centered mb-2" v-if="poster == 'Duck'">
        <button class="button is-small is-rounded is-outlined is-success" @click="post('うんうん')">うんうん</button>
        <button class="button is-small is-rounded is-outlined is-success" @click="post('なんで？')">なんで？</button>
        <button class="button is-small is-rounded is-outlined is-success" @click="post('つまり？')">つまり？</button>
      </div>
      
      <div class="control">
        <textarea class="textarea is-primary"
                  ref="post_msg"
                  rows=1
                  placeholder="Enterで送信、Shift+Enterで改行"
                  v-model="msg"
                  @keypress.enter.exact="post_msg"
                  @keyup="adjust_textarea_height"
                  autofocus
        ></textarea>
      </div>
    </div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Post from '@/components/Post.vue'

export default {

  data: function() {
    return {
      msg: '',
      poster: 'You',
    }
  },

  components: {
    Post
  },

  computed: {
    posts() {
      return this.$store.state.posts.posts
    }
  },

  mounted() {
    this.scroll_latest_post()
  },

  methods: {
    post_msg(e) {
      e.preventDefault()
      this.msg = this.msg.trim()
      if (this.msg) {
        this.post(this.msg)
      }
    },

    post(msg) {
      if (msg) {
        this.$store.commit('posts/add', {name: this.poster, msg: msg})
        this.msg = ""
        this.$nextTick(() => { this.scroll_latest_post() })
        if (this.poster == 'You') {
          this.poster = 'Duck'
        } else {
          this.poster = 'You'
        }
        this.$refs.post_msg.focus()
      }
    },

    scroll_latest_post() {
      const target = this.$refs.posts_field
      target.scrollTop = target.scrollHeight      
    },

    adjust_textarea_height() {
      const textarea = this.$refs.post_msg
      textarea.style.height = "auto"
      textarea.style.height = textarea.scrollHeight + 'px'
    },
  }
}
</script>

<style scoped>
</style>