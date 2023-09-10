<template>
    <div class="jobListingWrapper w-full h-auto flex flex-col p-5">
        <div v-for="job in limitResponse" >
            <JobListItem :key="job.id" :el="job"  />
        </div>
        <div class="paeNavWrapper flex flex-row space-x-5 bg-gray-400 p-3 justify-center ">
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

<script>
import axios from "axios";
import JobListItem from "./JobListItem.vue";


export default{

    name:"JobListing",
    components:{JobListItem},
    computed:{
        isCurrentPage(){
             const currentPage = this.$route.query.page || "1";
             return parseInt(currentPage);
        },
        isPreviousPage(){
          const previousPage = this.isCurrentPage - 1
          const firstPage = 1;
          return previousPage >= firstPage? previousPage: undefined;
        },
        isNextPage(){
             const nextPage = this.isCurrentPage + 1;
             const maxPage = this.jobs.length / 5
             return nextPage <= maxPage? nextPage : undefined ;
        },

        limitResponse(){

            const pageNum = this.isCurrentPage;
            const isFirstIndex = (pageNum-1);
            const isLastIndex = pageNum * 5;
            return this.jobs.slice(isFirstIndex, isLastIndex);
            return this.jobs.slice(0,5);
        },
        
    },
    data(){
        return{
            jobs: [],
        }
    },
    async mounted(){
       const isBaseUrl = import.meta.env.VITE_APP_API;
       const isRes = await axios.get(`${isBaseUrl}/jobs`);
            return this.jobs = isRes.data;                                       
    },

}
</script>