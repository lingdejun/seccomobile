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
    <div style="padding:0 10px 30px 10px">
      <van-search v-model="value" shape="round" left-icon="search-s" placeholder="请输入搜索关键词" />
      <div style="">
        <van-row type="flex" justify="space-around" class="row-round">
          <van-col span="6" class="col-round">2</van-col>
          <van-col span="6" class="col-round">100</van-col>
          <van-col span="6" class="col-round">30</van-col>
        </van-row>
        <van-row type="flex" justify="space-around" class="row-round">
          <van-col span="6" class="col-round2">预约记录</van-col>
          <van-col span="6" class="col-round2">历史记录</van-col>
          <van-col span="6" class="col-round2">VIP记录</van-col>
        </van-row>
      </div>
      <van-divider />
      <h3 style="margin-left:12px">预约记录</h3>
      <!-- <div v-for="(item, index) in bookList" :key="index">
        <book-list :book="item" />
        <book-list :book="item" />
        <book-list :book="item" />
      </div> -->
      <book-detail />
      <person-detail />
      <car-detail />
      <van-row type="flex" justify="center">
        <van-button type="info" style="border-radius:8px;width:70%" block @click="to">我要预约</van-button>
      </van-row>
      <van-row type="flex" justify="center" style="margin-top:15px">
        <van-button type="info" plain style="border-radius:8px;width:70%" block @click="vipto">VIP 预约</van-button>
      </van-row>
    </div>
  </div>
</template>

<script>
// import bookList from '@/components/childcomponents/booklist'
import bookDetail from '@/components/childcomponents/bookdetail'
import personDetail from '@/components/childcomponents/persondetail'
import carDetail from '@/components/childcomponents/cardetail'
export default {
  name: 'Book',
  components: {
    // bookList
    bookDetail,
    personDetail,
    carDetail
  },
  data() {
    return {
      value: '',
      bookList: []
    }
  },
  methods: {
    to() {
      this.$router.push('/subbook')
    },
    vipto() {
      this.$router.push('/subvipbook')
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
