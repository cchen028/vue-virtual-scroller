import Vue from 'vue'
// vue-virtual-scroller
// import VirtualScroller, { RecycleScroller as Comp } from '../../'
import VirtualScroller from '../../'

import {RecycleScroller as Comp } from '../../src/components/RecycleScroller.vue'
import DynamicScroller from '../../src/components/DynamicScroller.vue'
import DynamicScrollerItem from '../../src/components/DynamicScrollerItem.vue'
import '../../dist/vue-virtual-scroller.css'
// App
import router from './router'
import App from './App.vue'

console.log(VirtualScroller, Comp)
Vue.use(DynamicScroller)
Vue.use(DynamicScrollerItem)
// Vue.use(VirtualScroller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
