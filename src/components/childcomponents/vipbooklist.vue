<template>
  <div class="row">
    <div class="col-12 col-sm-6">
      <div class="ph-item">
        <div class="ph-col-12">
          <div class="ph-row">
            <div class="ph-col-4"><van-icon name="rili-s" /><span style="margin-left:5px">{{ book.Date }}</span></div>
            <div class="ph-col-2 empty" />
            <div class="ph-col-6">{{ book.Area }}</div>
          </div>
        </div>
        <div class="ph-col-8">
          <div class="ph-row">
            <div class="ph-col-12 row-item">接待人：<span>{{ book.a1 }}</span></div>
            <div class="ph-col-12 row-item">访&emsp;客：<span>{{ book.b1 }}</span></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'VipList',
  props: {
    book: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    to() {
      this.$router.path('/book')
    }
  }
}
</script>

<style scoped>
.navbar{
  background-color: #f8f9f9;
}
.van-search{
  background-color:transparent;
}
.van-search__content{
  background-color: white
}
.ph-item{
  border-radius: 15px;
  padding: 15px 25px 15px 15px;
}
.ph-item::before{
  background: rgba(0,0,0,0);
}
.ph-row{
  font-size: small;
}
.ph-row div{
  background-color:transparent;
}
.ph-row .row-item{
  margin-top: 15px;
  font-size: 12px;
}
</style>
