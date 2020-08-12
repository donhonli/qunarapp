<template>
    <div class="icons">
        <swiper ref="mySwiper" :options="swiperOptions">
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
                pagination: {
                    el: '.swiper-pagination'
                },
            // Some Swiper option/callback...
            },
            // iconsList:[
            //     {
            //         id:"01",
            //         title:"景点门票",
            //         imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
            //     },
            //     {
            //         id:"02",
            //         title:"一日游",
            //         imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png"
            //     },
            //     {
            //         id:"03",
            //         title:"踏青赏花",
            //         imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png"
            //     },
            //     {
            //         id:"04",
            //         title:"动植物园",
            //         imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png"
            //     },
            //     {
            //         id:"05",
            //         title:"珠江夜游",
            //         imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png"
            //     },
            //     {
            //         id:"06",
            //         title:"城市观光",
            //         imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png"
            //     },
            //     {
            //         id:"07",
            //         title:"主题乐园",
            //         imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png"
            //     },
            //     {
            //         id:"08",
            //         title:"泡温泉",
            //         imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png"
            //     },
            //     {
            //         id:"09",
            //         title:"景点门票",
            //         imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
            //     },
            //     {
            //         id:"10",
            //         title:"景点门票",
            //         imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
            //     },
            // ]
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