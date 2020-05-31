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
    <van-search v-model="value" shape="round" left-icon="search-s" placeholder="请输入搜索关键词" @blur="tabsearch" />
    <div style="padding:0 10px 30px 10px">
      <van-row class="btn-row">
        <van-col style="border-top-left-radius: 12px;border-bottom-left-radius: 12px;" :class="active==0?'text-active':'text-default'" span="6" @click="search(0)">全部</van-col>
        <van-col style="border-left:1px solid #fafafa" :class="active==4?'text-active':'text-default'" span="6" @click="search(4)">已登记</van-col>
        <van-col style="border-left:1px solid #fafafa" :class="active==5?'text-active':'text-default'" span="6" @click="search(5)">已失效</van-col>
        <van-col style="border-left:1px solid #fafafa;border-top-right-radius: 12px;border-bottom-right-radius: 12px;" :class="active==3?'text-active':'text-default'" span="6" @click="search(3)">已拒绝</van-col>
      </van-row>
      <van-pull-refresh v-model="refreshing" style="margin-top:10px" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-row v-for="(item, index) in bookList" :key="index">
            <book-list v-if="item.Category===1" :book="item" @click.native="toDetail(item.Id)" />
            <vipbook-list v-if="item.Category===2" :book="item" />
          </van-row>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { getHistoryList } from '@/api/book'
import bookList from '@/components/childcomponents/booklist'
// import bookDetail from '@/components/childcomponents/bookdetail'
// import personDetail from '@/components/childcomponents/persondetail'
// import carDetail from '@/components/childcomponents/cardetail'
export default {
  name: 'HistoryList',
  components: {
    bookList
  },
  data() {
    return {
      active: 0,
      value: '',
      bookList: [],
      loading: false,
      finished: false,
      refreshing: false,
      query: {
        SearchText: '',
        State: '',
        PageIndex: 1
      }
    }
  },
  created() {
    // const vlist = this.$refs.vlist
    window.scroll(0, 0)
    // vlist.scrollTo(0, 0)
    // this.getBookList()
    // document.getElementsByClassName('content')[0].scrollTop = 0
  },
  methods: {
    tabsearch() {
      this.query.SearchText = this.value
      this.query.PageIndex = 1
      this.onLoad()
    },
    search(id) {
      this.active = id
      this.query.SearchText = this.value
      this.query.State = id === 0 ? '' : id
      this.query.PageIndex = 1
      this.onLoad()
    },
    async onLoad() {
      if (this.refreshing) {
        this.bookList = []
        this.refreshing = false
      }
      const res = await getHistoryList(this.query)
      if (this.query.PageIndex > 1) {
        this.bookList = [...this.bookList, ...res.Data.Items]
      } else {
        this.bookList = res.Data.Items
      }
      // this.bookList.push(res.Data.Items)
      // console.log(JSON.stringify(this.bookList))
      this.loading = false
      if (this.query.PageIndex === res.Data.TotalPageCount) {
        this.finished = true
      }
      if (res.Data.TotalPageCount > this.query.PageIndex) {
        this.query.PageIndex++
      }
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    },
    toDetail(id) {
      this.$router.push({ name: 'AppointmentDetail', params: { id: id }})
      // this.$router.push('/appointmentdetail')
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
.btn-row{
  text-align: center;
}
.btn-row .van-col{
  padding: 15px 0px 15px 0px;
  background-color: white
}
.col-round{
  padding: 20px;
  border-radius: 30px;
  background-color: #3d87ee;
  width: 20%;
  font-size: larger;
  text-align: center;
  color: white;
  font-weight: bold;
}
.col-round2{
  text-align: center;
}
.row-round{
  margin-top: 15px;
}
.text-active{
  color: #3d87ee;
}
.text-default{
  color: black;
}
</style>
