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
      <vipbook-detail :book="book" />
    </div>
  </div>
</template>

<script>
import { getVipDetail } from '@/api/book'
import vipbookDetail from '@/components/childcomponents/vipbookdetail'
export default {
  name: 'AppointmentDetail',
  components: {
    vipbookDetail
  },
  data() {
    return {
      id: '',
      book: {}
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
      getVipDetail(data).then(response => {
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
