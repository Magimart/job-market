<template>
    <div class="jobListingWrapper w-full h-auto flex flex-col">
        <div v-for="job in limitResponse" >
            <JobListItem :key="job.id" :el="job"  />
        </div>
        <div class="paeNavWrapper flex flex-row space-x-4 bg-gray-400 bg-opacity-60 px-2 py-1 justify-center">
            <div>page:{{ isCurrentPage }}</div>
            <div>
                <RouterLink 
                    v-if="isPreviousPage"
                    :to="{name:'searchResults', query:{page:isPreviousPage}}"
                >
                 previous
                </RouterLink>
            </div>
            <div>
                <RouterLink 
                    v-if="isNextPage"
                    :to="{name:'searchResults', query:{page:isNextPage}}"
                >
                 next>>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { mapState, mapActions } from "pinia";
import JobListItem from "./JobListItem.vue";
import {computed, ref, onMounted}  from "vue";
import {useRoute} from 'vue-router';
import {useJobsStore, 
        //  FETCH_JOBS, 
        //  GET_JOBS_BY_ORG , 
        //  FILTER_USER_JOBS_BY_TYPE,
        //  ALL_FILTERED_JOBS
    
    } from "@/stores/jobs";


const route = useRoute()
const useJobStore = useJobsStore();


onMounted( 
    useJobStore.FETCH_JOBS      
)

const isCurrentPage = computed(() =>{
    const currentPage = route.query.page || "1";
    return parseInt(currentPage);
})

const isPreviousPage = computed(()=>{
    const previousPage = isCurrentPage.value - 1
    const firstPage = 1;
    return previousPage >= firstPage? previousPage: undefined;
            
});

const ALL_FILTERED_JOBS = computed(()=>useJobStore.ALL_FILTERED_JOBS)

const isNextPage = computed(()=>{
    const nextPage = isCurrentPage.value + 1;
    const maxPage = ALL_FILTERED_JOBS.value.length / 5
    return nextPage <= maxPage? nextPage : undefined ;
});


const limitResponse = computed(()=>{
                
    const pageNum = isCurrentPage.value;
    const isFirstIndex = (pageNum-1);
    const isLastIndex = pageNum * 5

    return ALL_FILTERED_JOBS.value.slice(isFirstIndex, isLastIndex);
     const isLimitResponse = ALL_FILTERED_JOBS.value.slice(isFirstIndex, isLastIndex);

})



</script>