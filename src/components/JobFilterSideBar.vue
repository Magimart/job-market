<template>
    <div class="z-99 w-full flex flex-col p-5 ">
        <h2>filter search</h2>
        <CollapsableAccordion header="Slot content"/>
        <CollapsableAccordion header="jobtype">
            <fieldset>
                <ul class=" flex flex-row  flex-wrap h-full m-3                  
                "
                >
                    <li v-for="el in GET_UNIQUE_JOB_TYPES"
                       class="bg-red-30 h-9 w-1/2 space-x-1">
                       <input                           
                           v-model="selectedJobType"
                           :value="el"
                           :id="el" type="checkbox"
                           @change="selectedUserJobType"
                       />
                       <lable :for="el">{{ el }}</lable>
                    </li>
                </ul>
            </fieldset>
        </CollapsableAccordion>
        <CollapsableAccordion header="organisation">
         <div class="h-full ">
            <fieldset>
                <ul class=" flex flex-row  flex-wrap h-full m-3                  
                "
                >
                    <li v-for="org in GET_UNIQUE_ORG"
                       class="bg-red-30 h-9 w-1/2 space-x-1">
                       <input                           
                           v-model="selectedOrg"
                           :value="org"
                           :id="org" type="checkbox"
                           @change="selectedUserItems"
                       />
                       <lable :for="org">{{ org }}</lable>
                    </li>
                </ul>
            </fieldset>
         </div> 
        </CollapsableAccordion>
    </div>
</template>

<script>
import CollapsableAccordion from './CollapsableAccordion.vue';
import {mapState, mapActions } from "pinia";
import {useJobsStore, GET_UNIQUE_ORG, GET_UNIQUE_JOB_TYPES } from "@/stores/jobs"
import {useUserStore, ADD_SELECTED_USER_ITEMS, ADD_SELECTED_USER_JOBTYPE } from "@/stores/users"


export default{ 
    name: "JobFilterSideBar",
    components: { CollapsableAccordion },
    
    data(){
       return{
         selectedOrg : [],
         selectedJobType: []
       }
    },

    computed:{   
         ...mapState(useJobsStore, [GET_UNIQUE_ORG, GET_UNIQUE_JOB_TYPES] ),
    },

 methods:{
    ...mapActions(useUserStore, [ADD_SELECTED_USER_ITEMS, ADD_SELECTED_USER_JOBTYPE]),

    selectedUserItems(){

        this.ADD_SELECTED_USER_ITEMS(this.selectedOrg);
        this.$router.push({name:"searchResults"})
    },

    selectedUserJobType(){
          this.ADD_SELECTED_USER_JOBTYPE(this.selectedJobType)
    },
  
 }
}
</script>