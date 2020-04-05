<template>
  <div>
    <el-form :inline="true" :model="queryObj" class="demo-form-inline">
    <el-form-item label="手机">
      <el-input v-model="queryObj.phoneNumLike" placeholder="手机"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="findByPage()">查询</el-button>
    </el-form-item>
  </el-form>

  <el-table
    :data="list"
    style="width: 100%"
    border
    :row-class-name="tableRowClassName"
    height="250">
    <el-table-column
      prop="id"
      label="id"
      style="width: 10%">
    </el-table-column>
    <el-table-column
      prop="orderNum"
      label="订单号"
      style="width: 30%">
    </el-table-column>
    <el-table-column
      prop="money"
      label="金额"
      style="width: 20%">
    </el-table-column>
    <el-table-column
      prop="isPay"
      label="是否支付"
     style="width: 20%">
    </el-table-column>
    <el-table-column
      prop="state"
      label="状态"
      style="width: 20%">
    </el-table-column>

    <el-table-column
      prop="logisticsInfo"
      label="物流信息"
      style="width: 20%">
    </el-table-column>
	<el-table-column
      prop="orderPhone"
      label="下单手机号"
      style="width: 20%">
    </el-table-column>
    <el-table-column
      prop="orderUrlAddr"
      label="下单链接"
      style="width: 20%">
    </el-table-column>
    <el-table-column
      prop="payType"
      label="支付方式"
      style="width: 20%">
    </el-table-column>
    <el-table-column
      prop="orderTime"
      label="下单时间"
      style="width: 20%">
    </el-table-column>
    <el-table-column
      prop="payTime"
      label="支付时间"
      style="width: 20%">
    </el-table-column>

	<el-table-column
      prop="shipmentsTime"
      label="发货时间"
      style="width: 20%">
      <template slot-scope="scope">
        {{formateTime(scope.row.shipmentsTime)}}
      </template>
    </el-table-column>
    <el-table-column
      prop="finishTime"
      label="成交时间"
      style="width: 20%">
      <template slot-scope="scope">
        {{formateTime(scope.row.finishTime)}}
      </template>
    </el-table-column>
    <el-table-column
      prop="generateUrlAddr"
      label="生成链接"
      style="width: 20%">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      style="width: 20%">
      <template slot-scope="scope">
        <el-button @click="delById(scope.row.id)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    
  </el-table>
  <div class="pagination">
<el-pagination 
    background
    :current-page="current"
    :page-size="size"
    :total="total"
    layout="prev, pager, next"
    @current-change="pageCurrentChange">
  </el-pagination>
</div>


</div>
</template>

<script>
import commonUtil from '@/api/commonUtil'
import orderApi from '@/api/order'

export default {
  data(){
    return{
      centerDialogVisible: false,
      current:1,
      size:2,
      queryObj:{},
      total:0,
      list:[],
      id:0
    }
  },
  created(){
    this.findByPage()
  },
  methods:{
    findByPage(){
      let _this = this;
      _this.queryObj.current=_this.current
      _this.queryObj.size=_this.size
      console.log(_this.queryObj);
      orderApi.findByPage(_this.queryObj)
        .then(response =>{  
          _this.list = response.result.records
          _this.total = response.result.total
          console.log(_this.list);
        })
        .catch(error=>{
          console.log(error);
        })
    },
    delById(id){
      let _this = this
      this.$confirm('您将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let delObj = {};
          delObj.id = id
          orderApi.delById(delObj)
          this.current = 1
          this.findByPage();
        })

      
    },
    pageCurrentChange(val,e,form,jobExpLabel,pageform,searchVal){
        this.current = val;
        this.findByPage();
    },
    formateTime(createTime){
      return commonUtil.formateTime(createTime);
    },
    handleClick(id){
      console.log(id);
    },
    tableRowClassName({row, rowIndex}) {
        if (rowIndex/2 === 0) {
          return 'warning-row';
        } else{
          return 'success-row';
        }
      }
    
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .pagination{
    text-align:center
  }
account-container{
  padding: 0px;
  margin: 0px;
}
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
