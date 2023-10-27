<template>
    <div class="z-99 w-full flex flex-col p-5 ">
        <h2>filter search</h2>
        <!-- <CollapsableAccordion header="Slot content"/> -->
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

<script setup>
import CollapsableAccordion from './CollapsableAccordion.vue';
import {useJobsStore } from "@/stores/jobs"

import {useUserStore, 
} from "@/stores/users"
import { ref,  computed,  } from 'vue';
import {useRouter} from 'vue-router'


const selectedOrg = ref([])
const selectedJobType = ref([]);
const router = useRouter();
const isUserItem = useUserStore()
const isUseJobStore = useJobsStore()
const GET_UNIQUE_ORG = computed(()=>isUseJobStore.GET_UNIQUE_ORG)
const GET_UNIQUE_JOB_TYPES = computed(()=>isUseJobStore.GET_UNIQUE_JOB_TYPES)


const selectedUserJobType=()=>{ 
    isUserItem.ADD_SELECTED_USER_JOBTYPE(selectedJobType.value)
    router.push({name:"searchResults"})
}


const selectedUserItems=() =>{
    isUserItem.ADD_SELECTED_USER_ITEMS(selectedOrg.value);
    router.push({name:"searchResults"})
}


</script>


