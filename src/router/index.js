import Login from "../components/Login.vue"
import Register from "../components/Register.vue"
import Navbar from "../components/Navbar.vue"
import Home from "../view/Home.vue"
import About from "../view/About.vue"
import Contact from "../view/Contact.vue"
import Produk from "../view/Produk.vue"
import Detail from "../view/Detail.vue"
import Router from "vue-router"
import Vue from "vue"

Vue.use(Router)
const routes = [

    {
        path: '/',
        name: 'LoginPage',
        component: Login
    },
   
    {
        path: '/register',
        name: 'RegisterPage',
        component: Register
    },
    {
        path: '/navbar',
        name: 'NavbarPage',
        component: Navbar
    },
    {
        path: '/home',
        name: 'HomePage',
        component: Home
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: About
    },
    {
        path: '/contact',
        name: 'ContactPage',
        component: Contact
    },
    {
        path: '/Produk',
        name: 'ProdukPage',
        component: Produk
    },
    {
        path: '/Detail',
        name: 'DetailPage',
        component: Detail
    }
];



const router = new Router({
    routes,
    mode: "history",
});

export default router;