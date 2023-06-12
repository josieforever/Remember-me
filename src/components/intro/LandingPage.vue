<template>
    <section class="content-container">
        <div class="background">
            <h1>Empowering developers and aspiring developers</h1>
            <section class="button-container">
                <div @click="createAccount" class="create">Create an account</div>
                <div class="how"><i class="fa-solid fa-play"></i> How it works </div>
            </section>
            <section class="card-container">
                <div class="card card-1">
                    <i class="fa-solid fa-circle-nodes"></i>
                    <div class="text-container">
                        <p class="text-1">For Developers</p>
                        <p class="text-2">Save open source code & docs to help learn better</p>
                    </div>
                </div>
                <div class="card card-2">
                    <div>
                    <i class="fa-solid fa-layer-group"></i>
                    <i class="fa-solid fa-users"></i>
                    </div>
                    <div class="text-container">
                        <p class="text-3">For Enterpreneurs</p>
                        <p class="text-4">Streamline and curate your learning resources</p>
                    </div>
                </div>
            </section>
            <section class="login-container">
                <p class="login-ask">Already have an account?</p>
                <div class="login-text">
                    <router-link to="/login"></router-link>
                    <p class="login"><router-link to="/login">Go to login</router-link></p>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
export default {
    name: 'LandingPage',
    methods: {
        createAccount() {
            this.$router.push('/signUp')
        }
    }
}
</script>

<style scoped>

.content-container {
    width: 100%;
    height: 120vh;
    background-color: black;
    color: white;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: center;
}

.background {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
}

h1 {
    text-align: center;
    margin-top: 1rem;
    font-size: 3.5rem;
    font-weight: 400;
}

.button-container {
    width: 500px;
    margin-top: 1rem;
    padding: 1rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
}

.create, .how {
    padding:  1rem;
    border-radius: 30px;
    background-color: rgb(154, 223, 25);
    color: black;
    font-weight: 500;
    transition: 0.3s;
}
.create:hover {
    background-color: rgb(184, 213, 42);
}
.how {
    background-color: black;
    color: white;
    border: 2px solid white;
}
.how:hover {
    color: rgb(154, 223, 25);
    border: 2px solid rgb(154, 223, 25);
}
.fa-circle-nodes, .fa-layer-group, .fa-users {
    padding: 0.5rem;
    border-radius: 50%;
    background-color: whitesmoke;
    margin: 1rem 0 0 1rem;
}

.fa-circle-nodes {
    background-color: rgb(79, 79, 79);
    color: white;
}
.fa-play {
    padding: 0.2rem;
}

.card-container {
    margin-top: 1rem;
    height: 470px;
    width: 600px;
    padding: 1rem;
    background-color: whitesmoke;
    border-radius: 15px;
    position: relative;
}

.card {
    height: 350px;
    width: 270px;
    border-radius: 15px;
    background-color: black;
    color: black;
    position: relative;
    left: 0;
    bottom: 0;
    transition: 0.5s;
}
.card:hover {
    scale: 1.08;
}
.card-2 {
    background-color: rgb(154, 223, 25);
    position: relative;
    left: 52%;
    bottom: 60%;
}

.text-container {
    padding: 1.5rem;
    text-align: justify;
    margin-top: 11rem;
}

.text-1 {
    font-size: 1.5rem;
    color: whitesmoke;
    margin-bottom: 8px;
}
.text-2 {
    color: whitesmoke;
}
.text-3 {
    font-size: 1.5rem;
    color: black;
    margin-bottom: 8px;
}

.login-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr ;
    place-content: center;
}

.login-text {
    background-color: black;
    text-align: center;
}

.login {
    cursor: pointer;
    padding: 0.5rem;
    background-color: white;
    color: black;
    border-radius: 20px;
    font-weight: 600;
    transition: 0.5s;
}

.login:hover {
    background-color: rgb(154, 223, 25);
    scale: 1.05;
}

a{
    text-decoration: none;
    color: black;
}
/* MEDIA QUERIES FOR iPhone 5/SE */
@media screen and (max-width: 450px) {
    .content-container {
    width: 100%;
    background-color: black;
    color: white;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: center;
}

.background {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
}

h1 {
    text-align: center;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 400;
}

.button-container {
    width: 90%;
    margin-top: 0.5rem;
    padding: 1rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
}

.create, .how {
    padding:  0.5rem;
    border-radius: 30px;
    background-color: rgb(154, 223, 25);
    color: black;
    font-weight: 500;
    font-size: 0.7rem;
    transition: 0.3s;

}
.create:hover {
    background-color: rgb(184, 213, 42);
}
.how {
    background-color: black;
    color: white;
    border: 2px solid white;
}
.how:hover {
    color: rgb(154, 223, 25);
    border: 2px solid rgb(154, 223, 25);
}
.fa-circle-nodes, .fa-layer-group, .fa-users {
    padding: 0.5rem;
    border-radius: 50%;
    background-color: whitesmoke;
    margin: 1rem 0 0 1rem;
    font-size: 0.8rem;
}

.fa-circle-nodes {
    background-color: rgb(79, 79, 79);
    color: white;
}
.fa-play {
    padding: 0.2rem;
}

.card-container {
    margin-top: 1rem;
    height: 250px;
    width: 280px;
    padding: 1rem;
    background-color: whitesmoke;
    border-radius: 15px;
    position: relative;
}

.card {
    height: 200px;
    width: 120px;
    border-radius: 15px;
    color: black;
    position: absolute;
    transition: 0.5s;
}
.card:hover {
    scale: 1.08;
}
.card-1 {
    background-color: black;
    position: absolute;
    left: 5%;
    top: 5%;
}
.card-2 {
    background-color: rgb(154, 223, 25);
    position: absolute;
    right: 5%;
    bottom: 5%;
}

.text-container {
    padding: 0.5rem;
    text-align: justify;
    margin-top: 60%;
    font-size: 0.55rem;
}

.text-1 {
    font-size: 0.6rem;
    color: whitesmoke;
    margin-bottom: 8px;
}
.text-2 {
    color: whitesmoke;
}
.text-3 {
    font-size: 0.6rem;
    color: black;
    margin-bottom: 8px;
}

.login-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr ;
    place-content: center;
}

.login-text {
    background-color: black;
    text-align: center;
}

.login {
    cursor: pointer;
    padding: 0.5rem;
    background-color: white;
    color: black;
    border-radius: 20px;
    font-weight: 600;
    transition: 0.5s;
    width: 60%;
    place-content: center;
    text-align: center;
    margin: auto;
}

.login:hover {
    background-color: rgb(154, 223, 25);
    scale: 1.05;
}

a{
    text-decoration: none;
    color: black;
}
}


</style>