<template>
    <article>
        <div></div>
        <dialog open>
            <header>
                <h2><!-- {{ invalidInputTitle }}  -->{{ title }}</h2>
            </header>
            <section>{{ invalidInputMessage }}</section>
            <button @click="$emit('confirm', false)" >okay</button>
        </dialog>
    </article> 
</template>

<script>
export default {
    name: 'BaseDialog',
    props: ['invalidInputMessage', 'invalidInputTitle', 'areYouSureMessage', 'title'],
}


</script>

<style scoped>
div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(213, 213, 213, 0.485);
    backdrop-filter: blur(1px) saturate(30%); 
    border-radius: 20px;
    z-index: 10;
}

dialog {
    position: fixed;
    top: 27vh;
    left: 30%;
    width: 40%;
    z-index: 100;
    border-radius: 20px;
    border: none;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    background-color: white;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

header {
    background-image: linear-gradient(to right,  #00b09b, #96c93d);
    background-clip: text;
    -webkit-background-clip: text;
}

h2 {
    color: transparent;
    text-align: center;
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

button {
    padding: 1px 1rem;
    display: flex;
    font-size: 1rem;
    justify-content: flex;
    border: none;
    border-radius: 10px;
    font-weight: 300;
    color: black;
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
    border: none;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    background-color: white;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
}



</style>