<template>
    <article class="back">
    <section class="container">
        <div class="button-container">
            <button :class="learningResourcesSelected"  @click="selectTab('learning-resources')">Resources</button>
            <button :class="addResourcesSelected" @click="selectTab('add-resources')">Add Resources</button>
        </div>
        <learning-resources v-if="selectedTab === 'learning-resources'"></learning-resources>
        <keep-alive>
            <add-resources v-if="selectedTab === 'add-resources'" ></add-resources>
        </keep-alive>
    </section>
</article>
</template>

<script>
import LearningResources from './LearningResources.vue';
import AddResources from './AddResources.vue';

export default {
    name: 'TheResources',
    components: {LearningResources, AddResources },
    data() {
        return {
            selectedTab: 'learning-resources',
        }
    },
    methods: {
        selectTab(tab) {
            this.selectedTab = tab
        },
        updateScreen() {
            this.selectedTab = 'learning-resources'
        },
        updateRefreshStatus() {
            this.refreshStatus = true
        },
        updateStatus() {
            this.refreshStatus = false
        }
    },
    computed: {
        learningResourcesSelected() {
            return this.selectedTab === 'learning-resources' ? 'button-selected' : null
        },
        addResourcesSelected() {
            return this.selectedTab === 'add-resources' ? 'button-selected' : null
        }
    },
    provide() {
        return {
            updateTab: this.updateScreen,
        }
    }
}

</script>

<style scoped>

.back {
    width: 100%;
}
.container {
    width: 80%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    background-color: white;
    backdrop-filter: blur(1px) saturate(50%); 
    padding: 0.5rem;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 3rem;
}

.button-container {
    margin: 15px auto;
    width: 95%;
    background-color: rgb(213, 213, 213);
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem;

}

button {
    font-size: 1.3rem;
    padding: 3px 20px;
    border-radius: 10px;
    border: 0;
    background-color: rgb(213, 213, 213);
    transition: 0.3s;
}

button:hover {
    background-color: white;
    transition: 0.3s;
    cursor: pointer;
}

.button-selected {
    background-color: rgb(154, 223, 25);
}

.button-selected:hover {
    background-color: rgb(161, 239, 15);
}


@media screen and (max-width: 450px) {
    .container {
    width: 95%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    background-color: white;
    backdrop-filter: blur(1px) saturate(50%); 
    padding: 0.5rem;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 3rem;
}

.button-container {
    margin: 15px auto;
    width: 99%;
    background-color: rgb(91, 91, 91);
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.3rem;
}

button {
    font-size: 0.8rem;
    padding: 3px 20px;
    border-radius: 10px;
    border: 0;
    background-color: rgb(213, 213, 213);
    transition: 0.3s;
}
}


</style>