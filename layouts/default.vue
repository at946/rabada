<template>
  <div class="has-background-light">
    <div class="basic-card card has-background-white">
      <Header />
      <div style="flex: 1;">
        <Nuxt />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }  
}
</script>

<style scoped>
.basic-card {
  height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
}
</style>