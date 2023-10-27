<template>
   <div class="homePageWrapper w-full h-full">
       <section class="homePageHeadWrapper h-64 w-full flex place-content-center items-center" >
          <h1 class="text-3xl flex flex-col font-bold text-teal-500">            
            <span>Welcome to Job Markt </span>
            <span class="text-xl font-thin ">Please go to jobs to see the features of this app</span >
         </h1>
       </section>
       <section class="mainBodyHomeWrapper grid grid-flow-row grid-cols-12 bg-blue-00
            w-full h-4/5 "
        >
            <div class="col-span-3 bg-slate-00 h-full "> 
               <!-- slot -->
            </div>
            <div class="col-span-5 bg-slate-00 h-full w-full mx-4  "> 
               <Headline/>
            </div>
            <div class="col-span-4 bg-slate- h-full bg-opacity-10 "> 
               <!-- slot -->
            </div>
        </section>
        <section>
              <div class="spotLightWraper flex justify-center w-full  h-auto ">              
               <SpotLights>
                     <template v-slot:default="slotProps"        
                     >
                        <div 
                        >
                           <RouterLink 
                              class="mx-4 h-96 w-72 flex justify-center flex-col space-y-5"
                              to="/jobs/results"
                              >
                              <img  :src="slotProps.img" 
                                 class="object-contain"
                              />
                              <div>
                                 <h3 class="text-lg font-medium "> {{ slotProps.title}}</h3>
                                 <p class="mt-4 text-sm "> {{ slotProps.description}}</p>

                              </div>
                              <RouterLink to="/jobs/results" class="text-blue-400  text-sm">
                                 see more
                              </RouterLink>
                           </RouterLink>
                        </div>

                     </template>
                  </SpotLights>
              </div>
        </section>
   </div>

</template>


<script setup>
import Headline from "../components/Headline.vue";
import SpotLights from '../components/SpotLights.vue';


</script>