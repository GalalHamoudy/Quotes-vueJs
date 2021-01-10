import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


import sad from "../components/Quotes/sad.vue";
import islam from "../components/Quotes/islam.vue";
import love from "../components/Quotes/love.vue";
import miss from "../components/Quotes/miss.vue";
import Apology from "../components/Quotes/Apology.vue";
import reproach from "../components/Quotes/reproach.vue";




Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Poetrys",
    name: "Poetrys",
    component: () =>
      import("../views/Poetrys.vue")
  },
  {
    path: "/Quotes",
    name: "Quotes",
    component: () =>
      import("../views/Quotes.vue"),
    children: [
      { path: '/Quotes/sad', component: sad },
      { path: '/Quotes/islam', component: islam },
      { path: '/Quotes/love', component: love },
      { path: '/Quotes/miss', component: miss },
      { path: '/Quotes/Apology', component: Apology },
      { path: '/Quotes/reproach', component: reproach },
    ]
  },

  {
    path: "/Rules",
    name: "Rules",
    component: () =>
      import("../views/Rules.vue")
  },
  {
    path: "/Storys",
    name: "Storys",
    component: () =>
      import("../views/Storys.vue"),
  },
  {
    path: "/Add/Storys",
    name: "AddStorys",
    component: () =>
      import("../views/Add/Storys.vue")
  },
  {
    path: "/Add/Rules",
    name: "AddRules",
    component: () =>
      import("../views/Add/Rules.vue")
  },
  {
    path: "/Add/Quotes",
    name: "AddQuotes",
    component: () =>
      import("../views/Add/Quotes.vue")
  },
  {
    path: "/Add/Poetrys",
    name: "AddPoetrys",
    component: () =>
      import("../views/Add/Poetrys.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
