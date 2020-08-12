<template>
    <div class="vacation">
        <div class="v-top">
            周末去哪儿
        </div>
        <ul class="v-bottom">
            <li class="v-item" v-for="item in vacationList" :key="item.id">
                <div class="v-img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="v-text">
                    <p>{{item.title}}</p>
                    <p>{{item.msg}}</p>
                </div>
            </li>
           
        </ul>
    </div>
</template>
<script>
export default {
    props:['vacationList'],
    data(){
        return{
            // vacationList:[
            //     {
            //         id:'01',
            //         imgUrl:'https://imgs.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
            //         title:'美丽普陀山',
            //         msg:'人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化'
            //     },
            //     {
            //         id:'02',
            //         imgUrl:'https://imgs.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
            //         title:'美丽普陀山',
            //         msg:'人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化'
            //     },
            //     {
            //         id:'03',
            //         imgUrl:'https://imgs.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
            //         title:'美丽普陀山',
            //         msg:'人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化'
            //     },
            // ]
        }
    }
}
</script>
<style scoped>
    .v-top{
        height: .8rem;
        padding-left: .26rem;
        line-height: .8rem;
        font-size: .32rem;
        background-color: #f0f0f0;
    }
    .v-item{
        font-size: .28rem;
        margin-bottom:.4rem;
    }
    .v-img{
        width: 100%;
        height: 0;
        padding-bottom: 37.4375%;
    }
    .v-img img{
        width: 100%;
    }
    .v-text{
        padding:0 .2rem ;
    }
    .v-text p{
        margin: .2rem 0;
        
        color: #212121;
    }
    .v-text p:nth-child(2){
        color: #616161;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-right: 1.4rem;
        font-size: .24rem;
    }
</style>