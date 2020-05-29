<template>
  <div>123</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: '',
      bottomNav: '0'
    }
  },
  created() {
    this.title = process.env.VUE_APP_BASE_API
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.iconfont{
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
