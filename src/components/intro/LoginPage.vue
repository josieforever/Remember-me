<template>
    <section class="content-container">
        <div class="section-2">
            <div class="section-2-inner">
                <div class="display-container">
                    <article>
                        <i class="fa-brands fa-readme"></i>
                    </article>
                </div>
                <p class="hello">Hello Again!</p>
                <form @submit.prevent="checKFields">
                    <div class="form-control">
                        <label class="label" for="email">Email</label>
                        <p style="color:white;">{{invalidEmailField}}</p>
                        <input type="email" name="email" id="email" v-model.trim="enteredEmail">
                    </div>
                    <div class="form-control">
                        <label class="label" for="password">Password</label>
                        <p style="color:white;">{{invalidPasswordField}}</p>
                        <input type="text" name="password" id="password" v-model.trim="enteredPassword">
                    </div>
                    <div class="button-contain">
                        <loading-animation2 v-if="loadingAnimation"></loading-animation2>
                        <button v-else>Login</button>
                    </div>
                    <div class="bottom">
                        <p class="login-ask">Don't have an account?</p>
                        <router-link to="/signUp" class="link">Sign Up</router-link>
                    </div>
                </form>
            </div>
        </div>
        <div class="section-1">
            <div class="section-1-inner">
                <i class="fa-solid fa-play"></i>
                Digital platform for storing and curating <span>learning</span> resources
            </div>
        </div>
    </section>
</template>

<script>
import main from '@/main'
import LoadingAnimation2 from '../ui-elements/LoadingAnimation2.vue'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default {
    name: 'LoginPage',
    components: {LoadingAnimation2},
    data() {
        return {
            enteredEmail:'',
            enteredPassword:'',
            invalidPasswordField: '',
            invalidEmailField: '',
            loadingAnimation: false
        }
    },
    methods: {
        checKFields() {
            if(this.enteredEmail === '' && this.enteredPassword === '') {
                this.invalidEmailField = 'Empty email field'
                this.invalidPasswordField = 'Empty password field'
                return
            }
            if(this.enteredEmail !== '' && this.enteredPassword === '') {
                this.invalidEmailField = ''
                this.invalidPasswordField = 'Empty password field'
                return         
            }
            if(this.enteredEmail === '' && this.enteredPassword !== '') {
                this.invalidEmailField = 'Empty email field'
                this.invalidPasswordField = ''
                return         
            } 
            if(this.enteredEmail === '') {
                this.invalidEmailField = 'Empty email field'
                return         
            }
            if(this.enteredPassword === '') {
                this.invalidPasswordField = 'Empty password field'
                return         
            } 
            this.loginUser()
        },
        async loginUser() {
            try {
                this.loadingAnimation = true
                const userId = await signInWithEmailAndPassword(main.auth(), this.enteredEmail, this.enteredPassword).then(cred => cred.user.uid)
                this.$root.unique = userId
                this.$router.push('/home')
                this.loadingAnimation = false
            } catch (error) {
                alert(`Error - ${error.message}`)
            }

        },
        beforeUnmount() {
            console.log('i am working')
        }
    }
}
</script>
 

<style scoped>
    .content-container {
        height: 100vh;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr ;
        grid-template-rows: 1fr;
    }

    span, .fa-play{
        color: white;
    }

    .section-1 {
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4rem;
    }
    .section-1-inner {
        height: 70vh;
        width: 80%;
        background-color: white;
        padding: 2rem;
        border-radius: 10px;
    }

    .section-2 {
        background-color: whitesmoke;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    span, .fa-play{
        color: rgb(154, 223, 25);
    }

    .section-2-inner {
        height: 85vh;
        width: 80%;
        padding: 2rem;
        border-radius: 10px;
        background-color: rgb(154, 223, 25);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .display-container {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;

    }

    .fa-brands {
        color: black;
        font-size: 5rem;
        padding: 0 0 0 5rem;
        padding: 1.5rem;
        border-radius: 50%;
        border: 2px solid black;
    }

    .hello {
        color: white;
        font-size: 2rem;
    }

    label {
        color: black;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 99%;
        height: 80%;
    }

    .form-control {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        width: 100%;
    }
    .form-control-confirm {
        display: flex;
        flex-flow: row nowrap;
        justify-content: left;
        align-items: center;
    }

    .label {
        text-align: left;
    }

    .button-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input {
        height: 40px;
        width: 100%;
        border: 2px solid black;
        border-radius: 10px;
        padding: 0.3rem;
        transition: 0.3s;
    }
    input:focus {
        outline-color: white;
        color: white;
        background-color: black;
    }

    button {
        padding: 0.5rem 3rem;
        border: 0;
        border-radius: 20px;
        transition: 0.5s;
        cursor: pointer;
        background-color: white;
        color: black;
        border: 2px solid black;
    }

    button:hover {
        background-color: black;
        color: white;
        border: 2px solid white;
    }

    .bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .login-ask {
        color: whitesmoke
    }

    .link {
        
    }

    a {
        color: black;
        text-decoration: none;
        text-align: center;
    }

    @media screen and (max-width: 450px){
        .content-container {
        height: 100vh;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }

    span, .fa-play{
        color: white;
    }

    .section-1 {
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        padding: 0.5rem;
    }
    .section-1-inner {
        height: auto;
        width: 90%;
        background-color: white;
        padding: 1rem;
        border-radius: 10px;
    }

    .section-2 {
        background-color: whitesmoke;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    span, .fa-play{
        color: rgb(154, 223, 25);
    }
    .section-2 {
        padding: 0.5rem;
    }

    .section-2-inner {
        height: auto;
        width: 90%;
        padding: 2rem;
        border-radius: 10px;
        font-size: 0.7rem;
        background-color: rgb(154, 223, 25);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .display-container {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;

    }

    .fa-brands {
        color: black;
        font-size: 1rem;
        padding: 0 0 0 5rem;
        padding: 1.5rem;
        border-radius: 50%;
        border: 0.5px solid black;
    }

    .hello {
        color: white;
        font-size: 1.2rem;
    }

    label {
        color: black;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 99%;
        height: 80%;
    }

    .form-control {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        width: 100%;
    }
    .form-control-confirm {
        display: flex;
        flex-flow: row nowrap;
        justify-content: left;
        align-items: center;
    }

    .label {
        text-align: left;
    }

    .button-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input {
        height: 30px;
        width: 100%;
        border: 2px solid black;
        border-radius: 10px;
        padding: 0.3rem;
        transition: 0.3s;
        margin-bottom: 5px;
        font-size:0.7rem;
    }
    input:focus {
        outline-color: white;
        color: white;
        background-color: black;
    }

    button {
        padding: 0.2rem 0.5rem;
        border: 0;
        border-radius: 20px;
        transition: 0.5s;
        cursor: pointer;
        background-color: white;
        color: black;
    }

    button:hover {
        background-color: black;
        color: white;
        border: 2px solid white;
    }

    .bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .login-ask {
        color: whitesmoke
    }

    .link {
        
    }

    a {
        color: black;
        text-decoration: none;
        text-align: center;
    }
        
    }
</style>