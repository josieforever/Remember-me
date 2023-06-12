<template>  
            <ul>
                <loading-animation v-if="loadingAnimation"></loading-animation>
                <div class="gradient" v-else-if="noData">
                    <p>No Resource Added!</p>
                </div>
                <list-item class="list-item" v-else v-for="data in userData" :key="data.id" :id="data.id" :title="data.data.title" :description="data.data.description" :link="data.data.link" @itemDeleted="deleteSignal" ></list-item>
            </ul>
</template>

<script>
import main from '@/main'
import { collection , getDocs } from 'firebase/firestore'
/* doc, setDoc, , updateDoc, deleteDoc, deleteField, doc, getDoc, , collection, addDoc */
import ListItem from './ListItem.vue';
import LoadingAnimation from '../ui-elements//LoadingAnimation.vue'

export default {
    name: 'LearningResources',
    components: { ListItem, LoadingAnimation },
    data() {
        return {
            firebaseUrl: 'https://vue-http-demo-3405a-default-rtdb.firebaseio.com/resouces.json',
            loadingAnimation: false,
            userId: '',
            userData: []
        }
    },
    mounted() {
        this.$root.unique
         this.getNewData()
        },
    methods: {
       async getNewData() {
            this.loadingAnimation = true 
            let objectCreator = {} 
            const tempArray = []
            //usign the firebase getDocs and collection functions to call for all the data in a specific collection
            const collectionQuery = await getDocs(collection(main.db(),`${this.$root.unique}`))
            collectionQuery.forEach(doc=> {
                objectCreator = { id: doc.id, data:doc.data() }
                tempArray.push(objectCreator)  
            })
            //Using a filter method to remove the object with the the account
            this.userData = tempArray.filter(data => {
                return data.id !== 'account-details'
            }) 
            this.loadingAnimation = false
        },
        deleteSignal() {
            console.log('i work well')
            this.getNewData()
        } 
    },
    computed: {
        noData() {
            return this.userData.length === 0 ? true : false
        }
    },
    created() {
        this.$root.$on('refresh', () => {
            this.getNewData()
        } )
        
        this.getNewData()
    },
    beforeUpdate() {
        this.$root.$on('itemDeleted', () => {
            this.getNewData()
        })
    } 
}
</script>

<style scoped>

ul {
    width: 99%;
    margin: 15px auto;
    background-color: rgba(255, 255, 255, 0.149);
    border-radius: 20px;
    padding: 0.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

p {
    font-size: 4rem;
    color: transparent;
    text-align: center;
    color: black;
}

 .gradient{
    height: 70vh;
    width: 99%;
    border-radius: 20px;
    /* background-image: linear-gradient(to right,  #00b09b, #96c93d);
    -webkit-background-clip: text;
    background-clip: text; */
    background-color: rgb(213, 213, 213);
    display: grid;
    place-content: center;
}

.list-item {
    width: 99%;
}

@media screen and (max-width: 450px) {
    ul {
    width: 99%;
    margin: 15px auto;
    background-color: rgba(255, 255, 255, 0.149);
    border-radius: 20px;
    padding: 0.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

p {
    font-size: 2rem;
    color: transparent;
    text-align: center;
    color: black;
} 
}
</style>