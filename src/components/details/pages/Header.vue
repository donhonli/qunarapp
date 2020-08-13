<template>
    <div class="header">
        <div @click="toHome" v-show="showHeader" class="header-return">
            <span class="return-bg"></span>
            <i class="iconfont">&#xe61c;</i>
        </div>
        <div 
        v-show="!showHeader"
        :style="style" 
        class="header-top">
            <div @click="toHome" class="header-left">
                <i class="iconfont">&#xe61c;</i>
            </div>
            故宫
            
            
        </div> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            showHeader:true,
            style:{
                opacity:0
            }
        }
    },
    mounted(){
        let that = this;
        window.addEventListener("scroll",function(){
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            if(top > 10){
                let opacity = top/160;
                opacity = opacity > 1 ? 1 : opacity;
                that.style = {
                    opacity
                }
                that.showHeader = false;
            }else{
                that.showHeader = true;
            }
        })
    },
    methods:{
        toHome(){
            this.$router.push('/');
        }
    }
}
</script>
<style scoped lang="stylus">
@import '~css/var.styl'
    .header-return{
        position: absolute;
        left: .1rem;
        top: .1rem;
        width:.72rem;
        height: .72rem;
       
    }
    .return-bg{
        display: block;
        width: .72rem;
        height: .72rem;
        border-radius: .36rem;
        background-color: #000;
        opacity: 0.5
    }
    .header-return .iconfont{
        line-height: .72rem;
        text-align: left;
        text-indent: .15rem;
        font-size: .4rem;
        color: white;
        position: absolute;
        left: 0;
        top: 0;
        font-weight: bold;
    }
    .header-top{
        width: 100%;
        height: .88rem;
        background-color: $bgColor;
        color:#fff;
        font-size: .32rem;
        line-height .88rem
        text-align:center;
        align-items: center;
        position fixed
        top 0
        
    }
    .header-left{
        position absolute
        width: .4rem;
        padding: 0 .2rem;
        text-align: center;
        font-weight: bold;
    
}
</style>