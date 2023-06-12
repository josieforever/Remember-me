import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import SignUp from './components/intro/SignUp.vue'
import LandingPage from './components/intro/LandingPage.vue'
import LoginPage from './components/intro/LoginPage.vue'
import HomePage from './components/main/HomePage.vue'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyClc3XXTaSFut9ETGSz0aHr6PDuayh3s38",
  authDomain: "remember-me-7c40d.firebaseapp.com",
  projectId: "remember-me-7c40d",
  storageBucket: "remember-me-7c40d.appspot.com",
  messagingSenderId: "795319310874",
  appId: "1:795319310874:web:dea921a151ca253d958fa3",
  measurementId: "G-1SVYXSPPKC"
};

// Initialize 
const app = initializeApp(firebaseConfig)
export default { 
  auth() {
    return getAuth(app)
  },  
  db() {
    return getFirestore(app)
  }   
}


Vue.use(VueRouter) 
export const router =  new VueRouter({
  mode:'history',
  routes: [
    {path: '/', redirect: '/landing'},
    {path: '/landing', component: LandingPage},
    {path: '/signUp', component: SignUp},
    {path: '/login', component: LoginPage},
    {path: '/home', component: HomePage, meta: {requiresAuth: true}}
  ]
})

router.beforeEach((to, from, next) => {
  const authenticatedUser = getAuth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !authenticatedUser) next('login')
  else next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
