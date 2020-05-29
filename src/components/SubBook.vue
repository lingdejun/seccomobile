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
    <van-steps :active="active" active-color="#38f">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
    <div style="padding:0px 24px 30px 24px">
      <!-- <vue-step
        class="initHeight"
        :now-step="nowStep"
        :step-list="stepList"
      /> -->
      <h3>预约记录</h3>
      <van-row>
        <van-field
          v-model="value"
          left-icon="rili-s"
          clickable
          readonly
          name="calendar"
          placeholder="点击选择日期"
          @click="showCalendar = true"
        />
        <van-calendar v-model="showCalendar" :min-date="minDate" :max-date="maxDate" @confirm="onConfirm" />
      </van-row>

      <mu-form :model="form" class="mu-demo-form" label-position="top" label-width="100">
        <mu-date-input v-model="form.date" label-float type="date" full-width />
        <mu-form-item prop="date" label="预计到达时间">
          <mu-date-input v-model="form.date" type="time" />
        </mu-form-item>
        <mu-form-item prop="date" label="预计离厂时间">
          <mu-date-input v-model="form.date" type="time" />
        </mu-form-item>
        <mu-form-item prop="date" label="接待人姓名">
          <mu-text-field v-model="form.input" />
        </mu-form-item>
        <mu-form-item prop="date" label="接待人邮箱">
          <mu-text-field v-model="form.input" suffix="@secco.com" />
        </mu-form-item>
        <mu-form-item prop="date" label="申请人邮箱">
          <mu-text-field v-model="form.input" />
        </mu-form-item>
        <mu-form-item prop="date" label="访问区域">
          <mu-select v-model="form.select">
            <mu-option v-for="(option,index) in options" :key="index" :label="option.value" :value="option.index" />
          </mu-select>
          <mu-select v-model="form.select2">
            <mu-option v-for="(option,index) in options2" :key="index" :label="option" :value="option" />
          </mu-select>
        </mu-form-item>
        <mu-form-item prop="date" label="来访事由">
          <mu-select v-model="form.select2">
            <mu-option v-for="(option,index) in options2" :key="index" :label="option" :value="option" />
          </mu-select>
        </mu-form-item>
        <mu-form-item prop="date" label="备注">
          <mu-text-field v-model="form.remark" multi-line :rows="3" :rows-max="6" />
        </mu-form-item>

      </mu-form>
      <van-row type="flex" justify="center" style="margin-top:20px">
        <van-button type="info" style="border-radius:8px;width:70%" block @click="to">下一步</van-button>
      </van-row>
    </div>
  </div>
</template>

<script>
// import VueStep from '@/componentsutils/vue-step'
const now = new Date()
export default {
  name: 'SubBook',
  // components: {
  //   VueStep
  // },
  data() {
    return {
      active: 0,
      value: '',
      showCalendar: false,
      minDate: new Date(now.getFullYear, now.getMonth + 1, now.getDate),
      maxDate: new Date(now.getFullYear + 1, now.getMonth + 1, now.getDate),
      bookList: [],
      nowStep: 2,
      stepList: [
        'First Step',
        'Second Step',
        'Third Step',
        'Four Step'
      ],
      form: {},
      options: [
        {
          value: '远东',
          index: 0
        },
        {
          value: '漕河泾工厂',
          index: 1
        }
      ],
      options2: ['options1', 'options2']
    }
  },
  created() {
    console.log(this.minDate)
    console.log(this.maxDate)
  },
  methods: {
    to() {
      this.$router.push('/subbook')
    },
    vipto() {
      this.$router.push('/subvipbook')
    },
    onConfirm(date) {
      this.value = date.getFullYear + '-' + (date.getMonth + 1) + '-' + date.getDate
      console.log(1)
    }
  }
}
</script>

<style  scoped>
.navbar{
  background-color: #f8f9f9;
}

.van-steps--horizontal {
    padding: 10px 24px 0px 24px;
}
.mu-form-item-label{
  font-size: 12px;
  line-height: 15px;
}
.mu-form-item__has-label{
  line-height: 48px;
  min-height: 0px;
}
.mu-form-item{
  margin-bottom: 10px;
  padding-bottom: 0px;
}
.mu-input  .has-icon{
  padding-left: 32px;
}
.mu-input-icon {
  left: 0
}
</style>
