<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconsList="iconsList"></home-icons>
        <home-location></home-location>
        <home-hot :hotList="hotList"></home-hot>
        <home-like :likeList="likeList"></home-like>
        <home-vacation :vacationList="vacationList"></home-vacation>
    </div>
</template>
<script>
import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcons from './pages/Icons'
import HomeLocation from './pages/Location'
import HomeHot from './pages/Hot'
import HomeLike from './pages/Like'
import HomeVacation from './pages/Vacation'
import {mapState} from 'vuex'
export default {
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeLocation,
        HomeHot,
        HomeLike,
        HomeVacation
    },
    data(){
        return {
            swiperList:[],
            iconsList:[],
            hotList:[],
            likeList:[],
            vacationList:[],
            changecity:''
        }
    },
    mounted(){
        this.changecity = this.city;
        this.http();
    },
    activated(){
        if(this.changecity != this.city){
            this.http();
            this.changecity = this.city;
        }
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        http(){
            let that = this;
            that.axios.get("/api/dataHome.json")
                .then((res)=>{
                    let data = res.data.data;
                    data.forEach((item,index) => {
                        if(item.city == that.city){
                            that.swiperList = item.swiperList;
                            that.iconsList = item.iconsList;
                            that.likeList = item.likeList;
                            that.vacationList = item.vacationList;
                            that.hotList = item.hotList;
                    
                        }else{
                            that.swiperList = data[0].swiperList;
                            that.iconsList = data[0].iconsList;
                            that.likeList = data[0].likeList;
                            that.vacationList = data[0].vacationList;
                            that.hotList = data[0].hotList;
                        }
                    });
                    
                })
        }
    }
}
</script>
<style >
</style>
