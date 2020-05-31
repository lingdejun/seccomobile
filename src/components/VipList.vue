<template>
  <div style="width:100%;" class="content">
    <div style="margin-bottom:46px">
      <van-nav-bar
        title="赛科访预约"
        left-arrow
        class="navbar"
        :fixed="true"
        offest="0"
        @click-left="$router.back(-1)"
      />
    </div>
    <van-search v-model="value" shape="round" left-icon="search-s" placeholder="请输入搜索关键词" />
    <div style="padding:0 10px 30px 10px;">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          ref="vlist"
          v-model="loading"
          class="vanlist-s"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-row v-for="(item, index) in bookList" :key="index">
            <vipbook-list :book="item" @click.native="toDetail(item.Id)" />
          </van-row>
          <!-- <div v-for="(item, index) in bookList" :key="index">
            <vipbook-list :book="item" @click.native="toDetail(item.Id)" />
          </div> -->
          <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { getVipList } from '@/api/book'
import vipbookList from '@/components/childcomponents/vipbooklist'
// import bookDetail from '@/components/childcomponents/bookdetail'
// import personDetail from '@/components/childcomponents/persondetail'
// import carDetail from '@/components/childcomponents/cardetail'
export default {
  name: 'VipList',
  components: {
    vipbookList
  },
  data() {
    return {
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
    async onLoad() {
      if (this.refreshing) {
        this.bookList = []
        this.refreshing = false
      }
      const res = await getVipList(this.query)
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
