/*
 * @Author: jack.hai
 * @Date: 2022-06-26 14:43:32
 * @LastEditTime: 2022-06-26 16:27:31
 * @Description: 
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },

];





const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
