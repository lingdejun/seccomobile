<template>
  <div id="app">
    <router-view />
    <!-- <mu-bottom-nav id="footer" :value="bottomNav">
      <mu-bottom-nav-item title="Recents" icon=":iconfont iconrili" />
      <mu-bottom-nav-item title="Favorites" icon=":iconfont iconrenyuan1" />
      <mu-bottom-nav-item title="Nearby" icon=":iconfont iconCar" />
    </mu-bottom-nav> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      bottomNav: '/home'
    }
  },
  mounted() {
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = 'https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css'
    document.head.appendChild(link)
  }
}
</script>
<style>
html,body,#app{
  height: 100%;
  background-color: #f8f9f9;
}

</style>
