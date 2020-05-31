<template>
  <div>
    <van-row v-for="(question,index) in questions" :key="index" style="margin-top:20px">
      <van-row>
        {{ question.QuestionIndex }}.{{ question.QuestionTitle }}
      </van-row>
      <div v-if="question.QuestionCategory===1||question.QuestionCategory===7">
        <van-row v-for="(item,ind) in question.OptionList" :key="ind">
          <van-row type="flex" justify="center" style="margin-top:5px">
            <van-button :type="check(question.QuestionId, item.OptionId)?'info':'default'" style="margin-left:20px;border-radius:8px;width:50%" block @click="check1(item,question.QuestionId)">{{ item.OptionTitle }}</van-button>
          </van-row>
        </van-row>
      </div>
      <div v-if="question.QuestionCategory===3">
        <van-row v-for="(item,ind) in question.OptionList" :key="ind">
          <van-row gutter="20" style="margin-top:5px">
            <van-col span="8"><van-button :type="check(question.QuestionId, item.OptionId)?'info':'default'" style="border-radius:8px;" block @click="check1(item,question.QuestionId)">{{ item.OptionTitle }}</van-button></van-col>
            <van-col span="12">
              <van-image
                fit="contain"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </van-col>
          </van-row>
        </van-row>
      </div>
      <div v-if="question.QuestionCategory===2">
        <van-row v-for="(item,ind) in question.OptionList" :key="ind">
          <van-row type="flex" justify="center" style="margin-top:5px">
            <van-button :type="checkmuti(question.QuestionId, item.OptionId)?'info':'default'" style="margin-left:20px;border-radius:8px;width:50%" block @click="check2(item,question.QuestionId)">{{ item.OptionTitle }}</van-button>
          </van-row>
        </van-row>
      </div>
      <div v-if="question.QuestionCategory===4">
        <van-row v-for="(item,ind) in question.OptionList" :key="ind">
          <van-row gutter="20" style="margin-top:5px">
            <van-col span="8"><van-button :type="checkmuti(question.QuestionId, item.OptionId)?'info':'default'" style="border-radius:8px;" block @click="check2(item,question.QuestionId)">{{ item.OptionTitle }}</van-button></van-col>
            <van-col span="12">
              <van-image
                fit="contain"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </van-col>
          </van-row>
          <!-- <van-row type="flex" justify="center" style="margin-top:5px">
            <van-button :type="check(question.QuestionId, item.OptionId)?'info':'default'" style="margin-left:20px;border-radius:8px;width:50%" block @click="check2(item,question.QuestionId)">{{ item.OptionTitle }}</van-button>
          </van-row> -->
        </van-row>
      </div>
      <van-divider color="#e6eaf0" dashed />
    </van-row>
    <van-row type="flex" justify="center" style="margin-top:20px">
      <van-button type="info" style="margin-left:20px;border-radius:8px;width:70%" block @click="sub">提交</van-button>
    </van-row>
  </div>
</template>

<script>
import { submit } from '@/api/train'

export default {
  name: 'List',
  props: {
    questions: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      value: '',
      list: ['111', '2222'],
      container1: [],
      container2: [],
      state: 'primary',
      form: {
        Name: '',
        Gender: '1',
        Nation: '',
        IDType: '',
        IDNumber: '',
        Category: ''
      },
      answers: []
    }
  },
  created() {
    this.transformation()
    this.form = JSON.parse(sessionStorage.getItem('querytrainparams'))
  },
  methods: {
    transformation() {
      console.log('created')
      console.log(this.container2.length)
      const qus = this.questions.filter(item => {
        return item.QuestionCategory === 2 || item.QuestionCategory === 4
      })
      const qus2 = this.questions.filter(item => {
        return item.QuestionCategory === 1 || item.QuestionCategory === 3 || item.QuestionCategory === 7
      })
      for (let i = 0, mutI = qus.length; i < mutI; ++i) {
        this.container2.push({
          QuestionId: qus[i].QuestionId,
          OptionList: []
        })
      }
      for (let i = 0, mutI = qus2.length; i < mutI; ++i) {
        this.container1.push({
          QuestionId: qus2[i].QuestionId,
          OptionList: []
        })
      }
      console.log('transformation')
      console.log(this.container1)
      console.log(this.container2)
    },
    check(questionId, optionId) {
      let flag = false
      const container = this.container1.filter(item => {
        return item.QuestionId === questionId
      })
      console.log('eheck 11')
      console.log(container)
      const option = container[0].OptionList.filter(item => {
        return item === optionId
      })
      // console.log('bb')
      console.log(option)
      if (option !== null && option !== undefined && option.length > 0) {
        flag = true
      }
      return flag
    },
    checkmuti(questionId, optionId) {
      // console.log('aa')
      let flag = false
      const container = this.container2.filter(item => {
        return item.QuestionId === questionId
      })
      const option = container[0].OptionList.filter(item => {
        return item === optionId
      })
      // console.log('bb')
      // console.log(option)
      if (option !== null && option !== undefined && option.length > 0) {
        flag = true
      }
      return flag
    },
    check1(option, questionId) {
      let containIndex = -1
      this.container1.forEach((item, index) => {
        if (item.QuestionId === questionId) {
          containIndex = index
          return false
        }
      })
      this.container1[containIndex].QuestionId = questionId
      this.container1[containIndex].OptionList = [option.OptionId]
      console.log('check1')
      console.log(this.container1)
    },
    check2(option, questionId) {
      // console.log('cc')
      //   const arrIndex = this.container2[index].indexOf(itm.OptionId)
      // let arrIndex = -1
      // this.container2.forEach((items, rowindex) => {
      //   if (rowindex !== index) {
      //     console.log('check index=' + index + 'rowindex=' + rowindex)
      //     return true
      //   }
      //   items.forEach((item, rowindex2) => {
      //     if (item === itm.OptionId) {
      //       arrIndex = rowindex2
      //       return false
      //     }
      //   })
      // })
      // console.log(arrIndex)
      // if (arrIndex > -1) {
      //   this.container2[index].splice(arrIndex, 1)
      // } else {
      //   this.container2.filter(item => {
      //     return item.questionId
      //   })
      // }
      let containIndex = -1
      this.container2.forEach((item, index) => {
        if (item.QuestionId === questionId) {
          containIndex = index
          return false
        }
      })
      let optionIndex = -1
      // console.log('dd')
      // console.log(this.container2)
      if (this.container2[containIndex].OptionList.length > 0) {
        this.container2[containIndex].OptionList.forEach((item, index) => {
          if (item === option.OptionId) {
            optionIndex = index
            return false
          }
        })
        console.log('optionIndex=' + optionIndex)
        if (optionIndex >= 0) {
          this.container2[containIndex].OptionList.splice(optionIndex, 1)
        } else {
          this.container2[containIndex].OptionList.push(option.OptionId)
        }
      } else {
        this.container2[containIndex].OptionList.push(option.OptionId)
      }
    },
    sub() {
      this.answers = this.answers.concat(this.container1)
      this.answers = this.answers.concat(this.container2)
      console.log(this.container1)
      console.log(this.container2)
      console.log(this.answers)
      this.form = {
        AnswerList: []
      }
      this.form.AnswerList = this.answers
      console.log(this.form)
      submit(this.form).then(response => {
        this.$router.push('/book')
      })
    }
  }
}
</script>
