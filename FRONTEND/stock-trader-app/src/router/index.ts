import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateUser from "../views/CreateUser.vue";
import CreateStock from "../views/CreateStock.vue";
import StockMarket from "../views/StockMarket.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  }, 
  {
    path: "/createuser",
    component: CreateUser
  },
  {
    path: "/createstock",
    component: CreateStock
  },
  {
    path: "/stockmarket",
    component: StockMarket
  }
];

const router = new VueRouter({
  routes
});

export default router;
