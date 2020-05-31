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
      <van-form ref="detailForm" v-model="form">
        <h3>预约记录</h3>
        <van-row style="margin-top:10px">
          <span style="margin-left:5px;color: #9393aa;">姓名</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="form.Name"
            placeholder="请输入姓名"
            :rules="[{ required: true, message: '请输入姓名' }]"
          />
        </van-row>
        <van-row style="margin-top:10px">
          <span style="margin-left:5px;color: #9393aa;">性别</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-radio-group v-model="form.Gender" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="0">女</van-radio>
          </van-radio-group>
        </van-row>
        <van-row style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">国籍</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="form.Nation"
            placeholder="请输入国籍"
          />
        </van-row>
        <van-row style="margin-top:10px">
          <span style="margin-left:5px;color: #9393aa;">证件类型</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="idType"
            readonly
            placeholder="请选择证件类型"
            :rules="[{ required: true, message: '请选择证件类型' }]"
            @click="showIdType = true"
          />
          <van-popup v-model="showIdType" round position="bottom">
            <van-picker
              show-toolbar
              :columns="idTypeList"
              value-key="Key"
              @cancel="showIdType = false"
              @confirm="onIdTypeConfirm"
            />
          </van-popup>
        </van-row>
        <van-row style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">证件号</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="form.IDNumber"
            placeholder="请输入证件号"
            :rules="[{ required: true, message: '请输入证件号' }]"
          />
        </van-row>
        <van-row style="margin-top:10px">
          <span style="margin-left:5px;color: #9393aa;">培训内容</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-radio-group v-model="form.Category" direction="horizontal">
            <van-radio name="1">访客培训</van-radio>
            <van-radio name="2">驾驶员培训</van-radio>
          </van-radio-group>
        </van-row>
      </van-form>

      <van-row type="flex" justify="center" style="margin-top:20px">
        <van-button type="info" style="margin-left:20px;border-radius:8px;width:70%" block @click="sub">查询培训结果</van-button>
      </van-row>
    </div>
  </div>
</template>

<script>
// import VueStep from '@/componentsutils/vue-step'
import { getIdTypes } from '@/api/controller'

export default {
  name: 'Train',
  data() {
    return {
      idType: '',
      showIdType: false,
      form: {
        Name: '',
        Gender: '1',
        Nation: '',
        IDType: '',
        IDNumber: '',
        Category: ''
      },
      idTypeList: []
    }
  },
  created() {
    getIdTypes().then(response => {
      this.idTypeList = response.Data
    })
  },
  methods: {
    onIdTypeConfirm(data) {
      this.idType = data.Key
      this.form.IDType = data.Value
      this.showIdType = false
      console.log(data)
    },
    sub() {
      sessionStorage.setItem('querytrainparams', JSON.stringify(this.form))
      this.$router.push('/trainresult')
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
