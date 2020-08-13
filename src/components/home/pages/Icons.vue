<template>
    <div class="icons">
        <swiper ref="mySwiper" :options="swiperOptions" v-if="page.length">
            <swiper-slide v-for="(item) in page" :key="item.index">
                <div class="icons-item" v-for="item in item" :key="item.id">
                    
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.title}}</p>
                </div>
            </swiper-slide>
            
            
    
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
       
        
    </div>
</template>
<script>
export default {
    props:['iconsList'],
    data(){
        return{
            swiperOptions: {
                loop:true,
                pagination: '.swiper-pagination'
              
            // Some Swiper option/callback...
            },
            
        }
    },
    computed:{
        page(){
            let pages = [];
            this.iconsList.forEach((item,index)=>{
                let idx = Math.floor(index/8);
                if(!pages[idx]){
                    pages[idx] = [];
                }
                pages[idx].push(item)
            })
            
            return pages;
        }
    }
}
</script>
<style scoped lang="stylus">
@import '~css/var.styl'
@import '~css/common.styl'
.icons{
    width: 100%;
   position: relative;
   overflow hidden;
   
   
    
}
.icons-item{
    float: left;
    width: 25%;
    height: 1.8rem;
    padding-top: .05rem;
    text-align: center;
}
.icons-item img{
    width:1.1rem;
    height: 1.1rem;
    display: block;
    margin:0 auto;
    padding-top: .2rem;
}
.icons-item p{
    margin-top: .1rem;
    font-size: .28rem;
    text-align: center;
    color: #212121;
    textOverflow();
}
.icons >>>.swiper-pagination-bullet-active{
    background-color: $bgColor;
    
}
.swiper-pagination-bullets{
    position: absolute;
    margin-bottom :-.3rem;
    
   
}
.swiper-container{
    height:4rem;
}
</style>