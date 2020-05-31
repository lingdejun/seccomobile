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
      <van-steps :active="active" active-color="#38f">
        <van-step>预约信息</van-step>
        <van-step>人员信息</van-step>
        <van-step>车辆信息</van-step>
        <van-step>提交</van-step>
      </van-steps>
      <van-form v-if="active===0" ref="detailForm" v-model="form">
        <h3>预约记录</h3>
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
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">接待人邮箱</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="form.ReceiveEmail"
            name="ReceiveEmail"
            :error-message="receiveEmailErrMessage"
            :rules="[{ required: true, message: '请输入接待人邮箱' }]"
            @blur="checkReceiveEmail"
          >
            <template #extra>
              @secco.com.cn
            </template>`
          </van-field>
        </van-row>
        <van-row style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">申请人邮箱</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="form.ApplicantEmail"
            name="ApplicantEmail"
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
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">访问事由</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="reason"
            readonly
            :rules="[{ required: true, message: '请选择事由' }]"
            @click="showReason = true"
          />
          <van-popup v-model="showReason" round position="bottom">
            <van-picker
              show-toolbar
              :columns="reasonList"
              value-key="Key"
              @cancel="showReason = false"
              @confirm="onReasonConfirm"
            />
          </van-popup>
        </van-row>
        <van-row style="margin-top:10px">
          <span style="margin-left:5px;color: #9393aa;">是否需要办理化工区通行证</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-radio-group v-model="form.CIAPass" direction="horizontal">
            <van-radio name="1">需要</van-radio>
            <van-radio name="0">不需要</van-radio>
          </van-radio-group>
        </van-row>
        <van-row style="margin-top:10px">
          <span v-if="requireRemark" style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">备注</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="form.Remark"
            rows="2"
            autosize
            type="textarea"
            maxlength="50"
            show-word-limit
            :error-message="remarkErrMessgae"
            @blur="checkRemark"
          />
        </van-row>
      </van-form>
      <van-row v-if="active===1">
        <h3>人员信息</h3>
        <persondetail-simple v-if="persons.length > 0" :persons="persons" :from="from" />
        <van-row type="flex" justify="center" style="margin-top:10px">
          <van-button icon="renyuan" type="info" style="border-radius:8px;width:70%" block @click="personFormVisable=true">添加人员</van-button>
        </van-row>
      </van-row>
      <van-row v-if="active===2">
        <h3>车辆信息</h3>
        <cardetail-simple v-if="cars.length > 0" :cars="cars" :from="from" />
        <van-row type="flex" justify="center" style="margin-top:10px">
          <van-button icon="che-s" type="info" style="border-radius:8px;width:70%" block @click="carFormVisable=true">添加车辆</van-button>
        </van-row>
      </van-row>
      <van-row v-if="active===3" style="margin-top:10px">
        <book-detail />
        <person-detail :persons="persons" />
        <car-detail :cars="cars" />
      </van-row>

      <van-form v-if="personFormVisable" ref="personForm" v-model="personform">
        <van-row style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">访客企业</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="personform.Company"
            placeholder="请输入企业名称"
            :rules="[{ required: true, message: '请输入访客企业' }]"
          />
        </van-row>
        <van-row style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">姓名</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="personform.Name"
            placeholder="请输入姓名"
            :rules="[{ required: true, message: '请输入姓名' }]"
          />
        </van-row>
        <van-row style="margin-top:10px">
          <span style="margin-left:5px;color: #9393aa;">性别</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-radio-group v-model="personform.Gender" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="0">女</van-radio>
          </van-radio-group>
        </van-row>
        <van-row style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">联系电话</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="personform.Mobile"
            type="phone"
            placeholder="请输入联系电话"
            :rules="[{ required: true, message: '号码格式错误' }]"
          />
        </van-row>
        <van-row style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">国籍</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="personform.Nation"
            :rules="[{ required: true, message: '请选择国籍' }]"
          >
            <van-popup v-model="showNation" round position="bottom">
              <van-picker
                show-toolbar
                :columns="nationList"
                @cancel="showNation = false"
                @confirm="onNationConfirm"
              />
            </van-popup>
          </van-field>
        </van-row>
        <van-row style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">证件类型</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="idType"
            readonly
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
            v-model="personform.IDNumber"
            :rules="[{ required: true, message: '请输入证件号' }]"
          />
        </van-row>
        <van-row style="margin-top:10px">
          <span style="margin-left:5px;color: #9393aa;">是否需要驾车进入化工区</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-radio-group v-model="personform.CIAVehicle" direction="horizontal">
            <van-radio name="1">是</van-radio>
            <van-radio name="0">否</van-radio>
          </van-radio-group>
        </van-row>
        <van-row v-if="healthNeed===1" style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">人员类型</span>
        </van-row>
        <van-row v-if="healthNeed===1" class="round-row" style="margin-top:10px">
          <van-field
            v-model="healthCategory"
            readonly
            :rules="[{ required: true, message: '请选择人员类型' }]"
            @click="showPersonType = true"
          />
          <van-popup v-model="showPersonType" round position="bottom">
            <van-picker
              show-toolbar
              :columns="healthPersonTypeList"
              value-key="name"
              @cancel="showPersonType = false"
              @confirm="onPersonTypeConfirm"
            />
          </van-popup>
        </van-row>
        <van-row v-if="healthNeed===1" style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">生日</span>
        </van-row>
        <van-row v-if="healthNeed===1" class="round-row" style="margin-top:10px">
          <van-field
            v-model="healthBirthday"
            left-icon="rili-s"
            clickable
            name=""
            :rules="[{ required: true, message: '请选择生日' }]"
            @click="showBirth = true"
          />
          <van-calendar v-model="showBirth" @confirm="onBirthConfirm" />
        </van-row>
        <van-row v-if="healthNeed===1" style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">住址</span>
        </van-row>
        <van-row v-if="healthNeed===1" class="round-row" style="margin-top:10px">
          <van-field
            v-model="healthAddress"
            :rules="[{ required: true, message: '请输入住址' }]"
          />
        </van-row>
        <van-row v-if="healthNeed===1" style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">近14天是否离沪外出</span>
        </van-row>
        <van-row v-if="healthNeed===1" class="round-row" style="margin-top:10px">
          <van-radio-group v-model="healthHasLeave" direction="horizontal">
            <van-radio name="1">是</van-radio>
            <van-radio name="0">否</van-radio>
          </van-radio-group>
        </van-row>

        <van-row v-if="healthNeed===1 && healthHasLeave==='1'" style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">外出地点省市或境外国家</span>
        </van-row>
        <van-row v-if="healthNeed===1 && healthHasLeave==='1'" class="round-row" style="margin-top:10px">
          <van-field
            v-model="healthDestination"
            :error-message="errhealthDestinationMsg"
          />
        </van-row>
        <van-row v-if="healthNeed===1 && healthHasLeave==='1'" style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">外出时间</span>
        </van-row>
        <van-row v-if="healthNeed===1 && healthHasLeave==='1'" class="round-row" style="margin-top:10px">
          <van-field
            v-model="healthLeaveTime"
            left-icon="rili-s"
            clickable
            name=""
            :error-message="errhealthLeaveTimeMsg"
            @click="showhealthLeaveTime = true"
          />
          <van-calendar v-model="showhealthLeaveTime" @confirm="onHealthLeaveTimeConfirm" />
        </van-row>
        <van-row v-if="healthNeed===1 && healthHasLeave==='1'" style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">返沪时间</span>
        </van-row>
        <van-row v-if="healthNeed===1 && healthHasLeave==='1'" class="round-row" style="margin-top:10px">
          <van-field
            v-model="healthReturnTime"
            left-icon="rili-s"
            clickable
            name=""
            :error-message="errhealthReturnTimeMsg"
            @click="showhealthReturnTime = true"
          />
          <van-calendar v-model="showhealthReturnTime" @confirm="onHealthReturnTimeConfirm" />
        </van-row>

        <van-row v-if="healthNeed===1 && healthHasLeave==='1'" style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">是否疫情重点地区返沪</span>
        </van-row>
        <van-row v-if="healthNeed===1 && healthHasLeave==='1'" class="round-row" style="margin-top:10px">
          <van-radio-group v-model="healthIsHit" direction="horizontal">
            <van-radio name="1">是</van-radio>
            <van-radio name="0">否</van-radio>
          </van-radio-group>
        </van-row>
        <van-row v-if="healthNeed===1 && healthHasLeave==='1'" style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">居家/集中隔离</span>
        </van-row>
        <van-row v-if="healthNeed===1 && healthHasLeave==='1'" class="round-row" style="margin-top:10px">
          <van-radio-group v-model="healthIsolation" direction="horizontal">
            <van-radio name="1">居家隔离</van-radio>
            <van-radio name="2">集中隔离</van-radio>
          </van-radio-group>
        </van-row>

        <van-row v-if="healthNeed===1 && healthHasLeave==='1'" style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">隔离观察解除时间</span>
        </van-row>
        <van-row v-if="healthNeed===1 && healthHasLeave==='1'" class="round-row" style="margin-top:10px">
          <van-field
            v-model="healthRelieveTime"
            left-icon="rili-s"
            clickable
            name=""
            :error-message="errhealthRelieveTimeMsg"
            @click="showhealthRelieveTime= true"
          />
          <van-calendar v-model="showhealthRelieveTime" @confirm="onHealthRelieveTimeConfirm" />
        </van-row>

        <van-row type="flex" justify="center" style="margin-top:20px">
          <van-button type="default" plain style="border-radius:8px;width:40%" block @click="personFormCancel">取消</van-button>
          <van-button type="info" plain style="margin-left:20px;border-radius:8px;width:40%" block @click="onBookPersonFormSubmit">保存</van-button>
        </van-row>
      </van-form>
      <van-form v-if="carFormVisable" ref="carForm" v-model="carform">
        <van-row style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">车牌号</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="carform.Number"
            placeholder="请输入车牌号"
            :rules="[{ required: true, message: '请输入车牌号' }]"
          />
        </van-row>
        <van-row style="margin-top:10px">
          <span style="color:red">*</span><span style="margin-left:5px;color: #9393aa;">车辆总人数</span>
        </van-row>
        <van-row class="round-row" style="margin-top:10px">
          <van-field
            v-model="carform.PassengerAmount"
            placeholder="请输入车辆总人数"
            type="number"
            :rules="[{ required: true, message: '请输入车辆总人数' }]"
          />
        </van-row>
        <van-row type="flex" justify="center" style="margin-top:20px">
          <van-button type="default" plain style="border-radius:8px;width:40%" block @click="carFormCancel">取消</van-button>
          <van-button type="info" plain style="margin-left:20px;border-radius:8px;width:40%" block @click="onBookCarFormSubmit">保存</van-button>
        </van-row>
      </van-form>
      <van-row type="flex" justify="center" style="margin-top:20px">
        <van-button v-if="active!=0" type="info" plain style="border-radius:8px;width:70%" block @click="perStep">上一步</van-button>
        <van-button v-if="active<3" type="info" style="margin-left:20px;border-radius:8px;width:70%" block @click="nextStep">下一步</van-button>
        <van-button v-if="active==3" type="info" style="margin-left:20px;border-radius:8px;width:70%" block @click="sub">提交</van-button>
      </van-row>
    </div>
  </div>
</template>

<script>
// import VueStep from '@/componentsutils/vue-step'
import { getAreas, getReasons, getIdTypes, getReceiveName, checkReceiveEmail, gethealth } from '@/api/controller'
import { blackvalid } from '@/api/black'
import { subBook } from '@/api/book'
import bookDetail from '@/components/childcomponents/bookdetail'
import persondetailSimple from '@/components/childcomponents/persondetailsimple'
import cardetailSimple from '@/components/childcomponents/cardetailsimple'
export default {
  name: 'SubBook',
  components: {
    bookDetail,
    persondetailSimple,
    cardetailSimple
  },
  data() {
    return {
      active: 2,
      value: '',
      from: 'sub',
      receiveEmailErrMessage: '',
      remarkErrMessgae: '',
      errhealthDestinationMsg: '',
      errhealthLeaveTimeMsg: '',
      errhealthReturnTimeMsg: '',
      errhealthRelieveTimeMsg: '',
      requireRemark: false,
      checkDetailFormFlag: false,
      showCalendar: false,
      showArea: false,
      showReason: false,
      showNation: false,
      showIdType: false,
      showReceiverName: false,
      showArriveTimePicker: false,
      showLeaveTimePicker: false,
      showPersonType: false,
      showBirth: false,
      showhealthLeaveTime: false,
      showhealthReturnTime: false,
      showhealthRelieveTime: false,
      minDate: '',
      maxDate: '',
      area: '',
      reason: '',
      idType: '',
      form: {
        Category: '1',
        AppointmentDate: '',
        ArriveTime: '',
        LeaveTime: '',
        ReceiverName: '',
        ReceiveEmail: '',
        ApplicantEmail: '',
        Area: '',
        Reason: '',
        CIAPass: '0',
        Remark: ''
      },
      personform: {
        Company: '',
        Name: '',
        Gender: '1',
        Mobile: '',
        Nation: '',
        IDType: '',
        IDNumber: '',
        CIAVehicle: '0'
      },
      carform: {
        Number: '',
        PassengerAmount: ''
      },
      persons: [],
      cars: [],
      areaList: [],
      reasonList: [],
      nationList: ['中国', '美国'],
      idTypeList: [],
      receiverNameList: [],
      healthPersonTypeList: [
        {
          id: '1',
          name: '企业员工'
        },
        {
          id: '2',
          name: '承包商'
        },
        {
          id: '3',
          name: '供货商'
        },
        {
          id: '4',
          name: '访客'
        },
        {
          id: '5',
          name: '临时工作'
        }
      ],
      personFormVisable: false,
      carFormVisable: false,
      healthNeed: 0,
      healthCategory: '',
      healthCategoryId: '',
      healthBirthday: '',
      healthAddress: '',
      healthHasLeave: '1',
      healthDestination: '',
      healthLeaveTime: '',
      healthReturnTime: '',
      healthIsHit: '',
      healthIsolation: '',
      healthRelieveTime: ''
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
    gethealth().then(response => {
      this.healthNeed = response.Data
    })
  },
  methods: {
    emailValid(val) {
      return /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/.test(val)
    },
    nextstep() {
      this.active++
      console.log('next')
    },
    vipto() {
      this.$router.push('/subvipbook')
    },
    receiverNameSearch() {
      const data = {
        name: this.form.ReceiverName
      }
      getReceiveName(data).then(response => {
        this.receiverNameList = response.Data
        this.showReceiverName = true
      })
    },
    checkReceiveEmail() {
      if (this.form.ReceiveEmail === '') {
        this.receiveEmailErrMessage = ''
        return
      }
      const data = {
        email: this.form.ReceiveEmail + '@secco.com.cn'
      }
      checkReceiveEmail(data).then(response => {
        if (response.Data === 0) {
          this.receiveEmailErrMessage = '接待人邮箱有误'
        } else {
          this.receiveEmailErrMessage = ''
        }
      })
    },
    checkRemark() {
      if (this.requireRemark && this.form.Remark === '') {
        this.remarkErrMessgae = '请填写备注'
      } else {
        this.remarkErrMessgae = ''
      }
    },
    resetPersonForm() {
      this.personform = {
        Company: '',
        Name: '',
        Gender: '1',
        Mobile: '',
        Nation: '',
        IDType: '',
        IDNumber: '',
        CIAVehicle: '0'
      }
      this.idType = ''
      this.healthCategory = ''
      this.healthCategoryId = ''
      this.healthBirthday = ''
      this.healthAddress = ''
      this.healthHasLeave = '1'
      this.healthDestination = ''
      this.healthLeaveTime = ''
      this.healthReturnTime = ''
      this.healthIsHit = ''
      this.healthIsolation = ''
      this.healthRelieveTime = ''
    },
    resetCarForm() {
      this.carform = {
        Number: '',
        PassengerAmount: ''
      }
    },
    onConfirm(date) {
      this.form.AppointmentDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      this.showCalendar = false
      console.log(this.value)
    },
    onBirthConfirm(date) {
      this.healthBirthday = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      this.showBirth = false
      console.log(this.value)
    },
    onHealthLeaveTimeConfirm(date) {
      this.healthLeaveTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      this.showhealthLeaveTime = false
      console.log(this.value)
    },
    onHealthReturnTimeConfirm(date) {
      this.healthReturnTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      this.showhealthReturnTime = false
      console.log(this.value)
    },
    onHealthRelieveTimeConfirm(date) {
      this.healthRelieveTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      this.showhealthRelieveTime = false
      console.log(this.value)
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
    onReasonConfirm(data) {
      this.reason = data.Key
      this.form.Reason = data.Value
      this.showReason = false
      this.requireRemark = data.RemarkRequired === 1
      console.log(this.requireRemark)
      console.log(data)
    },
    onNationConfirm(data) {
      this.personform.nation = data
    },
    onIdTypeConfirm(data) {
      this.idType = data.Key
      this.personform.IDType = data.Value
      this.showIdType = false
      console.log(data)
    },
    onPersonTypeConfirm(data) {
      this.healthCategory = data.name
      this.healthCategoryId = data.id
      this.showPersonType = false
    },
    perStep() {
      this.personFormVisable = false
      this.carFormVisable = false
      this.resetPersonForm()
      this.resetCarForm()
      this.active--
      console.log('perStep')
    },
    async nextStep() {
      if (this.active === 0) {
        await this.checkDetailForm()
        console.log('checkflag=' + this.checkDetailFormFlag)
        if (!this.checkDetailFormFlag) {
          console.log('checkflag2=' + this.checkDetailFormFlag)
          return
        }
        console.log('checkflag3=' + this.checkDetailFormFlag)
      }
      if (this.active === 1) {
        if (this.persons.length === 0) {
          this.$toast.fail('请添加人员信息')
          return
        }
      }
      if (this.active === 2) {
        if (this.cars.length === 0) {
          this.$toast.fail('请添加车辆信息')
          return
        }
      }
      this.personFormVisable = false
      this.carFormVisable = false
      this.resetPersonForm()
      this.resetCarForm()
      this.active++
      console.log('nextStep')
    },
    async checkDetailForm() {
      if (this.receiveEmailErrMessage !== '') {
        this.$toast.fail('预约信息有误')
        return
      }
      if (this.requireRemark && this.form.Remark === '') {
        this.remarkErrMessgae = '请填写备注'
        this.$toast.fail('预约信息有误')
        return
      }
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
    onBookPersonFormSubmit() {
      let checkflag = true
      if (this.healthNeed === 1 && this.healthHasLeave === '1') {
        if (this.healthDestination === '') {
          this.errhealthDestinationMsg = '请输入外出地点省市或境外国家'
          checkflag = false
        }
        if (this.healthLeaveTime === '') {
          this.errhealthLeaveTimeMsg = '请选择外出时间'
          checkflag = false
        }
        if (this.healthReturnTime === '') {
          this.errhealthReturnTimeMsg = '请选择返沪时间'
          checkflag = false
        }
        if (this.healthRelieveTime === '') {
          this.errhealthRelieveTimeMsg = '请选择隔离观察解除时间'
          checkflag = false
        }
      }
      if (!checkflag) {
        this.$toast.fail('人员信息有误')
      }

      this.$refs['personForm'].validate().then(data => {
        console.log('success')
        const params = {
          idType: this.personform.IDType,
          idNumber: this.personform.IDNumber
        }
        // 验证是否在黑名单中
        blackvalid(params).then(response => {
          if (response.Data !== 1) {
            this.persons.push(this.personform)
            this.resetPersonForm()
            this.personFormVisable = false
          } else {
            this.$toast.fail('此人在黑名单中，无法提交')
          }
        })
      }).catch(err => {
        console.log('err')
        console.log(err)
      })
      console.log(this.persons)
    },
    personFormCancel() {
      this.personFormVisable = false
      this.resetPersonForm()
      this.$refs['personForm'].resetValidation()
    },
    onBookCarFormSubmit() {
      console.log(this.cars)
      this.$refs['carForm'].validate().then(data => {
        console.log('success')
        this.cars.push(this.carform)
        this.resetCarForm()
        this.carFormVisable = false
      }).catch(err => {
        console.log('err')
        console.log(err)
      })
    },
    carFormCancel() {
      this.carFormVisable = false
      this.resetPersonForm()
      this.$refs['carForm'].resetValidation()
    },
    sub() {
      this.form.ReceiveEmail = this.form.ReceiveEmail + '@secco.com.cn'
      const data = {
        AppointmentInfo: this.form,
        VisitorInfo: this.persons,
        VehicleInfo: this.cars
      }
      subBook(data).then(response => {
        this.$toast({
          message: '提交成功',
          type: 'success'
        })
        this.$router.push('/book')
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
