<template>
    <div class="banner" @click="showImg">
        <div class="banner-img">
            <img src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
        </div>
        <div class="banner-title">
            故宫(AAAAA景区)
        </div>
        <div class="img-swiper"
            v-show="imgSwiper"
            @click="hideImg">
            <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgSwiper:false
        }
    },
    methods:{
        showImg(){
            
            this.imgSwiper = true;
        },
        hideImg(){
            this.imgSwiper = false;
            console.log(this.imgSwiper);
        }
    }
}
</script>
<style scoped>
    .banner{
        position: relative;
    }
    .banner-img{
        width: 100%;
        overflow: hidden;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
        
    }
    .banner-img img{
        width: 100%;
    }
    .banner-title{
        position: absolute;
        bottom: .4rem;
        left: .3rem;
        font-size: .36rem;
        color: white;
    }
    .img-swiper{
        background-color: #000;
        position: fixed;
        bottom:0;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img-swiper img{
        width: 100%;
    }
</style>