<template>
    <div v-if="userOnSearchResultPage"  class="searchIconContainer flex flex-row
      items-center justify-start 
      w-full px-3 h-12 space-x-4
      "
    >
        <div>
            <font-awesome-icon :icon="['fas', 'search']"/>
        </div>
        <div class="flex flex-row text-sm h-max w-full ">
            <span class="  bg-orange-300 p-0.5">{{ isFilteredSearchResult}}: 
                <span class="bg-green-400 px-0.5 ">jobs matched</span>
            </span>                    
        </div> 
    </div>
</template>


<script>
import { mapState, mapActions } from "pinia";
import {useJobsStore, 
         ALL_FILTERED_JOBS
        } from "@/stores/jobs"



export default{
    name: "SearchResultNav",
    data(){
        return {
            isJobResultNumuber: ""
        }
    }, 
    computed: {
        ...mapState(useJobsStore, {
            ALL_FILTERED_JOBS, 

            isFilteredSearchResult(){
                return this.ALL_FILTERED_JOBS.length ;
            },

        }),
       userOnSearchResultPage(){
          return this.$route.name === "searchResults"          
        } 
    },
}
</script>


