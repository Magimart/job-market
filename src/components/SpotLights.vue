<template>
    <div >
       <ul class="bg-white flex flex-row flex-wrap">
        <li v-for="el in spotLights"  :key="el.id">
            <slot :img="el.img" :title="el.title" :decription="el.description "
              class="imageWraper h-56g h-24 w-full flex flex-row" 
           >el</slot>
        </li>
       </ul>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref, onMounted}  from "vue";

interface SportLight {
   id: string,
   img: string,
   title: string,
   description: string
}
const spotLights = ref<SportLight[]>([]); //!!

onMounted(async() =>{
    const isBaseUrl = import.meta.env.VITE_APP_API;
    const getData = await axios.get(`${isBaseUrl}/spotlights`)        
   return spotLights.value = getData.data;
})
  


</script>