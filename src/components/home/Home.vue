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
            vacationList:[]
        }
    },
    mounted(){
        this.http();
    },
    methods:{
        http(){
            let that = this;
            that.axios.get("/api/dataHome.json")
                .then((res)=>{
                    let data = res.data.data[0];
                    that.swiperList = data.swiperList;
                    that.iconsList = data.iconsList;
                    that.likeList = data.likeList;
                    that.vacationList = data.vacationList;
                    that.hotList = data.hotList;
                    
                })
        }
    }
}
</script>
<style >
</style>
