<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <div class="navbar-item has-text-weight-bold">rabada</div>

      <a role="button" class="navbar-burger burger" :class="{ 'is-active': open_burger }" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="toggle_burger">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': open_burger }">

      <div class="navbar-end">
        <a class="navbar-item" @click="clear_posts"><i class="material-icons inline-icons mr-1">clear_all</i>Clear</a>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    open_burger: false
  }),

  methods: {
    toggle_burger() {
      this.open_burger = !this.open_burger
    },

    clear_posts() {
      localStorage.clear('rabada')
      location.reload()
    }
  }
}
</script>