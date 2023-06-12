<template>
    <section>
        <base-dialog v-if="invalidInput" :invalidInputMessage="invalidInputMessage" :invalidInputTitle="invalidInputTitle" @confirm="closeDialog"></base-dialog>
        <form @submit.prevent="checkFields">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" class="title" v-model.trim="enteredTitle">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea name="description" id="description" class="description" cols="30" rows="10"  v-model.trim="enteredDescription"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="text" name="link" id="link" class="link" v-model.trim="enteredLink">
            </div>
            <div class="button-container">
                <button>Add Resource</button>
            </div>
            </form>
    
    </section>
</template>

<script>
import main from '@/main'
import { collection, addDoc } from 'firebase/firestore'
import BaseDialog from '../ui-elements//BaseDialog.vue'

export default {
    name: 'AddResources',
    components: { BaseDialog },
    inject: ['updateTab'],
    data() {
        return {
            enteredTitle: '',
            enteredDescription: '',
            enteredLink: '',
            firebaseUrl: 'https://vue-http-demo-3405a-default-rtdb.firebaseio.com/resouces.json',
            invalidInput: false,
            invalidInputMessage: '',
            invalidInputTitle: 'Invalid Input'
        }
    },
    methods: {
        checkFields() {
            if (this.enteredTitle === '' && this.enteredDescription === '' && this.enteredLink === '') {
                this.invalidInput = true
                this.invalidInputMessage = 'All input fields are invalid'
                return
            }
            if (this.enteredTitle === '') {
                this.invalidInput = true
                this.invalidInputMessage = 'invalid input at Title field'
                return
            }
            if (this.enteredDescription === '') {
                this.invalidInput = true
                this.invalidInputMessage = 'invalid input at Description field'
                return
            }
            if (this.enteredLink === '') {
                this.invalidInput = true
                this.invalidInputMessage = 'invalid input at Link field'
                return
            }
            
            this.submitForm()
        },
        async submitForm() {
            this.$root.unique
            const docRef = await addDoc(collection(main.db(), `${this.$root.unique}`), {
                    title: this.enteredTitle,
                    description: this.enteredDescription,
                    link: this.enteredLink
                })
            docRef
            this.enteredTitle = '',
            this.enteredDescription = '',
            this.enteredLink = ''
            this.updateTab()
            this.$root.$emit('refresh')
        },
        closeDialog(data) {
            this.invalidInput = data
        }
    }

}
</script>



<style scoped>

section {
    width: 95%;
    margin: 15px auto;
    background-color: rgb(213, 213, 213);
    border-radius: 20px;
    padding: 1.5rem;
    margin-bottom: 11rem;
}

.form-control {
    color: white;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
}

form {
    height: 99%;
}

input, textarea {
    color: black;
    background-color: white;
    border: 2px solid rgb(154, 223, 25);
    padding: 0.2rem;
    border-radius: 10px;
}

input {
    height: 3rem;
    font-size: 1rem;
}

label {
    font-size: 1rem;
    text-align: left;
    color: white;
    font-size: 1.2rem;
}

input:focus, textarea:focus {
        outline-color: rgb(154, 223, 25);
        color: rgb(154, 223, 25);
        background-color: black;
}

.button-container {
    margin: 10px auto;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    padding: 0.3rem;
    border: none;
    border-radius: 10px;
    color: black;
    background-color: white;
    transition: 0.4s;
    font-size: 1rem;
}

button:hover {
    background-color: rgb(154, 223, 25);
}

@media screen and (max-width: 450px){
    section {
    width: 95%;
    margin: 15px auto;
    background-color: rgb(91, 91, 91);
    border-radius: 20px;
    padding: 0.5rem;
    margin-bottom: 11rem;
}

.form-control {
    color: white;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
}

form {
    height: 99%;
}

input, textarea {
    width: 99%;
    color: black;
    background-color: white;
    border: 2px solid rgb(154, 223, 25);
    padding: 0.2rem;
    border-radius: 10px;
}

input {
    height: 2rem;
    font-size: 0.7rem;
}

label {
    font-size: 0.8rem;
    text-align: left;
    color: white;
}

input:focus, textarea:focus {
        outline-color: rgb(154, 223, 25);
        color: rgb(154, 223, 25);
        background-color: black;
}

.button-container {
    margin: 10px auto;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    padding: 0.3rem;
    border: none;
    border-radius: 10px;
    color: black;
    background-color: white;
    transition: 0.4s;
    font-size: 0.7rem;
}

button:hover {
    background-color: rgb(154, 223, 25);
}
}

</style>