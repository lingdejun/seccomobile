<template>
  <div class="row">
    <div class="col-12 col-sm-6">
      <div class="ph-item">
        <div class="ph-col-12 pdright0">
          <div class="ph-row mgtop10">
            <div class="ph-col-4"><van-icon color="#1296db" name="che-s" /><span style="margin-left:10px;font-size:16px;font-weight:800">车辆信息</span></div>
            <div class="ph-col-8 empty" />
          </div>
          <div v-for="(item,index) in cars" :key="index">
            <div v-if="from !=='sub'" class="ph-row pdleft10">
              <div class="ph-col-6 row-item text-left text-left-color">车牌号</div>
              <div class="ph-col-6 row-item text-right">{{ item.Number }}</div>
            </div>
            <div v-if="from !=='sub'" class="ph-row pdleft10">
              <div class="ph-col-6 row-item text-left text-left-color">车辆总人数</div>
              <div class="ph-col-6 row-item text-right">{{ item.PassengerAmount }}人</div>
            </div>
            <div v-if="from ==='sub'" class="ph-row pdleft10">
              <div class="ph-col-4 row-item text-left text-left-color">车&nbsp;&nbsp;&nbsp;牌&nbsp;&nbsp;号</div>
              <div class="ph-col-6 row-item text-left" style="padding-left:20px">{{ item.Number }}</div>
              <div class="ph-col-2 row-item text-right" @click="del(index)"><van-icon name="shanchu" /></div>
            </div>
            <div v-if="from ==='sub'" class="ph-row pdleft10">
              <div class="ph-col-4 row-item text-left text-left-color">车辆总人数</div>
              <div class="ph-col-6 row-item text-left" style="padding-left:20px">{{ item.PassengerAmount }}人</div>
              <div class="ph-col-2  empty" />
            </div>
            <van-divider v-if="index< cars.length-1" dashed />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarDetail',
  props: {
    cars: {
      type: Array,
      default() {
        return ['aaa', 'bbb']
      }
    },
    from: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    to() {
      this.$router.path('/book')
    },
    del(index) {
      this.cars.splice(index, 1)
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
  display: none;
}
.pdleft10{
  padding-left: 10px;
}
.mgleft10{
  margin-left: 10px;
}
.mgtop10{
  margin-top: 10px;
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
.text-center{
  text-align: center;
}
.text-left{
  text-align: left;
}
.text-right{
  text-align: right;
}
.text-left-color{
  color: #9393aa;
}
.van-divider{
  margin: 10px 0;
  border-color:#d7d7d8;
}
</style>
