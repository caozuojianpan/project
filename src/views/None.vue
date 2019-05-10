<template>
    <div>
        <Head :name='title'/>
        <h2>{{title1}}</h2>
    </div>
</template>
<script>
import Head from '@/components/Head'
export default {
    name:'None',
    components:{
        Head
    },
    data(){
        return{
            title:'',
            title1:''
        }
    },
    mounted(){
        this.title=this.$route.query.code
        this.title1= this.$route.query.code
    }
}
</script>
<style scoped>
    h2{
        margin: 200px auto;
        width: 20px;
    }
</style>


