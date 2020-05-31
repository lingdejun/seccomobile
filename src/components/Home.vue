<template>
  <div style="width:100%;height:100%;overflow:hidden">
    <div style="width:100%">
      <img style="margin-top:2rem;margin-left:2rem;" src="../assets/images/index/logo.png">
    </div>
    <div style="width:100%;text-align:center;margin-top:-30px;opacity:0.7">
      <img src="../assets/images/index/openscreen.png">
    </div>
    <div style="width:100%;text-align:center">
      <img src="../assets/images/index/font.png">
    </div>
    <div v-if="bingState===1" style="width:100%;text-align:center;margin-top: 50px;">
      <img src="../assets/images/index/btn01.png" @click="to">
    </div>
    <van-row v-if="bingState===0" type="flex" justify="center" style="margin-top:35px;padding-left:20px;padding-right:20px">
      <van-button type="info" style="border-radius:8px;width:50%" block @click="bingcus()">访客绑定</van-button>
      <van-button type="info" style="margin-left:20px;border-radius:8px;width:50%" block @click="show=true">员工绑定</van-button>
    </van-row>

    <div v-if="bingState===1" style="width:100%;text-align:center;margin-top: -10px;">
      <input v-model="read" type="checkbox"> <span>我已阅读<a style="color:#24599b;text-decoration: underline;">访客须知</a></span>
    </div>

    <van-dialog v-model="show" title="员工绑定" show-cancel-button @confirm="bing">
      <template #default>
        <van-row class="round-row" style="margin-top:10px;">
          <van-field
            v-model="email"
            name="email"
            placeholder="请输入邮箱"
          />
        </van-row>
      </template>`
    </van-dialog>

    <!-- <van-form v-if="empbingform" ref="carForm" v-model="empform">
      <van-row style="margin-top:10px">
        <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">邮箱</span>
      </van-row>
      <van-row class="round-row" style="margin-top:10px">
        <van-field
          v-model="form.email"
          name="email"
          :rules="[{ validator: emailValid, message: '邮箱格式错误' }]"
        />
      </van-row>
      <van-row type="flex" justify="center" style="margin-top:20px; padding-left:20px;padding-right:20px">
        <van-button type="default" plain style="border-radius:8px;width:40%" block @click="empbingform=false">取消</van-button>
        <van-button type="info" plain style="margin-left:20px;border-radius:8px;width:40%" block @click="bing">绑定</van-button>
      </van-row>
    </van-form> -->
  </div>
</template>

<script>
import { getOpenId, validateBinding, login, bindvisitor, bindemp } from '@/api/home'
export default {
  name: 'Home',
  data() {
    return {
      code: '',
      openId: '',
      bingState: 1,
      empbingform: false,
      show: false,
      email: '',
      read: false
    }
  },
  created() {
    this.code = this.$route.query.code
    this.openid()
  },
  methods: {
    to() {
      if (!this.read) {
        this.$toast({
          message: '阅读访客须知',
          type: 'faile'
        })
        return
      }
      const data = {
        openId: this.openId
      }
      login(data).then(response => {
        sessionStorage.setItem('loginid', JSON.stringify(response.Data))
        this.$router.push('/book')
      })
    },
    emailValid(val) {
      return /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/.test(val)
    },
    openid() {
      const data = {
        code: this.code
      }
      getOpenId(data).then(response => {
        this.openId = response.Data
        const bind = {
          openId: response.Data
        }
        validateBinding(bind).then(response => {
          this.bingState = response.Data
        })
      })
    },
    bingcus() {
      const data = {
        openId: this.openId
      }
      bindvisitor(data).then(response => {
        this.$toast({
          message: '绑定成功',
          type: 'success'
        })
        this.bingState = 0
      })
    },
    bing() {
      const form = {
        openId: this.openId,
        email: this.email
      }
      bindemp(form).then(response => {
        this.empbingform = false
        this.$toast({
          message: '绑定成功',
          type: 'success'
        })
        this.bingState = 0
      })
    }
  }
}
</script>
<style scoped>

</style>
