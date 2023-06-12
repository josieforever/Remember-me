<template>
    <article>
        <div></div>
        <dialog open>
            <header>
                <h2>{{ }}</h2>
            </header>
            <section><span class="prompt"> Are you sure you want to delete <span class="prompt-inner">{{ itemToBeDeleted }}</span> ?</span></section>
            <nav class="button-container">
                <button @click="$emit('cancel')" >cancel</button>
                <button @click="$emit('confirm')" >Delete</button>
            </nav>
        </dialog>
    </article> 
</template>

<script>
export default {
    name: 'DeleteDialog',
    props: ['itemToBeDeleted'],
}


</script>

<style scoped>
div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(225, 225, 225, 0.641);
    backdrop-filter: blur(1px) saturate(10%); 
    z-index: 10;
}

dialog {
    position: fixed;
    top: 27vh;
    left: 30%;
    width: 50%;
    z-index: 100;
    border-radius: 20px;
    border:0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: hidden;
    background-color: white;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

header {
    background-image: linear-gradient(to right,  rgb(113, 0, 194),rgb(0, 151, 151));
    -webkit-background-clip: text;
    background-clip: text;
    width: 100%;
    padding: 0.5rem
}

.prompt {
    color: black;
}

header h2 {
    color: transparent;
    margin: 0;
    text-align: center;
    font-size: 1.2rem;
}

section {
    width: 97%;
    padding: 1rem;
    background-color: rgb(213, 213, 213);
    text-align: center;
    margin-bottom: 8px;
    border-radius: 10px;
    color: black;
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

.prompt-inner {
    color:rgb(154, 223, 25);
    background-color: black;
    padding: 2px 3px;
    border-radius: 5px;
}

button {
    padding: 1px 1rem;
    display: flex;
    font-size: 1rem;
    justify-content: flex;
    border: none;
    border-radius: 10px;
    font-weight: 300;
    background-color: #2f372a44;
    color: black;
}

button:hover {
    background-color: rgb(154, 223, 25);
    transition: 0.3s;
    cursor: pointer;
}

@media screen and (max-width: 450px) {
    dialog {
    position: fixed;
    top: 27vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    border-radius: 20px;
    border:0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: hidden;
    background-color: white;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

button {
    padding: 1px 1rem;
    display: flex;
    font-size: 0.7rem;
    justify-content: flex;
    border: none;
    border-radius: 10px;
    font-weight: 300;
    background-color: #2f372a44;
    color: black;
}
}
</style>