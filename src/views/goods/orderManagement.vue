<template>
    <div class="goodsindex">
        <!-- 搜索条件 -->
        <el-row :gutter="20" class="goodsindex-queryInfo">
            <!-- 商品名称搜索 -->
            <el-col :xs="8" :sm="6" :md="6" :lg="4" :xl="4">
                <el-input class="goodsindex-queryInfo-li" v-model="queryInfo.name" clearable size="small" placeholder="请输入产品名称"></el-input>
            </el-col>
            <!-- 商品分类搜索 -->
            <el-col :xs="8" :sm="6" :md="6" :lg="4" :xl="4">
                 <el-select  class="goodsindex-queryInfo-li" v-model="queryInfo.type" size="small" clearable placeholder="请选择产品分类">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="2">
                <el-button type="primary" class="goodsindex-queryInfo-li" size="small" >搜索</el-button>
            </el-col>
        </el-row>
        <!-- 检索结果 -->
        <el-row :gutter="20" class="goodsindex-list">
            <el-col :span="24">
                <el-table
                    :data="tableData"
                    border
                    size='small'
                    style="width: 100%">
                    <el-table-column
                    type="index"
                    label="序"
                    align='center'
                    width="50">
                    </el-table-column>
                    <el-table-column
                    prop="ProductID"
                    label="产品编号"
                    align='center'
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="user"
                    label="用户ID"
                    align='center'
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="orderStatus"
                    label="订单状态"
                    align='center'
                    width="120">
                    <template slot-scope='scope'>
                        <el-tag v-if="scope.row.orderStatus=='1'">系统取消</el-tag>
                        <el-tag type="success" v-if="scope.row.orderStatus=='2'">系统收货</el-tag>
                        <el-tag type="danger" v-if="scope.row.orderStatus==3">用户取消</el-tag>
                        <el-tag type="danger" v-if="scope.row.orderStatus==4">用户收货</el-tag>
                        <el-tag type="danger" v-if="scope.row.orderStatus==5">已发货</el-tag>
                        <el-tag type="danger" v-if="scope.row.orderStatus==6">已付款</el-tag>
                     </template>
                    </el-table-column>
                    <el-table-column
                    prop="orderAmount"
                    label="订单金额"
                    align='center'
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="paymentAmount"
                    label="支付金额"
                    align='center'
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="timePayment"
                    label="支付时间"
                    align='center'
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="trackingNumber"
                    label="物流单号"
                    align='center'
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="logisticsChannel"
                    label="物流渠道"
                    align='center'
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    align='center'
                    label="操作">
                    <template slot-scope="scope">
                        <!-- <el-button type="success"  size="small" @click="handleDelete(scope.$index, scope.row)">编辑</el-button>
                        <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">上架</el-button> -->
                        <!-- <el-button type="primary"  size="small" @click="handleDelete(scope.$index, scope.row)">上架</el-button> -->
                        <el-button type="danger"  size="small" @click="handleDelete(scope.$index, scope.row)">移除</el-button>
                    </template>

                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <!-- 分页 -->
        <el-row :gutter="20" class="goodsindex-list">
            <el-col :span="24" class="goodsindex-page-box">
                <el-pagination
                    :hide-on-single-page="true"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="queryInfo.page"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="queryInfo.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            queryInfo:{
                name: '',
                type: '',
                page: 1 ,
                pageSize: 10
            },
            options: [
                {
                    label: 1,
                    value: '安心蔬菜'
                },
                {
                    label: 2,
                    value: '新鲜牛奶'
                }
            ],
            tableData: [
                {   
                    ProductID:231321313,
                    user:21313212313,
                    orderStatus:1,
                    orderAmount:50,
                    paymentAmount:10,
                    timePayment:'2021-1-27 00:20:50',
                    trackingNumber :54656546465,
                    logisticsChannel:'zto'
                },
                {   
                    ProductID:231321313,
                    user:21313212313,
                    orderStatus:2,
                    orderAmount:50,
                    paymentAmount:10,
                    timePayment:'2021-1-27 00:20:50',
                    trackingNumber :54656546465,
                    logisticsChannel:'zto'
                },
                {   
                    ProductID:231321313,
                    user:21313212313,
                    orderStatus:3,
                    orderAmount:50,
                    paymentAmount:10,
                    timePayment:'2021-1-27 00:20:50',
                    trackingNumber :54656546465,
                    logisticsChannel:'zto'
                },
                {   
                    ProductID:231321313,
                    user:21313212313,
                    orderStatus:4,
                    orderAmount:50,
                    paymentAmount:10,
                    timePayment:'2021-1-27 00:20:50',
                    trackingNumber :54656546465,
                    logisticsChannel:'zto'
                },
                {   
                    ProductID:231321313,
                    user:21313212313,
                    orderStatus:2,
                    orderAmount:50,
                    paymentAmount:10,
                    timePayment:'2021-1-27 00:20:50',
                    trackingNumber :54656546465,
                    logisticsChannel:'zto'
                },
                
            ]
        }
    },
    methods:{
        handleSizeChange(){

        },
        handleCurrentChange(){

        },
    }
}
</script>

<style scoped>
.goodsindex{
    width: 100%;
    min-height: 100%;
    padding: 15px;
    box-sizing: border-box;
}
/* 搜索 */
.goodsindex-queryInfo{
    margin-bottom: 10px;
}
.goodsindex-queryInfo-li{
    width: 100%;
    height: auto;
}
/* 列表 */
.goodsindex-list{
    width: 100%;
    height: auto;
    margin-bottom: 20px;
}
/* 分页 */
.goodsindex-page-box{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
}
</style>    