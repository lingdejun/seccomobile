<template>
  <div class="row">
    <div class="col-12 col-sm-6">
      <div class="ph-item">
        <div class="ph-col-12 pdright0">
          <div class="ph-row mgtop10">
            <div class="ph-col-4"><van-icon color="#1296db" name="che-s" /><span style="margin-left:10px;font-size:16px;font-weight:800">车辆信息</span></div>
            <div class="ph-col-8 empty" />
          </div>
          <div v-for="(item,index) in persons" :key="index">
            <div class="ph-row pdleft10">
              <div class="ph-col-6 row-item text-left text-left-color">车牌号</div>
              <div class="ph-col-6 row-item text-right">沪A99999</div>
            </div>
            <div class="ph-row pdleft10">
              <div class="ph-col-6 row-item text-left text-left-color">随车人数</div>
              <div class="ph-col-6 row-item text-right">1人</div>
            </div>
            <van-divider v-if="index< persons.length-1" dashed />
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
    persons: {
      type: Array,
      default() {
        return ['aaa', 'bbb']
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
