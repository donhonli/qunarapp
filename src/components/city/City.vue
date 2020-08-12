<template>
    <div class="city">
        <Header></Header>
        <List :cities="cities" :hotCities="hotCities"></List>
    </div>
</template>
<script>
import Header from './Header'


import List from './List'
export default {
    components:{
        Header,

        List
    },
    mounted(){
        this.axios.get('/api/city.json')
            .then((res)=>{
                let data = res.data.data;
                this.cities = data.cities;
                this.hotCities = data.hotCities;
            })
    },
    data(){
        return{
            cities:{},
            hotCities:[]
        }
    }
}
</script>
<style scoped>
    .city{
        background-color: #f5f5f5;
    }
</style>