<template>
    <section class="content-container">
        <div class="section-1">
            <div class="section-1-inner">
                <i class="fa-solid fa-play"></i>
                You are one step away from becoming a master curator of your <span>learning</span> resources
            </div>
        </div>
        <div class="section-2">
            <div class="section-2-inner">
                <p class="register">Register</p>
            <form @submit.prevent="checKFields">
                <div class="form-control">
                    <label class="label" for="first-name">First Name</label>
                    <p style="color:rgb(154, 223, 25);">{{ invalidFirstNameField }}</p>
                    <input type="text" name="first-name" id="first-name" v-model.trim="enteredFirstName">
                </div>
                <div class="form-control">
                    <label class="label" for="last-name">Last Name</label>
                    <p style="color:rgb(154, 223, 25);">{{ invalidLastNameField }}</p>
                    <input type="text" name="last-name" id="last-name" v-model.trim="enteredLastName">
                </div>
                <div class="form-control">
                    <label class="label" for="number">Phone Number</label>
                    <p style="color:rgb(154, 223, 25);">{{ invalidPhoneField }}</p>
                    <input type="tel" name="number" id="number" v-model.trim="enteredPhone">
                </div>
                <div class="form-control">
                    <label class="label" for="email">Email</label>
                    <p style="color:rgb(154, 223, 25);">{{invalidEmailField}}</p>
                    <input type="email" name="email" id="email" v-model.trim="enteredEmail">
                </div>
                <div class="form-control">
                    <label class="label" for="password">Password</label>
                    <p style="color:rgb(154, 223, 25);">{{invalidPasswordField}}</p>
                    <input type="text" name="password" id="password" v-model.trim="enteredPassword">
                </div>
                <div class="form-control-confirm">
                    <div class="form-control-confirm-inner">
                        <input id="confirm-terms-check" name="confirm-terms" type="checkbox" v-model="enteredCheck">
                        <label for="confirm-terms" class="confirm-terms" >Agree to <router-link to="/terms">Terms</router-link> and <router-link to="/policy">Privacy Policies</router-link>.</label>
                    </div>
                    <p style="color:rgb(154, 223, 25);">{{invalidCheckField}}</p>
                </div>
                <loading-animation2 v-if="loadingAnimation"></loading-animation2>
                <div v-else class="button-container">
                    <button>
                        <article>Create Account</article>
                    </button>  
                </div>
                <div class="bottom">
                    <p class="login-ask">Already have an account?</p>
                    <router-link to="/login" class="link">Login</router-link>
                </div>
            </form>
            </div>
        </div>
    </section>
</template>
<script>
import LoadingAnimation2 from "../ui-elements/LoadingAnimation2.vue";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import main from '@/main'
import { setDoc, doc  } from 'firebase/firestore'
/* getDoc, updateDoc, deleteDoc, deleteField, doc, setDoc ,addDoc, collection*/
export default {
    name: 'SignUp',
    components: {LoadingAnimation2},
    data() {
        return {
            enteredFirstName:'',
            enteredLastName:'',
            enteredPhone:'',
            enteredEmail:'',
            enteredPassword:'',
            enteredCheck: false,
            invalidFirstNameField: '',
            invalidLastNameField: '',
            invalidPhoneField: '',
            invalidEmailField: '',
            invalidPasswordField: '',
            invalidCheckField: '',
            loadingAnimation: false
        }
    },
    methods: {
        checKFields() {
            if(this.enteredFirstName === '' && this.enteredLastName === '' && this.enteredPhone === '' && this.enteredEmail === '' && this.enteredPassword === '') {
                this.invalidFirstNameField = 'Empty first name field'
                this.invalidLastNameField = 'Empty last name field'
                this.invalidPhoneField = 'Empty Phone number field'
                this.invalidEmailField = 'Empty email field'
                this.invalidPasswordField = 'Empty password field'
                this.invalidCheckField = 'Please agree to terms and privacy policies'
                return
            }

            if(this.enteredFirstName === '') {
                this.invalidFirstNameField = 'Empty first name field'
                return       
            }
            if(this.enteredLastName === '') {
                this.invalidLastNameField = 'Empty last name field'
                return        
            }
            if(this.enteredPhone === '') {
                this.invalidPhoneField = 'Empty Phone number field'
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
            if(this.enteredCheck === false) {
                this.invalidCheckField = 'Please agree to terms and privacy policies'
                return
            }  
            this.signUpRequest()
        },
        async signUpRequest() {
            try {
                this.loadingAnimation = true
                const userId = await createUserWithEmailAndPassword(main.auth(), this.enteredEmail, this.enteredPassword).then(cred => cred.user.uid)
                const users = await setDoc(doc(main.db(), `${userId}`, 'account-details'),{
                    firstName: this.enteredFirstName,
                    lastName: this.enteredLastName,
                    phone: this.enteredPhone,
                    email : this.enteredEmail
                    }
                )
                users  
                this.enteredFirstName = ''
                this.enteredLastName = ''
                this.enteredPhone = ''
                this.enteredEmail = ''
                this.enteredPassword = ''
                this.enteredCheck = false
                this.$router.push('/login')
                alert('Registered Successfully')
                this.loadingAnimation = false
            } catch (error) {
                alert(`Error - ${error.message}`)
            }
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
        background-color: rgb(154, 223, 25);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4rem;
    }
    .section-1-inner {
        height: 70vh;
        width: 80%;
        background-color: rgba(255, 255, 255, 0.6);
        padding: 2rem;
        border-radius: 10px;
    }

    .section-2 {
        background-color: whitesmoke;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .section-2-inner {
        height: 85vh;
        width: 80%;
        padding: 2rem;
        border-radius: 10px;
        background-color: black;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-evenly;
    }

    .register {
        color: rgb(154, 223, 25);
        font-size: 1.5rem;
    }

    label {
        color: whitesmoke;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 90%;
        position: relative;
    }

    .form-control {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        width: 100%;
    }
    .form-control-confirm-inner {
        display: flex;
        flex-flow: row ;
        justify-content: center;
        align-items: center;
    }
    .form-control-confirm {
        display: flex;
        flex-flow: column ;
        justify-content: center;
        align-items: center;
    }
    #confirm-terms-check {
        display: inline;
        height: 15px;
        width: 15px;
        margin-right: 7px;
    }
    .confirm-terms {
        display: inline;
    }
    .label {
        text-align: left;
    }

    .button-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input {
        height: 40px;
        width: 100%;
        border: 0;
        border-radius: 10px;
        padding: 0.3rem;
        transition: 0.3s;
    }
    input:focus {
        outline-color: rgb(154, 223, 25);
        color: rgb(154, 223, 25);
        background-color: transparent;
    }
    input::placeholder, ::-webkit-input-placeholder {
        color: black;
    }
    button {
        padding: 0.5rem;
        border: 0;
        border-radius: 20px;
        transition: 0.5s;
        cursor: pointer;
    }

    button:hover {
        background-color: rgb(154, 223, 25);
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
        color: rgb(154, 223, 25);
        text-decoration: none;
    }

@media screen and (max-width: 450px) {
    .content-container {
        height: 100vh;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr ;
        grid-template-rows: 1fr 1fr;
    }

    span, .fa-play{
        color: white;
    }

    .section-1 {
        background-color: rgb(154, 223, 25);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        padding: 0.5rem;
    }
    .section-1-inner {
        width: 90%;
        height: auto;
        background-color: rgba(255, 255, 255, 0.6);
        padding: 1rem;
        border-radius: 10px;
        
    }

    .section-2 {
        background-color: whitesmoke;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;

    }

    .section-2-inner {
        width: 90%;
        padding: 1rem;
        border-radius: 10px;
        background-color: black;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-evenly;
    }

    .register {
        color: rgb(154, 223, 25);
        font-size: 1rem;
    }

    label {
        color: whitesmoke;
        font-size: 0.8rem;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 90%;
        position: relative;
    }

    .form-control {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        width: 100%;
    }
    .form-control-confirm-inner {
        display: flex;
        flex-flow: row ;
        justify-content: center;
        align-items: center;
    }
    .form-control-confirm {
        display: flex;
        flex-flow: column ;
        justify-content: center;
        align-items: center;
    }
    #confirm-terms-check {
        display: inline;
        height: 15px;
        width: 15px;
        margin-right: 7px;
    }
    .confirm-terms {
        display: inline;
        font-size: 0.66rem;
    }
    .label {
        text-align: left;
    }

    .button-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input {
        height: 30px;
        width: 100%;
        border: 0;
        border-radius: 10px;
        padding: 0.3rem;
        transition: 0.3s;
    }
    input:focus {
        outline-color: rgb(154, 223, 25);
        color: rgb(154, 223, 25);
        background-color: transparent;
    }
    input::placeholder, ::-webkit-input-placeholder {
        color: black;
    }
    button {
        padding: 0.5rem;
        border: 0;
        font-size: 0.7rem;
        border-radius: 20px;
        transition: 0.5s;
        cursor: pointer;
    }

    button:hover {
        background-color: rgb(154, 223, 25);
    }

    .bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .login-ask {
        color: whitesmoke;
        font-size: 0.8rem;
    }

    p {
        font-size: 0.5rem;
    }
    .link {
        font-size: 0.8rem;
    }

    a {
        color: rgb(154, 223, 25);
        text-decoration: none;
    }
}
</style>