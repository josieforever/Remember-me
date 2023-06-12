<template>
    <article>
        <form @submit.prevent="" >
            <div class="form-control">
                <label for="">Title</label>
                <input type="text" v-model.trim="enteredTitle" >
            </div>
            <div class="form-control">
                <label for="">Description</label>
                <input type="text" v-model.trim="enteredDescription" >
            </div>
            <div class="form-control">
                <label for="">Link</label>
                <input type="text" v-model.trim="enteredLink" >
            </div>
            <div class="button-container">
                <button @click="$emit('cancel')" >cancel</button>
                <button @click="confirm" >Save</button>
            </div>
        </form>
        <base-dialog v-if="areYouSure" :title="displayTitle" :areYouSureMessage="areYouSureMessage" ></base-dialog>

    </article>
</template>

<script>
import BaseDialog from './BaseDialog.vue'

export default {
    name: 'EditDialog',
    components: {BaseDialog},
    props: ['title','description', 'link'],
    data() {
        return {
            enteredTitle: this.title,
            enteredDescription: this.description,
            enteredLink: this.link,
            areYouSure: false,
            areYouSureMessage: '',
            displayTitle: this.title
        }
    },
    methods: {
        confirm() {
            /* this.checkFields() */
            this.$emit('confirm', this.enteredTitle, this.enteredDescription, this.enteredLink)
            this.enteredTitle = '',
            this.enteredDescription = '',
            this.enteredLink = ''
        }
        }
    }
</script>

<style scoped>

article {
    width: 95%;
    height: 85%;
    margin: 15px auto;
    background-color: rgb(213, 213, 213);
    border-radius: 20px;
    padding: 1.5rem;
}

.form-control {
    color: white;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
}

input, textarea {
    color: black;
    background-color: white;
    border: 2px solid black ;
    padding: 0.2rem;
    border-radius: 10px;
}

input:focus, textarea:focus {
        outline-color: white;
        color: rgb(154, 223, 25);
        background-color: black;
}

form {
    background-color: rgb(213, 213, 213);
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
    background-color: #2f372a44;
    transition: 0.4s;
}

button:hover {
    background-color: rgb(154, 223, 25);
}

.button-container {
    display: flex;
    flex-direction: row;
    width: 70%;
    align-items: center;
    justify-content: space-evenly;
    gap: 0.5rem;
    padding: 0;

}

label {
    text-align: left;
    color: white;
    font-size: 1.2rem;
}

@media screen and (max-width: 450px) {
    article {
    width: 95%;
    height: 85%;
    margin: 15px auto;
    background-color: rgb(213, 213, 213);
    border-radius: 20px;
    padding: 0.5rem;
}

input, textarea {
    color: black;
    background-color: white;
    border: 2px solid black ;
    padding: 0.2rem;
    border-radius: 10px;
    font-size: 0.8rem;
}

input:focus, textarea:focus {
        outline-color: white;
        color: rgb(154, 223, 25);
        background-color: black;
}

label {
    text-align: left;
    color: white;
    font-size: 0.8rem;
}
}

</style>