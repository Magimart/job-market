<template>
   <div class="homePageWrapper bg-blackl w-full h-full">
      <section class="homePageHeadWrapper h-1/5 " >
      
        <MainNav/>
      </section>
      <section class="mainBodyHomeWrapper grid grid-flow-row grid-cols-12 bg-blue-300
          w-full h-4/5 "
      >
        <!-- foooter -->
      </section>
   </div>
   
   <router-view/>
</template>

<script>
import MainNav from './components/MainNav.vue';


export default {
  name: "App",
  components: {
    MainNav 
  }
};




</script>

