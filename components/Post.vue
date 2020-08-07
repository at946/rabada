<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img v-if="post.name == 'Duck'" class="is-rounded" src="~/assets/images/duck.png">
        <img v-else class="is-rounded" src="~/assets/images/you.png">
      </p>
    </figure>
    <div class="media-content">
      <div class="content mb-0">
        <p class="has-text-weight-bold mb-0">{{ post.name }}</p>
        <p style="white-space: pre-wrap; word-wrap: break-word;">{{ post.msg }}</p>
      </div>
    </div>
  </article>  
</template>

<script>
export default {
  props: ['post']
}
</script>