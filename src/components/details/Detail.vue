<template>
    <div>
        <Banner></Banner>
        <Header></Header>
        <div style="height:100rem"></div>
    </div>
</template>
<script>
import Banner from './pages/Banner'
import Header from './pages/Header'
export default {
    components:{
        Banner,
        Header
    },
    activated(){
        if(document.documentElement.scrollTop){
            document.documentElement.scrollTop = 0;
        }else{
            document.body.scrollTop = 0;
        }
    }
}
</script>
<style>
    
</style>