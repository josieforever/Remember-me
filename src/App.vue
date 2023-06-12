<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
}

</script>

<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

html {
  width: 100%;
}

::selection {
  background-color: rgba(154, 223, 25, 0.69);
}

#app{
  width: 100%;
}

body {
    width: 100%;
    background-color: rgb(213, 213, 213);
}


@media screen and (max-height: 450px){
  body {
    width: 100%;
    background-color: rgb(91, 91, 91);
}

}






</style>
