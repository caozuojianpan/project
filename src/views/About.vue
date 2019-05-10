<template>
    <div>
        <Head :name="title" />
        <p>开发团队</p>
        <van-collapse v-model="activeNames">
            <van-collapse-item title="前端人员" name="2">
                丁山山、李新新、赵天俊
            </van-collapse-item>
            <van-collapse-item title="后台人员" name="3">
                韩旭、陈玉、易玉浩
            </van-collapse-item>

        </van-collapse>
    </div>
</template>
<script>
import Head from '@/components/Head';
import { Collapse, CollapseItem } from 'vant';
export default {
    name:'About',
    components:{
        Head
    },
    data(){
        return{
            title:'关于我们',
            activeNames:['1']
        }
    }
}
</script>
<style scoped>
    p{
        margin: 66px 0 20px 20px;
        font-weight: 900;
        font-size: 20px;
    }
</style>

