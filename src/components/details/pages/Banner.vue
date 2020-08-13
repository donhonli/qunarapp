<template>
    <div class="banner">
        <div class="banner-img"  @click="showImg">
            <img src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
        </div>
        <div class="banner-title">
            故宫(AAAAA景区)
        </div>
        
        <div class="img-swiper"
            v-show='imgSwiper'
            @click="hideImg">
            <swiper ref="mySwiper" :options="swiperOptions" v-if="bannerList.length">
                <swiper-slide v-for="item in bannerList" :key="item.id">
                    <img :src="item.imgUrl" alt="">
                </swiper-slide>
                
                
        
                
            </swiper>
            <div class="swiper-pagination" slot="pagination"></div>
           
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            swiperOptions:{
                pagination:'.swiper-pagination',
                paginationType : 'fraction'
               
            },
            imgSwiper:false,
            bannerList:[
                {
                    id:1,
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg"

                },
                {
                    id:2,
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg"

                },
                {
                    id:3,
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg"

                },
                {
                    id:4,
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg"

                },
                {
                    id:5,
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg"

                },
                {
                    id:6,
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg"

                },
                {
                    id:7,
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg"

                },
            ]
        }
    },
    methods:{
        showImg(){
            
            this.imgSwiper = true;
        },
        hideImg(){
            this.imgSwiper = false;
            console.log(typeof this.imgSwiper);
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
        height: 100%;
        width: 100%;
        display: flex;
        z-index: 999;
        justify-content: center;
        align-items: center;
    }
    .img-swiper img{
        
        width: 100%;
    }
    .swiper-pagination-fraction{
        color: white;
        font-size: .28rem;
        bottom: .5rem;
    }
</style>