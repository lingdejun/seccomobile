<template>
  <div style="width:100%">
    <div style="margin-bottom:46px">
      <van-nav-bar
        title="赛科访预约"
        left-arrow
        class="navbar"
        :fixed="true"
        @click-left="$router.back(-1)"
      />
    </div>
    <div style="padding:0px 24px 46px 24px;">
      <van-form v-if="active===0" ref="detailForm" v-model="form">
        <van-row>
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">预约日期</span>
        </van-row>
        <van-row class="time-row">
          <van-field
            v-model="form.AppointmentDate"
            left-icon="rili-s"
            clickable
            name="AppointmentDate"
            :rules="[{ required: true, message: '请选择日期' }]"
            @click="showCalendar = true"
          />
          <van-calendar v-model="showCalendar" :min-date="minDate" :max-date="maxDate" @confirm="onConfirm" />
        </van-row>
        <van-row style="margin-top:10px">
          <span style="margin-left:5px;color: #9393aa;">预计到达时间</span>
        </van-row>
        <van-row class="time-row">
          <van-field
            v-model="form.ArriveTime"
            left-icon="shijian"
            clickable
            readonly
            name="ArriveTime"
            :rules="[{ required: true, message: '请选择时间' }]"
            @click="showArriveTimePicker = true"
          />
          <van-popup v-model="showArriveTimePicker" position="bottom">
            <van-datetime-picker
              type="time"
              @confirm="onArriveTimeConfirm"
              @cancel="showArriveTimePicker = false"
            />
          </van-popup>
        </van-row>
        <van-row style="margin-top:10px">
          <span style="margin-left:5px;color: #9393aa;">预计离厂时间</span>
        </van-row>
        <van-row class="time-row">
          <van-field
            v-model="form.LeaveTime"
            left-icon="shijian"
            clickable
            readonly
            name="LeaveTime"
            :rules="[{ required: true, message: '请选择时间' }]"
            @click="showLeaveTimePicker = true"
          />
          <van-popup v-model="showLeaveTimePicker" position="bottom">
            <van-datetime-picker
              type="time"
              @confirm="onLeaveTimeConfirm"
              @cancel="showLeaveTimePicker = false"
            />
          </van-popup>
        </van-row>
        <van-row style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">接待人姓名</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="form.ReceiverName"
            right-icon="search-s"
            name="ReceiverName"
            :rules="[{ required: true, message: '请输入接待人姓名' }]"
            @click-right-icon="receiverNameSearch"
          />
          <van-popup v-model="showReceiverName" round position="bottom">
            <van-picker
              show-toolbar
              :columns="receiverNameList"
              @cancel="showReceiverName = false"
              @confirm="onReceiverNameConfirm"
            />
          </van-popup>
        </van-row>
        <van-row style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">访问事由</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="form.VipReason"
            readonly
            :rules="[{ required: true, message: '请选择事由' }]"
          />
        </van-row>
        <van-row style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">VIP人数</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="form.VipAmount"
            name="ReceiverName"
            type="number"
            :rules="[{ required: true, message: '请输入VIP人数' }]"
          />
        </van-row>
        <van-row style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">访问区域</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="area"
            readonly
            :rules="[{ required: true, message: '请选择区域' }]"
            @click="showArea = true"
          />
          <van-popup v-model="showArea" round position="bottom">
            <van-picker
              show-toolbar
              :columns="areaList"
              value-key="Key"
              @cancel="showArea = false"
              @confirm="onAreaConfirm"
            />
          </van-popup>
        </van-row>
        <van-row style="margin-top:10px">
          <span style="margin-left:5px;color: #9393aa;">备注</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="form.Remark"
            rows="2"
            autosize
            type="textarea"
            maxlength="50"
            show-word-limit
          />
        </van-row>
        <van-row type="flex" justify="center" style="margin-top:20px">
          <van-button type="info" style="margin-left:20px;border-radius:8px;width:70%" block @click="sub">提交</van-button>
        </van-row>
      </van-form>
    </div>
  </div>
</template>

<script>
// import VueStep from '@/componentsutils/vue-step'
import { getAreas, getReasons, getIdTypes, getReceiveName } from '@/api/controller'
import { subBook } from '@/api/book'

export default {
  name: 'SubVipBook',
  data() {
    return {
      active: 0,
      checkDetailFormFlag: false,
      showCalendar: false,
      showArea: false,
      showReceiverName: false,
      showArriveTimePicker: false,
      showLeaveTimePicker: false,
      minDate: '',
      maxDate: '',
      area: '',
      reason: '',
      form: {
        Category: '2',
        AppointmentDate: '',
        ArriveTime: '',
        LeaveTime: '',
        ReceiverName: '',
        Area: '',
        VipReason: 'Vip来访',
        VipAmount: '',
        Remark: ''
      },
      areaList: [],
      reasonList: [],
      receiverNameList: []
    }
  },
  created() {
    const now2 = new Date()
    console.log(now2.getFullYear() + '-' + (now2.getMonth() + 1) + '-' + now2.getDate())
    this.minDate = new Date(now2.getFullYear(), now2.getMonth(), now2.getDate())
    console.log(this.minDate.getFullYear() + '-' + (this.minDate.getMonth() + 1) + '-' + this.minDate.getDate())
    this.maxDate = new Date(now2.getFullYear() + 1, now2.getMonth(), now2.getDate())
    console.log(this.maxDate.getFullYear() + '-' + (this.maxDate.getMonth() + 1) + '-' + this.maxDate.getDate())
    getAreas().then(response => {
      this.areaList = response.Data
    })
    getReasons().then(response => {
      this.reasonList = response.Data
    })
    getIdTypes().then(response => {
      this.idTypeList = response.Data
    })
  },
  methods: {
    receiverNameSearch() {
      const data = {
        name: this.form.ReceiverName
      }
      getReceiveName(data).then(response => {
        this.receiverNameList = response.Data
        this.showReceiverName = true
      })
    },
    onConfirm(date) {
      this.form.AppointmentDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      this.showCalendar = false
    },
    onReceiverNameConfirm(data) {
      this.form.ReceiverName = data
      this.showReceiverName = false
    },
    onArriveTimeConfirm(time) {
      this.form.ArriveTime = time
      this.showArriveTimePicker = false
    },
    onLeaveTimeConfirm(time) {
      this.form.LeaveTime = time
      this.showLeaveTimePicker = false
    },
    onAreaConfirm(data) {
      this.area = data.Key
      this.form.Area = data.Value
      this.showArea = false
      console.log(data)
    },
    async checkDetailForm() {
      await this.$refs['detailForm'].validate().then(data => {
        console.log(data)
        this.checkDetailFormFlag = true
        console.log('succ')
      }).catch(err => {
        console.log('err')
        console.log(err)
        this.$toast.fail('预约信息有误')
      })
      console.log('checkDetailForm')
    },
    async sub() {
      await this.checkDetailForm()
      console.log('checkflag=' + this.checkDetailFormFlag)
      if (!this.checkDetailFormFlag) {
        console.log('checkflag2=' + this.checkDetailFormFlag)
        return
      }
      const data = {
        AppointmentInfo: this.form
      }
      subBook(data).then(response => {
        this.$toast({
          message: '提交成功',
          type: 'success'
        })
      })
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
