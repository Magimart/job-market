<template>
    <div v-if="userOnSearchResultPage"  class="searchIconContainer flex flex-row
        items-center justify-start 
      w-full px-3 h-10 pt-4 space-x-2 
      "
    >
        <div>
            <font-awesome-icon :icon="['fas', 'search']"/>
        </div>
        <div class="flex flex-row text-sm h-full w-full  bg-black bg-opacity-5">
            <span class="  bg-orange-300 bg-opacity-10 p-0.5">
                {{ isFilteredSearchResult.length}}
                <span class="bg-green-400 bg-opacity-5 px-1 ">jobs matched</span>
            </span>                    
        </div> 
    </div>
</template>


<script setup>

import { computed,  } from 'vue';
import {useJobsStore, 
        } from "@/stores/jobs"
import {useRoute} from 'vue-router';
  
    const isJobSstore = useJobsStore();
    const route = useRoute();

    const userOnSearchResultPage = computed(() => {
          return route.name === "searchResults"          
    })

    const isFilteredSearchResult = computed (()=>isJobSstore.ALL_FILTERED_JOBS)
    

</script>


