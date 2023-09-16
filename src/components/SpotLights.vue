<template>
    <div >
       <ul class="bg-white flex flex-row flex-wrap">
        <li v-for="el in spotLights"  :key="el.id">
           <!-- <slot :sportlight="el" -->
            <slot :img="el.img" :title="el.title" :decription="el.description "
              class="imageWraper h-56g h-24 w-full flex flex-row" 
           >el</slot>
        </li>
       </ul>
    </div>
</template>

<script>
import axios from 'axios';
  
export default{
          name: "SportLights",
          
          data(){
            return{
                spotLights:[]
            }
          },
          async mounted(){
            const isBaseUrl = import.meta.env.VITE_APP_API;
            const getData = await axios.get(`${isBaseUrl}/spotlights`)
             return this.spotLights = getData.data;
          }
}
</script>