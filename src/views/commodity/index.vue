<template>
  <div>
    <el-form :inline="true" :model="queryObj" class="demo-form-inline">
    <el-form-item label="手机">
      <el-input v-model="queryObj.phoneNumLike" placeholder="手机"></el-input>
    </el-form-item>
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
      label="手机"
      style="width: 10%">
    </el-table-column>
    <el-table-column
      prop="urlAddr"
      label="宝贝链接"
      style="width: 30%">
    </el-table-column>
    <el-table-column
      prop="inventory"
      label="库存"
      style="width: 20%">
    </el-table-column>
    <el-table-column
      prop="sellNum"
      label="已售出"
     style="width: 20%">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格"
      style="width: 20%">
    </el-table-column>
    <el-table-column
      prop="limitNum"
      label="每日限额"
      style="width: 20%">
    </el-table-column>
    <el-table-column
      prop="todayOrderNum"
      label="今日订单数"
      style="width: 20%">
    </el-table-column>

    <el-table-column
      prop="accredit"
      label="授权状态"
      style="width: 20%">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="添加时间"
      style="width: 20%">
      <template slot-scope="scope">
        {{formateTime(scope.row.createTime)}}
      </template>
      
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      style="width: 20%">
      <template slot-scope="scope">
        <el-button type="text" size="small">编辑</el-button>
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
import commodityApi from '@/api/commodity'

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
      commodityApi.findByPage(_this.queryObj)
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
          commodityApi.delById(delObj)
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
