<template>
  <div class="row">
    <div class="col-12 col-sm-6">
      <div class="ph-item">
        <div class="ph-col-12 pdleft0">
          <div class="ph-row">
            <div class="ph-col-4" style=""><van-icon name="rili-s" /><span style="margin-left:5px;font-family:Helvetica;font-size:12px;color:#272755">{{ book.AppointmentDate }}</span></div>
            <div class="ph-col-8" style="font-family: PingFangSC-Medium, sans-serif;color:#9393AA;font-size:14px;font-weight:500;text-align:right">{{ book.Area }}</div>
          </div>
        </div>
        <div class="ph-col-8 pdleft0">
          <div class="ph-row">
            <div class="ph-col-12 row-item" style="font-family: PingFangSC-Semibold, sans-serif;font-size:13px;font-weight:600">接待人：<span>{{ book.ReceiverName }}</span></div>
            <div class="ph-col-12 row-item" style="font-family: PingFangSC-Semibold, sans-serif;font-size:13px;font-weight:600">访&emsp;客：<span>{{ book.VisitorName }}</span></div>
          </div>
        </div>
        <div class="ph-col-2">
          <div class="ph-avatar" />
          <div style="text-align:center">{{ book.StateText }}</div>
        </div>
        <div class="ph-col-12 pdleft0">
          <div class="ph-row">
            <div class="ph-col-12 company" style="font-family: PingFangSC-Medium, sans-serif;font-size:13px;color:#9393AA">访客企业：{{ book.Company }}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'BookList',
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
  padding: 15px;
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
.company{
  font-size: smaller;
  color: #9393aa;
}
.ph-avatar{
  margin-bottom: 2px;
}
.pdleft0{
  padding-left: 0px;
}
</style>
