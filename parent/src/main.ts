/*
 * @Author: jack.hai
 * @Date: 2022-06-26 14:33:31
 * @LastEditTime: 2022-06-26 16:25:28
 * @Description: 
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
    {
        name: 'react app', // app name registered
        entry: '//localhost:8181',
        container: '#base_item',
        activeRule: '/vue',
    },

]);
start();
createApp(App).use(store).use(router).mount("#app");
