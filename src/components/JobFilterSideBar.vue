<template>
    <div class="z-99 w-full flex flex-col p-5 ">
        <h2>filter search</h2>
        <CollapsableAccordion header="Slot content"/>
        <CollapsableAccordion header="job type">
            placeHolder
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
import {useJobsStore, GET_UNIQUE_ORG } from "@/stores/jobs"
import {useUserStore, ADD_SELECTED_USER_ITEMS } from "@/stores/users"


export default{ 
    name: "JobFilterSideBar",
    components: { CollapsableAccordion },
    
    data(){
       return{
         selectedOrg : []
       }
    },

    computed:{
         ...mapState(useJobsStore, [GET_UNIQUE_ORG])
    },

 methods:{
    ...mapActions(useUserStore, [ADD_SELECTED_USER_ITEMS]),
    selectedUserItems(){
        console.log("on change is ", this.selectedOrg);
        this.ADD_SELECTED_USER_ITEMS(this.selectedOrg);
        const isItem = this.ADD_SELECTED_USER_ITEMS(this.selectedOrg);
        console.log("is item____", isItem)
    },

 }
}
</script>