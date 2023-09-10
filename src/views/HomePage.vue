<template>
   <div class="homePageWrapper w-full h-full">
       <section class="mainBodyHomeWrapper grid grid-flow-row grid-cols-12 bg-blue-300
            w-full h-4/5 "
        >
         <div class="col-span-3 flex justify-center place-items-center bg-slate-50 h-full "> 
            Side bar
         </div>
         <div class="col-span-5 bg-slate-500 h-full "> 
            <Headline/>
         </div>
         <div class="col-span-4 flex justify-center place-items-center  bg-slate-900 h-full "> 
            left bar
         </div>
     </section>
   </div>

</template>


<script>
 import Headline from '../components/Headline.vue';

 export default{
    name:"HomePage",
    components:{
        Headline
     },

}

</script>