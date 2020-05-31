<template>
  <div class="row">
    <div class="col-12 col-sm-6">
      <div class="ph-item">
        <div class="ph-col-12 pdright0 pdleft0">
          <div class="ph-row mgtop10">
            <div class="ph-col-4"><van-icon color="#1296db" name="rili-s" /><span style="margin-left:10px;font-family: PingFangSC-Semibold, sans-serif;font-size:17px;font-weight:600;color:#353535">预约记录</span></div>
            <div class="ph-col-8 empty" />
          </div>
          <div class="ph-row pdleft10">
            <div class="ph-col-6  row-item text-left text-left-color">预约日期</div>
            <div class="ph-col-6 row-item text-right">{{ book.AppointmentDate }}</div>
          </div>
          <div class="ph-row pdleft10">
            <div class="ph-col-6 row-item text-left text-left-color">预计到达时间</div>
            <div class="ph-col-6 row-item text-right">{{ book.ArriveTime }}</div>
          </div>
          <div class="ph-row pdleft10">
            <div class="ph-col-6 row-item text-left text-left-color">预计离厂时间</div>
            <div class="ph-col-6 row-item text-right">{{ book.LeaveTime }}</div>
          </div>
          <div class="ph-row pdleft10">
            <div class="ph-col-6 row-item text-left text-left-color">接待人姓名</div>
            <div class="ph-col-6 row-item text-right">{{ book.ReceiverName }}</div>
          </div>
          <div class="ph-row pdleft10">
            <div class="ph-col-6 row-item text-left text-left-color">来访事由</div>
            <div class="ph-col-6 row-item text-right">{{ book.Reason }}</div>
          </div>
          <div class="ph-row pdleft10">
            <div class="ph-col-6 row-item text-left text-left-color">VIP人数</div>
            <div class="ph-col-6 row-item text-right">{{ book.VipAmount }}人</div>
          </div>
          <div class="ph-row pdleft10">
            <div class="ph-col-6 row-item text-left text-left-color">访问区域</div>
            <div class="ph-col-6 row-item text-right">{{ book.Remark }}</div>
          </div>
          <div class="ph-row pdleft10">
            <div class="ph-col-6 row-item text-left text-left-color">备注</div>
            <div class="ph-col-6 row-item text-right">{{ book.AppointmentDate }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VipBookDetail',
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
.mgleft10{
  margin-left: 10px;
}
.mgtop10{
  margin-top: 10px;
}
.pdleft10{
  padding-left: 10px;
}
.pdleft0{
  padding-left: 0px;
}
.pdright0{
  padding-right: 0px;
}
.ph-row{
  font-size: small;
}
.ph-row div{
  background-color:transparent;
}
.ph-row .row-item{
  margin-top: 10px;
  font-size: 12px;
}
.text-left{
  text-align: left;
  font-family: PingFangSC-Medium, sans-serif;
  font-size:12px
}
.text-right{
  text-align: right;
  font-family: PingFangSC-Medium, sans-serif;
  color:#344356;
  font-size:12px
}
.text-left-color{
  color: #9393AA;
}
</style>
