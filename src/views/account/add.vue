<template>
  <div class="dashboard-container">
    
    <el-form ref="form" :model="account" label-width="80px">
      <el-form-item label="手机号">
        <el-input v-model="account.phoneNum"></el-input>
      </el-form-item>
      <el-form-item label="账号类型">
        <el-select v-model="account.accountType" placeholder="请选择账号类型">
          <el-option label="买家" value="1" ></el-option>
          <el-option label="卖家" value="2"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="状态">
        <el-select v-model="account.state" placeholder="请选择账号状态">
          <el-option label="" value="0"></el-option>
          <el-option label="在线" value="1"></el-option>
          <el-option label="登录失败" value="2"></el-option>
          <el-option label="超时" value="3"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="授权状态">
        <el-select v-model="account.accredit" placeholder="请选择账号类型">
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
import accountApi from '@/api/account'

export default {
  data(){
    return {
      account:{
        phoneNum:'111',
        accountType:'1',
        state:"1",
        accredit:'1'
      }
    }
  },
  methods:{
    onSubmit(){
      console.log(this.account)
      accountApi.save(this.account).then(response =>{
        this.$message({
          message: '添加成功!',
          type: 'success'
        });
        this.$router.push({ path: '/account/table' })
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
