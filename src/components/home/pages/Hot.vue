<template>
    <div class="hot">
        <div class="hot-top">
            <img src="@/assets/img/hot.png" alt="">
            <span>本周热门榜单</span>
            <span class="top-title">全部榜单<i class="iconfont">&#xe62d;</i></span>
        </div>
        <ul class="hot-list">
            <li class="hot-item" v-for="item in hotList" :key="item.id">
                    <div class="tagimg">
                        <!-- <img src="https://imgs.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png" alt=""> -->
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
</template>
<script>
export default {
    props:['hotList'],
    data(){
        return{
            // hotList:[
            //     {
            //         id:'01',
            //         imgUrl:"https://imgs.qunarzz.com/sight/p0/1506/37/df46ee292f148f81ef615f97c1349ad8.water.jpg_250x250_e39581ab.jpg",
            //         title:"神仙居",
            //         mark:"100"
            //     },
            //     {
            //         id:'02',
            //         imgUrl:"https://imgs.qunarzz.com/sight/p0/1506/37/df46ee292f148f81ef615f97c1349ad8.water.jpg_250x250_e39581ab.jpg",
            //         title:"蛇蟠岛",
            //         mark:"79"
            //     },
            //     {
            //         id:'03',
            //         imgUrl:"https://imgs.qunarzz.com/sight/p0/1506/37/df46ee292f148f81ef615f97c1349ad8.water.jpg_250x250_e39581ab.jpg",
            //         title:"仙人谷漂流",
            //         mark:"99"
            //     },
            //     {
            //         id:'04',
            //         imgUrl:"https://imgs.qunarzz.com/sight/p0/1506/37/df46ee292f148f81ef615f97c1349ad8.water.jpg_250x250_e39581ab.jpg",
            //         title:"台州府城（江南长城）",
            //         mark:"14.5"
            //     },
            //     {
            //         id:'05',
            //         imgUrl:"https://imgs.qunarzz.com/sight/p0/1506/37/df46ee292f148f81ef615f97c1349ad8.water.jpg_250x250_e39581ab.jpg",
            //         title:"天台龙穿峡漂流",
            //         mark:"110"
            //     },
            //     {
            //         id:'06',
            //         imgUrl:"https://imgs.qunarzz.com/sight/p0/1506/37/df46ee292f148f81ef615f97c1349ad8.water.jpg_250x250_e39581ab.jpg",
            //         title:"台州湾野生动物园",
            //         mark:"91.5"
            //     },
            //     {
            //         id:'07',
            //         imgUrl:"https://imgs.qunarzz.com/sight/p0/1506/37/df46ee292f148f81ef615f97c1349ad8.water.jpg_250x250_e39581ab.jpg",
            //         title:"天台山风景区",
            //         mark:"15"
            //     },
            //     {
            //         id:'08',
            //         imgUrl:"https://imgs.qunarzz.com/sight/p0/1506/37/df46ee292f148f81ef615f97c1349ad8.water.jpg_250x250_e39581ab.jpg",
            //         title:"玉环大鹿岛",
            //         mark:"44"
            //     },
            //     {
            //         id:'09',
            //         imgUrl:"https://imgs.qunarzz.com/sight/p0/1506/37/df46ee292f148f81ef615f97c1349ad8.water.jpg_250x250_e39581ab.jpg",
            //         title:"天台山琼台仙谷",
            //         mark:"66"
            //     }
               
            // ]
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
    overflow :hidden;
    white-space: nowrap;
    height: 3.2rem;
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
.hot-list:hover{
    overflow-x:scroll;
}
</style>