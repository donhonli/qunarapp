import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = '上海';
defaultCity = localStorage.city;




export default new Vuex.Store({
    state:{
        city:defaultCity
    },
    mutations:{
        changeStr(state,cityName){
            state.city = cityName;
            localStorage.city = cityName;
        }
    },
    actions:{

    },
    modules:{

    }
})