<template>
    <div class="header-swiper">
        <swiper ref="mySwiper" :options="swiperOptions" v-if="swiperList.length">
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>
            
            
    
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    props:['swiperList'],
    data() {
        return {
            // swiperList:[
            //     {
            //         id:1,
            //         imgUrl:require("@/assets/img/swiper1.jpg")
            //     },
            //      {
            //         id:2,
            //         imgUrl:require("@/assets/img/swiper2.jpg")
            //     },
            //      {
            //         id:3,
            //         imgUrl:require("@/assets/img/swiper3.jpg")
            //     }
            // ],
            swiperOptions: {
                loop:true,
                pagination:'.swiper-pagination'
                    
                
            // Some Swiper option/callback...
            }
        }
    }
}
</script>
<style scoped lang="stylus">
@import '~css/var.styl'
.header-swiper{
    background-color #ccc;
    height:0;
    padding-bottom:26.67%;
}    
.header-swiper img{
    width: 100%;
    height: 100%;
}
.header-swiper >>>.swiper-pagination-bullet-active{
    background-color: $bgColor;
}
</style>