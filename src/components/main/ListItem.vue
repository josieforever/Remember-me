<template>
    <div>
        <li>
            <delete-dialog v-if="clickedDelete" :itemToBeDeleted="itemToBeDeleted" @confirm="confirmDelete" @cancel="cancelDelete"></delete-dialog>
            <edit-dialog v-if="clickedEdit" @confirm="confirmEdit" @cancel="cancelEdit" :itemToBeDeleted="itemToBeDeleted"  :title="title" :description="description" :link="link"></edit-dialog>
            <article>
                <div class="top"><p>{{ title }}</p> <section><i @click="editItem" class="fa-solid fa-pen-to-square"> </i><i @click="deleteItem" class="fa-solid fa-trash"></i></section></div>
                <div class="inner">
                    <div class="middle">{{ description }}</div>
                    <a class="bottom" :href="link" target="_blank">View Resources</a>
                </div>
            </article>
        </li>
    </div>
</template>

<script>
import main from '@/main'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import EditDialog from '../ui-elements/EditDialog.vue'
import DeleteDialog from '../ui-elements//DeleteDialog.vue'
export default {
    name: 'ListItem',
    props: ['id', 'title', 'description', 'link'],
    components: {DeleteDialog, EditDialog},
    data() {
        return { 
            clickedDelete: false,
            clickedEdit: false,
            itemToBeDeleted: this.title
         }
    },
    methods: {
        deleteItem() {
            this.clickedDelete = true 
        },
        editItem() {
            this.clickedEdit = true 
        }
        ,
        async confirmDelete() {
            await deleteDoc(doc(main.db(), `${this.$root.unique}`, `${this.id}`))
            this.$root.$emit('itemDeleted')
            this.clickedDelete = false
        },
        cancelDelete() {
            this.clickedDelete = false
        },
        async confirmEdit(title, description, link) {
            this.id
            const update = doc(main.db(), `${this.$root.unique}`, `${this.id}`)
            await updateDoc(update, {
                title: title,
                description: description,
                link: link
            })
            this.$root.$emit('itemDeleted')
            this.clickedEdit = false
        },
        cancelEdit() {
            this.clickedEdit = false
        },
        checkInput() {
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
        }

    }
}

</script>

<style scoped>
li {
    margin: 5px auto;
    width: 100%;
    background-color: rgb(213, 213, 213);
    list-style: none;
    color: white;
    padding: 0.7rem;
    border-radius: 20px;
    transition: 0.3s;
    font-size: 0.8rem;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.6);
}

section {
    width: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    
}
.top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem;
}

.middle {
    padding: 0.3rem;
    color: black;
    text-align: left;
}

.bottom {
    padding: 0.3rem;
    text-align: left;
}

.bottom {
    text-decoration: none;
    color: rgb(154, 223, 25);
}

.fa-solid {
    color: rgb(154, 223, 25);
    transition: 0.3s;
    cursor: pointer;
    padding: 0.3rem;
    border-radius: 10px;
}
.fa-solid:hover {
    color: rgb(154, 223, 25);
    background-color: white;
}


@media screen and (max-width: 450px) {
    li {
    margin: 5px auto;
    width: 100%;
    background-color: rgb(91, 91, 91);
    list-style: none;
    color: white;
    padding: 0.7rem;
    border-radius: 20px;
    transition: 0.3s;
    font-size: 0.8rem;
}
}

</style>