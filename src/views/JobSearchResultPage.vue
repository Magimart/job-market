<template>
    <div class="searchResultPageWrapper relative w-full h-full">       
        <div class="h- px-4 w-full flex itmes-center">
        </div>
        <div class="flex flex-row w-full h-24 items-center space-x-6 justify-start px-5 ">
             <button 
               @click="goBackRouter"
               class="bg-green-500 p-1 m-1 rounded-md" >go back home </button> <h1 class="font-bold text-3xl">
                your search results</h1>
         </div>   
        <section class="searchResultsWrapper grid grid-flow-col grid-cols-12 bg-blue-300
             w-full h-full relative "
         > 
          <div class="col-span-5 bg-slate-50 h-full ">
          <div class="jobFilterWrapper w-full bg-gray-200 border border-black p-2">
              <JobFilterSideBar/>
         </div>
          </div>
          <div class="col-span-7  bg-slate-500  h-full "> 
            <div class="jobFilterWrapper m-1 w-4/5b bg-gray-200 border border-black p-2">
               <JobListing/>
            </div>        
        </div>
      </section>
    </div>
 
 </template>
 
 
 <script setup>


import JobFilterSideBar from '../components/JobFilterSideBar.vue';
import JobListing from '../components/JobListing.vue';
import {useRouter} from 'vue-router';


const router = useRouter()

  const goBackRouter= ()=>{
         const goBack1 = router.push({name:"home"})
          return goBack1;
       }
 
 </script>