<template>
  <div style="width:100%;height:100%">
    <div style="width:100%">
      <img style="margin-top:2rem;margin-left:2rem;" src="../assets/images/index/logo.png">
    </div>
    <div style="width:100%;text-align:center">
      <img src="../assets/images/index/openscreen.png">
    </div>
    <div style="width:100%;text-align:center">
      <img src="../assets/images/index/btn01.png" @click="to">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    }
  },
  methods: {
    to() {
      this.$router.push('/book')
    }
  }
}
</script>
