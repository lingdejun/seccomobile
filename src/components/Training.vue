<template>
  <div style="width:100%; height:100%;">
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
      <!-- <question-list :questions="question.QuestionList" /> -->
      <list :questions="question.QuestionList" />
    </div>
  </div>
</template>

<script>
// import questionList from '@/components/childcomponents/questionlist'
import list from '@/components/childcomponents/list'

export default {
  name: 'Training',
  components: {
    // questionList,
    list
  },
  data() {
    return {
      question: {
        'TrainId': 1,
        'TrainCategory': 1,
        'TrainTitle': 'HSSE培训',
        'TrainVideo': 'http://test6.topbpm.com/visitmedia/de1c36ce-7231-423b-9f0e-0ba88f192152.mp4',
        'QuestionList': [{
          'QuestionId': 1,
          'QuestionCategory': 1,
          'QuestionTitle': '单选题',
          'QuestionIndex': 1,
          'OptionList': [{
            'OptionId': 1,
            'OptionTitle': '选项1',
            'OptionImg': null,
            'OptionIsCorrect': 0,
            'OptionIndex': 1
          }, {
            'OptionId': 2,
            'OptionTitle': '选项2',
            'OptionImg': null,
            'OptionIsCorrect': 0,
            'OptionIndex': 2
          }, {
            'OptionId': 3,
            'OptionTitle': '选项3',
            'OptionImg': null,
            'OptionIsCorrect': 1,
            'OptionIndex': 3
          }, {
            'OptionId': 4,
            'OptionTitle': '选项4',
            'OptionImg': null,
            'OptionIsCorrect': 0,
            'OptionIndex': 4
          }]
        }, {
          'QuestionId': 2,
          'QuestionCategory': 2,
          'QuestionTitle': '多选题',
          'QuestionIndex': 2,
          'OptionList': [{
            'OptionId': 5,
            'OptionTitle': '选项1',
            'OptionImg': null,
            'OptionIsCorrect': 0,
            'OptionIndex': 1
          }, {
            'OptionId': 6,
            'OptionTitle': '选项2',
            'OptionImg': null,
            'OptionIsCorrect': 1,
            'OptionIndex': 2
          }, {
            'OptionId': 7,
            'OptionTitle': '选项3',
            'OptionImg': null,
            'OptionIsCorrect': 1,
            'OptionIndex': 3
          }, {
            'OptionId': 8,
            'OptionTitle': '选项4',
            'OptionImg': null,
            'OptionIsCorrect': 0,
            'OptionIndex': 4
          }]
        }, {
          'QuestionId': 3,
          'QuestionCategory': 3,
          'QuestionTitle': '图片单选题',
          'QuestionIndex': 3,
          'OptionList': [{
            'OptionId': 9,
            'OptionTitle': '选项1',
            'OptionImg': 'http://test6.topbpm.com/visitmedia/8293acf5-bd4c-49c6-a02d-aa8d6e571ded.jpg',
            'OptionIsCorrect': 0,
            'OptionIndex': 1
          }, {
            'OptionId': 10,
            'OptionTitle': '选项2',
            'OptionImg': 'http://test6.topbpm.com/visitmedia/46b36613-eb3e-47ae-9362-54cc3fe8964d.jpg',
            'OptionIsCorrect': 0,
            'OptionIndex': 2
          }, {
            'OptionId': 11,
            'OptionTitle': '选项3',
            'OptionImg': 'http://test6.topbpm.com/visitmedia/053d36a7-b51a-42a3-a76b-6f2489c03ce6.jpg',
            'OptionIsCorrect': 0,
            'OptionIndex': 3
          }, {
            'OptionId': 12,
            'OptionTitle': '选项4',
            'OptionImg': 'http://test6.topbpm.com/visitmedia/d49e9f4e-afa5-4503-8b5a-96a3dff79704.jpg',
            'OptionIsCorrect': 1,
            'OptionIndex': 4
          }]
        }, {
          'QuestionId': 4,
          'QuestionCategory': 4,
          'QuestionTitle': '图片多选题',
          'QuestionIndex': 4,
          'OptionList': [{
            'OptionId': 13,
            'OptionTitle': '选项1',
            'OptionImg': 'http://test6.topbpm.com/visitmedia/c8ad2a0f-7286-4a5e-9708-992000110c17.jpg',
            'OptionIsCorrect': 0,
            'OptionIndex': 1
          }, {
            'OptionId': 14,
            'OptionTitle': '选项2',
            'OptionImg': 'http://test6.topbpm.com/visitmedia/26453bd8-f70a-4ed3-aebf-94b00e238d2d.jpg',
            'OptionIsCorrect': 1,
            'OptionIndex': 2
          }, {
            'OptionId': 15,
            'OptionTitle': '选项3',
            'OptionImg': 'http://test6.topbpm.com/visitmedia/c638d98f-2e39-4bf8-b955-ebd0abe00e28.jpg',
            'OptionIsCorrect': 1,
            'OptionIndex': 3
          }, {
            'OptionId': 16,
            'OptionTitle': '选项4',
            'OptionImg': 'http://test6.topbpm.com/visitmedia/198fe21a-eeab-48ce-9b39-709347dc1767.jpg',
            'OptionIsCorrect': 1,
            'OptionIndex': 4
          }]
        }, {
          'QuestionId': 5,
          'QuestionCategory': 7,
          'QuestionTitle': '是非题',
          'QuestionIndex': 5,
          'OptionList': [{
            'OptionId': 17,
            'OptionTitle': '是',
            'OptionImg': null,
            'OptionIsCorrect': 0,
            'OptionIndex': 1
          }, {
            'OptionId': 18,
            'OptionTitle': '否',
            'OptionImg': null,
            'OptionIsCorrect': 1,
            'OptionIndex': 2
          }]
        }]
      }
    }
  },
  created() {
    // const data = JSON.parse(sessionStorage.getItem('querytrainparams'))
  },
  methods: {
    sub() {
    }
  }
}
</script>

<style lang="scss" scoped>

.navbar{
  background-color: #fafafa;
  z-index: 2;
}

</style>
