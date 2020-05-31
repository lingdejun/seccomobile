<template>
  <div style="width:100%; height:100%;overflow: hidden;">
    <div style="margin-bottom:46px">
      <van-nav-bar
        title="赛科访客培训"
        left-arrow
        class="navbar"
        :fixed="true"
        @click-left="$router.back(-1)"
      />
    </div>
    <div style="padding:10px 24px 20px 24px;">
      <h3>培训结果</h3>
      <van-image
        v-if="trainresult=== 1"
        style="text-align:center"
        :src="require('../assets/images/train/result@2x.png')"
      />
      <van-image
        v-if="trainresult=== 2"
        style="text-align:center"
        :src="require('../assets/images/train/result3@2x.png')"
      />
      <van-image
        v-if="trainresult=== 3"
        style="text-align:center"
        :src="require('../assets/images/train/result1@2x.png')"
      />
      <van-image
        v-if="trainresult=== -1"
        style="text-align:center"
        :src="require('../assets/images/train/result2@2x.png')"
      />
      <van-row type="flex" justify="center" style="margin-top:20px">
        <van-button type="info" style="margin-left:20px;border-radius:8px;width:70%" block @click="sub">进入培训</van-button>
      </van-row>
    </div>
  </div>
</template>

<script>
import { getTrainResult } from '@/api/train'

export default {
  name: 'TrainResult',
  data() {
    return {
      trainresult: '',
      date: ''
    }
  },
  created() {
    const data = JSON.parse(sessionStorage.getItem('querytrainparams'))
    getTrainResult(data).then(response => {
      this.trainresult = response.Data.Result
      this.date = response.Data.Result.ExpriedDate
    })
  },
  methods: {
    sub() {
      this.$router.push('/training')
    }
  }
}
</script>

<style lang="scss" scoped>

.navbar{
  background-color: #fafafa;
  z-index: 2;
}
.van-steps{
  background-color: transparent;
}
/deep/ .van-step--horizontal .van-step__circle-container{
  padding: 5px;
  border-radius: 100px;
}
.time-row .van-cell{
  background-color: transparent;
  border-bottom: 1px solid #dadbdb;
  padding: 10px 0px;
}

.round-row .van-cell{
  background-color: transparent;
  border: 1px solid #dadbdb;
  border-radius: 12px;
  line-height: unset;
}

</style>
