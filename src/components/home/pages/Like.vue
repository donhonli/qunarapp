<template>
    <div class="like">
        <div class="like-top">
            <img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
            猜你喜欢
        </div>
        <ul class="like-bottom">
            <li class="like-item" v-for="item in likeList" :key="item.id">
                <div class="like-img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="like-text">
                    <div class="like-title">{{item.title}}</div>
                    <div class="like-message">
                        {{item.msg}}条评论
                    </div>
                    <div class="like-map">
                        
                        <span>￥<b>{{item.pre}}</b></span>起
                        <span>{{item.map}}</span>
                    </div>
                </div>
                
            </li>
           
            
        </ul>
    </div>
</template>
<script>
export default {
    props:['likeList'],
    data(){
        return{
            // likeList:[
            //     {
            //         id:'01',
            //         imgUrl:"https://imgs.qunarzz.com/sight/p0/201301/17/a02bd52c34d1c59f93835fbb.jpg_200x200_9fb02815.jpg",
            //         title:"淡竹原始森林",
            //         msg:"1341",
            //         pre:"45",
            //         map:"仙居"
            //     },
            //     {
            //         id:'02',
            //         imgUrl:"https://imgs.qunarzz.com/sight/p0/201406/06/a44369bc74c861237cdc6446ae322949.jpg_200x200_4feba072.jpg",
            //         title:"淡竹原始森林",
            //         msg:"1341",
            //         pre:"45",
            //         map:"仙居"
            //     },
            //     {
            //         id:'03',
            //         imgUrl:"https://imgs.qunarzz.com/sight/p0/1604/78/786765192063ed7690.img.jpg_200x200_e5a2a6cc.jpg",
            //         title:"淡竹原始森林",
            //         msg:"1341",
            //         pre:"45",
            //         map:"仙居"
            //     },
            // ]
        }
    }
}
</script>
<style scoped lang="stylus">
@import '~css/common.styl'
    .like{
        border-top: .2rem solid #f5f5f5;
        margin-top: .2rem;
        background-color: #fff;
        padding: .2rem .2rem;
        font-size:.28rem ;
        padding-bottom:0;
        
    }
    .like-top{
        font-size: .32rem;
        height: .44rem;
        line-height: .44rem;
        
    }
    .like-top img{
        width: .3rem;
        height: .3rem;
        margin-right: .05rem;
    }
    .like-bottom{
        margin-top: .2rem;
        
    }
    .like-bottom li{
        border-bottom: .05rem solid #f0f0f0;
        padding: .2rem 0;
        height: 2rem;
    }
    .like-img{
        float: left;
        overflow: hidden;
    }
    .like-img img{
        width: 2rem;
        height: 2rem;
    }
    .like-text{
        overflow: hidden;
        padding-left: .22rem;
        
    }
    .like-title{
        font-size: .32rem;
        margin-top: .3rem;
    }
    .like-message{
        margin-top: .3rem;
        font-size: .24rem;
        color: #616161;
    }
    .like-map{
        margin-top: .3rem;
        font-size: .24rem;
        color: #616161;
        position: relative;
        
        
    }
    .like-map span:nth-child(1){
        color: #ff8300;
    }
    .like-map span:nth-child(2){
        position: absolute;
        right: .2rem;
        top: .1rem;
        
    }
    .like-map b{
        font-size: .4rem;
    }
</style>