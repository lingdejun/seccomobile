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
    <div style="padding:0 24px 30px 24px">
      <van-search v-model="value" shape="round" left-icon="search-s" placeholder="请输入搜索关键词" @blur="tabsearch" />
      <div style="margin-top:30px;margin-bottom:24px">
        <span style="font-family: PingFangSC-Semibold, sans-serif;font-size:17px;font-weight:600">预约记录</span>
        <span style="font-family: PingFangSC-Semibold, sans-serif;margin-left:10px;color:#9393AA;font-size:15px;font-weight:600">{{ total }}</span>
      </div>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          offset="50"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div v-for="(item, index) in bookList" :key="index">
            <book-list v-if="item.Category===1" :book="item" @click.native="toDetail(item.Id)" />
            <vipbook-list v-if="item.Category===2" :book="item" />
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { getAppointmentList } from '@/api/book'
import bookList from '@/components/childcomponents/booklist'
// import bookDetail from '@/components/childcomponents/bookdetail'
// import personDetail from '@/components/childcomponents/persondetail'
// import carDetail from '@/components/childcomponents/cardetail'
export default {
  name: 'AppointmentList',
  components: {
    bookList
    // bookDetail,
    // personDetail,
    // carDetail
  },
  data() {
    return {
      value: '',
      bookList: [],
      loading: false,
      finished: false,
      refreshing: false,
      total: 0,
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
    async onLoad() {
      if (this.refreshing) {
        this.bookList = []
        this.refreshing = false
      }
      const res = await getAppointmentList(this.query)
      if (this.query.PageIndex > 1) {
        this.bookList = [...this.bookList, ...res.Data.Items]
      } else {
        this.bookList = res.Data.Items
        this.total = res.Data.TotalReadCount
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
  padding: 10px 0;
}
.van-search__content{
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
</style>
