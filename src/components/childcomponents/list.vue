<template>
  <div>
    <van-row v-for="(question,index) in questions" :key="index" style="margin-top:20px">
      <van-row>
        {{ question.QuestionIndex }}.{{ question.QuestionTitle }}
      </van-row>
      <div v-if="question.QuestionCategory===1||question.QuestionCategory===3||question.QuestionCategory===7">
        <van-row v-for="(item,ind) in question.OptionList" :key="ind">
          <van-row type="flex" justify="center" style="margin-top:5px">
            <van-button :type="container1[index]===item.OptionId?'info':'default'" style="margin-left:20px;border-radius:8px;width:50%" block @click="check1(item,ind,index)">{{ item.OptionTitle }}</van-button>
          </van-row>

        </van-row>
      </div>
      <div v-if="question.QuestionCategory===2||question.QuestionCategory===4">
        <van-row v-for="(item,ind) in question.OptionList" :key="ind">
          <van-row type="flex" justify="center" style="margin-top:5px">
            <van-button :type="check(index, item.OptionId)?'info':'default'" style="margin-left:20px;border-radius:8px;width:50%" block @click="check2(item,ind,index)">{{ item.OptionTitle }}</van-button>
          </van-row>
        </van-row>
      </div>

      <van-divider color="#e6eaf0" dashed />
    </van-row>
  </div>
</template>

<script>

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
      state: 'primary'

    }
  },
  created() {
    this.transformation()
  },
  methods: {
    transformation() {
      console.log('created')
      console.log(this.container2.length)
      const qus = this.questions.filter(item => {
        return item.QuestionCategory === 2 || item.QuestionCategory === 4
      })
      for (let i = 0, mutI = qus.length; i < mutI; ++i) {
        this.container2.push([])
      }
      console.log('transformation')
      console.log(this.container2)
    },
    check(index, ind) {
    //   console.log('check')
    //   console.log(this.container2.length)
      let flag = false
      this.container2.forEach((items, rowindex) => {
        if (rowindex !== index) {
        //   console.log('check index=' + index + 'rowindex=' + rowindex)
          return true
        }
        items.forEach((item, rowindex2) => {
          if (item === ind) {
            flag = true
            // console.log('check ind=' + ind + 'rowindex2=' + rowindex2)
            return false
          }
        })
      })
      // const inx = this.container2[index].indexOf(ind)
      // console.log('check index=' + inx)
      return flag
    },
    check1(itm, ind, index) {
      this.$set(this.container1, index, itm.OptionId)
    },
    check2(itm, ind, index) {
    //   const arrIndex = this.container2[index].indexOf(itm.OptionId)
      let arrIndex = -1
      this.container2.forEach((items, rowindex) => {
        if (rowindex !== index) {
          console.log('check index=' + index + 'rowindex=' + rowindex)
          return true
        }
        items.forEach((item, rowindex2) => {
          if (item === itm.OptionId) {
            arrIndex = rowindex2
            return false
          }
        })
      })
      console.log(arrIndex)
      if (arrIndex > -1) {
        this.container2[index].splice(arrIndex, 1)
      } else {
        this.container2[index].push(itm.OptionId)
      }
    }
  }
}
</script>
