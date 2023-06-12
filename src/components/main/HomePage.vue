<template>
    <div>
      <the-header></the-header>
      <br>
      <br>
      <the-resources></the-resources>
    </div>
</template>
  
<script>
import TheHeader from './TheHeader'
import TheResources from './TheResources'

export default {
    name: 'HomePage',
    components: { TheHeader, TheResources }

}
  
</script>

<style scoped>
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

</style>