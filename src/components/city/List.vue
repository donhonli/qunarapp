<template>
<div ref="container" class="container">
    <div>
        <div class="hot">
            <div class="hot-title">热门城市</div>
            <ul class="hot-list">
                <li class="hot-item" v-for="item in hotCities" :key="item.id"
                    @click="changeCityName(item.name)"
                >
                    {{item.name}}
                </li>
                
            </ul>
        </div>
        <div class="sort">
            <div class="sort-title">字母排序</div>
            <ul class="sort-list">
                <li 
                    class="sort-item" 
                    v-for="(val,key) in cities" 
                    :key="key" 
                    @click="changeSort(key)"
                >
                        {{key}}
                    </li>
                    
            </ul>
        </div>
        <div class="list">
            <div v-for="(val,key) in cities" :key="key" :ref="key">
                <div class="list-title">{{key}}</div>
                <ul>
                    <li class="list-item" 
                    v-for="item in val" 
                    :key="item.id"
                    @click="changeCityName(item.name)">{{item.name}}</li>
                
                </ul>
            </div>

        </div>
    </div>
    
</div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
    props:['cities','hotCities'],
    data(){
        return{
            scroll:''
        }
        
    },
    mounted() {
        let container = this.$refs['container'];
        this.scroll = new BScroll(container)
    },
    methods:{
        changeSort(sortName){
            
            this.scroll.scrollToElement(this.$refs[sortName][0],1000);
        },
        changeCityName(cityName){
            this.changeStr(cityName);
            this.$router.push('/');
        },
        ...mapMutations(['changeStr'])
        
    }
}
</script>
<style scoped lang="stylus">
@import '~css/common.styl'
.container{
    position:absolute;
    overflow:hidden;
    left:0;
    right:0;
    bottom:0;
    top:.88rem;
    background-color:#f5f5f5;

}
.hot-title{
        font-size:.24rem;
        color:#212121;
        padding: .2rem .3rem;
    }
    .hot-list{
        background-color: #fff;
        font-size: .28rem;
        overflow: hidden;
        color: #212121;
    }
    .hot-item{
        text-align: center;
        height: .9rem;
        line-height: .9rem;
        width: 33.33333333%;
        float: left;
        border-bottom: .02rem solid #ddd;
        border-right:.02rem solid #ddd; ;
        box-sizing: border-box;
        /* display: block; */
        
        
    }


.sort-title{
        font-size:.24rem;
        color:#212121;
        padding: .2rem .3rem;
    }
    .sort-list{
        padding: .3rem 0;
        background-color: #fff;
        overflow: hidden;
    }
    .sort-item{
        height: .9rem;
        width: 16.6666667%;
        text-align: center;
        line-height: .9rem;
        font-size: .28rem;
        float: left;
        display: block;
    }



    .list-title{
        font-size:.24rem;
        color:#212121;
        padding: .2rem .3rem;
 
    }
    ul{
        
        background-color: #fff;
        overflow: hidden;
    }
    .list-item{
        height: .9rem;
        width: 25%;
        text-align: center;
        line-height: .9rem;
        font-size: .28rem;
        float: left;
        display: block;
        textOverflow();
        border-bottom: .02rem solid #ddd;
        border-right:.02rem solid #ddd; ;
        box-sizing: border-box;
    }
</style>