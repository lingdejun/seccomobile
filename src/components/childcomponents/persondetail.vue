<template>
  <div class="row">
    <div class="col-12 col-sm-6">
      <div class="ph-item">
        <div class="ph-col-12 pdright0">
          <div class="ph-row mgtop10">
            <div class="ph-col-4"><van-icon color="#1296db" name="renyuan1-s" /><span style="margin-left:10px;font-size:16px;font-weight:800">人员信息</span></div>
            <div class="ph-col-8 empty" />
          </div>
          <div v-for="(item,index) in persons" :key="index">
            <div class="ph-row mgleft10 mgtop10">
              <div class="ph-col-4">
                <van-icon v-if="index===0" color="#1296db" name="che-s" />
                <span :style="index==0?'margin-left:15px;font-size:16px;font-weight:800':'font-size:16px;font-weight:800'">{{ item.Name }}</span>
                <van-icon v-if="item.Gender==='1'" color="#1296db" name="nan-s" />
                <van-icon v-if="item.Gender==='0'" color="#ff7d97" name="nv-s" />
              </div>
              <div class="ph-col-8 empty" />
            </div>
            <van-divider dashed />
            <div v-if="from !=='sub'" class="ph-row pdleft10">
              <div class="ph-col-6  row-item text-left text-left-color">访客单位</div>
              <div class="ph-col-6 row-item text-right">{{ item.Company }}</div>
            </div>
            <div v-if="from !=='sub'" class="ph-row pdleft10">
              <div class="ph-col-6 row-item text-left text-left-color">联系电话</div>
              <div class="ph-col-6 row-item text-right">{{ item.Mobile }}</div>
            </div>
            <div v-if="from !=='sub'" class="ph-row pdleft10">
              <div class="ph-col-6 row-item text-left text-left-color">证件号</div>
              <div class="ph-col-6 row-item text-right">{{ item.IDNumber }}</div>
            </div>
            <div v-if="from ==='sub'" class="ph-row pdleft10">
              <div class="ph-col-2 row-item text-left text-left-color">访客单位</div>
              <div class="ph-col-8 row-item text-left" style="padding-left:20px">{{ item.Company }}</div>
              <div class="ph-col-2 row-item text-right" @click="del(index)"><van-icon name="shanchu" /></div>
            </div>
            <div v-if="from ==='sub'" class="ph-row pdleft10">
              <div class="ph-col-2 row-item text-left text-left-color">联系电话</div>
              <div class="ph-col-8 row-item text-left" style="padding-left:20px">{{ item.Mobile }}</div>
              <div class="ph-col-2 empty" />
            </div>
            <div v-if="from ==='sub'" class="ph-row pdleft10">
              <div class="ph-col-2 row-item text-left text-left-color">证件号</div>
              <div class="ph-col-8 row-item text-left" style="padding-left:20px">{{ item.IDNumber }}</div>
              <div class="ph-col-2 empty" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonDetail',
  props: {
    persons: {
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
      value: ''
    }
  },
  methods: {
    to() {
      this.$router.path('/book')
    },
    del(index) {
      this.persons.splice(index, 1)
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
