<template>
    <div class="container">
        <header class="header">
        <section class="header-title-line">
            <article class="logo">
                <i class="fa-brands fa-readme"></i>
                <span class="logo-text">Remember-Me</span>
            </article>
            <button class="menu-button">
                <div class="menu-icon"></div>
            </button>
        </section>
        <nav class="nav">
            <ul class="ul">
                <li class="li" @click="isClicked"><a class="a" >Account</a></li>
                <li class="li" @click="logout" ><router-link class="a" to="">Logout</router-link></li>
            </ul>
        </nav>
    </header>
        <account-details v-if="clicked" :name="name" :email="email" :phone="phone" @close="close"></account-details>
    </div>
</template>

<script>
import AccountDetails from '../ui-elements/AccountDetails.vue';
import main from '@/main';
import {/* collection */ getDoc, doc } from 'firebase/firestore'

export default {
    name: 'TheHeader',
    components: {AccountDetails},
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            clicked: false,
            fetchResults: []

        }
    },
    methods: {
        logout() {
            main.auth().signOut().then(() => {
                this.$router.push('/login')
            })
        },
        isClicked() {
            if (this.clicked === false) {
                this.clicked = true
            } else {
                this.clicked = false
            }
        },
        close() {
            this.clicked = false
        },
        async fetchAccountDetails() {
            const query = doc(main.db(), `${this.$root.unique}`, 'account-details');
            const querySnapshot = await getDoc(query);
            const accountDetails = querySnapshot.data()
            this.name = accountDetails.firstName+' '+accountDetails.lastName
            this.email = accountDetails.email
            this.phone = accountDetails.phone
    }
},
    created() {
        this.$root.unique
        this.$root.unique
        this.fetchAccountDetails()
    }
}

</script>

<style scoped>
.container {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
}

.header {
    width: 100%;
    background-color: white;
    color: black;
}

.header-title-line {
    padding: 0.25rem 0.5rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}

.menu-button {
    background-color: black;
    border: none;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 4px;
    margin-right: 10.5%;
    cursor: pointer;
}

.menu-icon, .menu-icon::before, .menu-icon::after {
    background-color: rgb(161, 239, 15);
    width: 40px;
    height: 5px;
    position: absolute;
    transition: all 0.5s;
    border-radius: 5px;
}

.menu-icon::before, .menu-icon::after {
    content: '';
}

.menu-icon::before {
    transform: translate(-20px, -12px);
}

.menu-icon::after {
    transform: translate(-20px, 12px);
}

:is(.header:hover, .header:focus-within) .menu-icon::before {
    transform: translateX(-20px) rotate(45deg); 
}

:is(.header:hover, .header:focus-within) .menu-icon {
    background-color: transparent; 
    transform: rotate(720deg);  
}

:is(.header:hover, .header:focus-within) .menu-icon::after {
    transform: translateX(-20px) rotate(-45deg);
}

:is(.header:hover, .header:focus-within) .nav {
    transform: translateX(-20px) rotate(-45deg);
    display: block;
}

.logo {
    margin-left: 10%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.fa-brands {
    font-size: 2rem;
    color: rgb(161, 239, 15);
    background-color: black;
    padding: 0.5rem;
    border-radius: 50%
}

.logo-text {
    font-size: 1.5rem;
}


.nav {
    width: 20%;
    position: absolute;
    right: 0;
    top: 100%;
    display: none;
    transform-origin: top center;
    background-color: white;
    animation: showMenu 0.5s ease forwards;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    margin-right: 3%;
}

@keyframes showMenu {
    0% {
        transform: scaleY(0);
    }
    80% {
        transform: scaleY(1.2);
    }
    100% {
        transform: scaleY(1);
    }
}

.nav .ul {
    list-style-type: none;
    display: flex;
    flex-flow: column nowrap;
}

.nav .ul .li {
    padding: 0.5rem;
    border-top: 1px solid var(black);
}

.nav .ul .li .a {
    display: block;
    text-align: center;
    width: 80%;
    margin: auto;
}

.nav .ul .li .a:any-link {
    color: var(--Header-COLOR);
    text-decoration: none;
}

.nav .ul .li .a:hover, .nav .ul .li .a:focus {
    transform: scale(1.2);
    transition: 0.3s;
    background-color: rgb(161, 239, 15);
} 

.a {
    border-radius: 6px;
    cursor: pointer;
}

@media screen and (max-width: 450px) {
    .logo {
    margin-left: 10%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.fa-brands {
    font-size: 1rem;
    color: rgb(161, 239, 15);
    background-color: black;
    padding: 0.5rem;
    border-radius: 50%
}

.logo-text {
    font-size: 1rem;
}

.menu-button {
    scale: 0.6;
    background-color: black;
    border: none;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 4px;
    margin-right: 7.5%;
}

.nav {
    width: 30%;
    position: absolute;
    right: 0;
    top: 100%;
    display: none;
    transform-origin: top center;
    background-color: white;
    animation: showMenu 0.5s ease forwards;
    margin-right: 3%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
.nav .ul .li {
    padding: 0.5rem;
    border-top: 1px solid var(black);
    font-size: 0.8rem;
}
}


</style>