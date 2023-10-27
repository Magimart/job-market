<template>
    <div 
        class="dataWraper flex flex-wrap w-full h-full space-y-4 border-b
              py-3 border-black hover:bg-gray-100 px-5
              cursor 
        "
    >
    <router-link :to="jobPageHref">
       <div class="titleArea flex flex-col space-x-4 w-full">
            <div class="flex flex-row ">
                <div class="w-full h-full bg-red-">
                    <span class="text-md font-semibold">
                       <span class="text-xl font-bold">{{ el.title }}</span>
                          <span class="px-1 font-normal">at</span> {{el.organisation}} 
                           <span class="px-1 font-normal  ">as</span>
                            <span class="text-sm bg-yellow-4 border-b border-black font-normal">
                               {{ el.jobType }}
                            </span>
                               
                    </span>
                    <span class="text-sm bg-gray-40 px-1">in {{ el.locations }}</span>
                    <span class="text-sm bg-gray-40 px-1">with educational levels of a 
                        <span class="bg-gray-400 bg-opacity-25 px-1 font-semibold">
                           {{ el.degree }}
                        </span> 
                    </span>
                </div>
            </div>
            <p class="text-sm"> {{ el.description[0].slice(0,120) }}<span class="text-yellow-300">...</span></p>
            <p class="text-xs">

                 <span class="font-bold">
                    {{ el.minimumQualification[0].slice(0,21) }}
                 </span>
                 {{ el.minimumQualification[0].slice(21,90) }}<span class="text-yellow-300">
                    ...</span>
            </p>
            <div class="flex justify-end px-16">
                <button class="bg-yellow-00 text-orange-400 w-max flex h-6 items-center px-3">
                    expand
            </button>
            </div>
       </div>
    </router-link>
    </div>
</template>

<script lang="ts"  setup>
import {computed, 
    type PropType 
}  from "vue";   //type notation
// import type { Job  } from "@/api/types";

interface Job {
  id: string,
  title: string,
  organisation: string,
  degree:string,
  jobType:string,
  locations:string[],
  minimumQualification: string[],
  preferredQualification: string[],
  description: string[],
  dateCreated: string
}

const props = defineProps({
    el:{
        type: Object as PropType<Job>,
        required: true,
    } 
});

const jobPageHref = computed(()=>{
        // console.group("this is element", el)
        return `/jobs/results/${props.el.id}`
   }
);



</script>

