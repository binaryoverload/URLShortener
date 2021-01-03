import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MyLinks from "../views/MyLinks.vue";
import FourOFour from "../views/404.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/my-links",
        name: "My Links",
        component: MyLinks
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "*",
        name: "404",
        component: FourOFour
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;