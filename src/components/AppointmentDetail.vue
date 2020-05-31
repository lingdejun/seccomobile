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
      <van-row type="flex" justify="center" style="margin-top:20px;margin-bottom:20px;">
        <van-button v-if="book.State==='申请中'" type="info" style="border-radius:8px;width:28%">申请中</van-button>
        <van-button v-if="book.State!=='申请中'" type="default" style="border-radius:8px;width:28%">申请中</van-button>
        <van-button v-if="book.State==='报备中'" type="info" style="margin-left:20px;border-radius:8px;width:28%">报备中</van-button>
        <van-button v-if="book.State!=='报备中'" type="default" style="margin-left:20px;border-radius:8px;width:28%">报备中</van-button>
        <van-button v-if="book.State==='已完成'" type="info" style="margin-left:20px;border-radius:8px;width:28%">已完成</van-button>
        <van-button v-if="book.State!=='已完成'" type="default" style="margin-left:20px;border-radius:8px;width:28%">已完成</van-button>
      </van-row>
      <book-detail :book="book" />
      <person-detail :persons="persons" />
      <car-detail :cars="cars" />
    </div>
  </div>
</template>

<script>
import { getAppointmentDetail } from '@/api/book'
import bookDetail from '@/components/childcomponents/bookdetail'
import personDetail from '@/components/childcomponents/persondetail'
import carDetail from '@/components/childcomponents/cardetail'
export default {
  name: 'AppointmentDetail',
  components: {
    bookDetail,
    personDetail,
    carDetail
  },
  data() {
    return {
      id: '',
      book: {},
      persons: [],
      cars: []
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getBookDetail()
  },
  methods: {
    getBookDetail() {
      const data = {
        id: this.id
      }
      getAppointmentDetail(data).then(response => {
        this.book = response.Data.AppointmentInfo
        this.persons = response.Data.VisitorList
        this.cars = response.Data.VehicleList
      })
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
