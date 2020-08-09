// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'css/Reset.css'// css
// 引入字体图标
import 'css/iconfont.css'
// fastclick
import FastClick from 'fastclick'
FastClick.attach(document.body)
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'css/swiper.css'
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
