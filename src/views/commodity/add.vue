<template>
  <div class="dashboard-container">
    
    <el-form ref="form" :model="commodity" label-width="80px">
      <el-form-item label="手机号">
        <el-input v-model="commodity.phoneNum"></el-input>
      </el-form-item>
      <el-form-item label="宝贝链接">
        <el-input v-model="commodity.urlAddr"></el-input>
      </el-form-item>
      <el-form-item label="库存">
        <el-input v-model="commodity.inventory"></el-input>
      </el-form-item>
      <el-form-item label="已售出">
        <el-input v-model="commodity.sellNum"></el-input>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="commodity.price"></el-input>
      </el-form-item>

      <el-form-item label="每日限额">
        <el-input v-model="commodity.limitNum"></el-input>
      </el-form-item>
      <el-form-item label="今日订单数">
        <el-input v-model="commodity.todayOrderNum"></el-input>
      </el-form-item>
      <el-form-item label="授权状态">
        <el-select v-model="commodity.accredit" placeholder="请选择账号类型">
          <el-option label="禁用" value="1"></el-option>
          <el-option label="正常" value="2"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import commodityApi from '@/api/commodity'

export default {
  data(){
    return {
      commodity:{
        phoneNum:'111',
        urlAddr:'1',
        inventory:"1",
        sellNum:'1',
        price:'11',
        limitNum:'111',
        todayOrderNum:'111',
        accredit:'1'
      }
    }
  },
  methods:{
    onSubmit(){
      console.log(this.commodity)
      commodityApi.save(this.commodity).then(response =>{
        this.$message({
          message: '添加成功!',
          type: 'success'
        });
        this.$router.push({ path: '/commodity/table' })
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
