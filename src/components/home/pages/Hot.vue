<template>
    <div class="hot">
        <div class="hot-top">
            <img src="@/assets/img/hot.png" alt="">
            <span>本周热门榜单</span>
            <span class="top-title">全部榜单<i class="iconfont">&#xe62d;</i></span>
        </div>
        <div class="list-box">
            <ul class="hot-list">
                <li class="hot-item" v-for="item in hotList" :key="item.id">
                        <div class="tagimg">
                            
                        </div>
                        <div class="item-most">
                            <img :src="item.imgUrl" alt="">
                            <p>{{item.title}}</p>
                            <p>
                                <span>￥{{item.mark}}</span>起
                            </p>
                    
                        </div>
                        
                    
                </li>
            </ul>
        </div>

        <!-- <swiper class="hot-list" ref="mySwiper" :options="swiperOptions" v-if="hotList.length">
            <swiper-slide class="hot-item" v-for="item in hotList" :key="item.id">
                <div class="tagimg">
                            
                        </div>
                        <div class="item-most">
                            <img :src="item.imgUrl" alt="">
                            <p>{{item.title}}</p>
                            <p>
                                <span>￥{{item.mark}}</span>起
                            </p>
                    
                        </div>
            </swiper-slide>
        </swiper> -->
    </div>
</template>
<script>
export default {
    props:['hotList'],
    data(){
        return{
          
             swiperOptions: {
                 slidesPerView : 4,
             }
        }
    }
}
</script>
<style scoped lang="stylus">
@import '~css/common.styl' 
.hot{

    border-top: .2rem solid #f5f5f5;
    background-color: #fff;
    font-size: .32rem;
}
.hot-top{
    padding: .2rem;
    position: relative;
}
.hot-top img{
    width: .3rem;
    height: .3rem;
}
.top-title{
    position: absolute;
    right: .2rem;
    color: #616161;
    font-size: .24rem;
}

.hot-list{
    overflow-x:scroll;
    overflow-y :hidden;
    white-space: nowrap;
    height: 3.4rem;
    width 100%
    
}
.hot-item{
    padding: 0 .2rem;
    width: 2rem;
    height: 2rem;
    display: inline-block;
    position: relative;
   
}
.hot-item img{
    width: 100%;
    height: 100%;
}
.hot-item p{
    margin-top: .1rem;
    text-align: center;
    textOverflow();
}
.hot-item span{
    color: #ff8300;
    font-size: .32rem;
}
// .hot-list swiper-slide .tagimg{
//     display: none;
// }
// .hot-list swiper-slide .item-most{
//     margin-top: .1rem;
// }
// .hot-list swiper-slide:nth-child(1) .tagimg{
//     display: block;
//     background: url("https://imgs.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png") no-repeat;
//     width: .8rem;
//     height: .5rem;
//     position: absolute;
//     background-size: 100%;
// }
// .hot-list swiper-slide:nth-child(2) .tagimg{
//     display: block;
//     background: url("https://imgs.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png") no-repeat;
//     width: .8rem;
//     height: .5rem;
//     position: absolute;
//     background-size: 100%;
    
// }
// .hot-list swiper-slide:nth-child(3) .tagimg{
//     display: block;
//     background: url("https://imgs.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png") no-repeat;
//     width: .8rem;
//     height: .5rem;
//     position: absolute;
//     background-size: 100%;
    
// }
// .hot-list:hover{
//     overflow-x:scroll;
// }
.hot-list li .tagimg{
    display: none;
}
.hot-list li .item-most{
    margin-top: .1rem;
}
.hot-list li:nth-child(1) .tagimg{
    display: block;
    background: url("https://imgs.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png") no-repeat;
    width: .8rem;
    height: .5rem;
    position: absolute;
    background-size: 100%;
}
.hot-list li:nth-child(2) .tagimg{
    display: block;
    background: url("https://imgs.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png") no-repeat;
    width: .8rem;
    height: .5rem;
    position: absolute;
    background-size: 100%;
    
}
.hot-list li:nth-child(3) .tagimg{
    display: block;
    background: url("https://imgs.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png") no-repeat;
    width: .8rem;
    height: .5rem;
    position: absolute;
    background-size: 100%;
    
}
</style>