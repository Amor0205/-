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
                    prop="name"
                    label="产品名称"
                    align='center'
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="picture"
                    label="产品图片"
                    align='center'
                    width="120">
                        <template slot-scope="scope">
                            <img :src="scope.row.imgs"  style="width: 100px;height: 50px">
                        </template>
                    </el-table-column>

                    <el-table-column
                    prop="originaCost"
                    label="原价"
                    align='center'
                    width="80">
                    </el-table-column>
                    <el-table-column
                    prop="currentPrice"
                    label="现价"
                    align='center'
                    width="80">
                    </el-table-column>
                    <el-table-column
                    prop="gross"
                    label="总量"
                    align='center'
                    width="80">
                    </el-table-column>
                    <el-table-column
                    prop="inventory"
                    label="库存"
                    align='center'
                    width="80">
                    </el-table-column>
                 
                    <el-table-column
                    prop="underTime"
                    label="下架时间"
                    align='center'
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="cause"
                    label="下架原因"
                    align='center'
                    width="220">
                    </el-table-column>
                    <el-table-column
                    prop="approvalStatus"
                    label="审批状态"
                    width="180"
                    align='center'>
                        <template slot-scope='scope'>
                            <el-tag v-if="scope.row.approvalStatus=='1'">待审批</el-tag>
                            <el-tag type="success" v-if="scope.row.approvalStatus=='2'">审批通过</el-tag>
                            <el-tag type="danger" v-if="scope.row.approvalStatus==3">审批拒绝</el-tag>
                          </template>
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    align='center'
                    label="操作">
                    <template slot-scope="scope">
                        <el-button type="success"  size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">上架</el-button>
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
                    name:'MTS5425韩版女童连衣裙2019秋新品网纱拼接连帽卫衣裙95-170CM',
                    imgs:'../../assets/image/uni.png ',
                    originaCost:50,
                    currentPrice:10,
                    gross :500,
                    inventory:10000,
                    approvalStatus:2,
                    underTime:'2021-1-27 00:25:00',
                    cause:'太贵'
                },
                {   
                    ProductID:231321313,
                    name:'MTS5425韩版女童连衣裙2019秋新品网纱拼接连帽卫衣裙95-170CM',
                    imgs:'../../assets/image/uni.png ',
                    originaCost:50,
                    currentPrice:10,
                    gross :500,
                    inventory:10000,
                    approvalStatus:3,
                    underTime:'2021-1-27 00:25:00',
                    cause:'太贵'
                },
                {   
                    ProductID:231321313,
                    name:'MTS5425韩版女童连衣裙2019秋新品网纱拼接连帽卫衣裙95-170CM',
                    imgs:'../../assets/image/uni.png ',
                    originaCost:50,
                    currentPrice:10,
                    gross :500,
                    inventory:10000,
                    approvalStatus:1,
                    underTime:'2021-1-27 00:25:00',
                    cause:'太贵'
                },
            ]
        }
    },
    methods:{
        handleSizeChange(){

        },
        handleCurrentChange(){

        },
         // 编辑
         handleEdit(index, row) {
            console.log(index, row)
            this.$router.push({
                path: 'commoditiesEditor',
                query: {
                    id: row.id
                }
            })
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