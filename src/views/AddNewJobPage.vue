<template>
    <div 
        class="h-full flex flex-col justify-center space-y-5 p-5 w-full  px-2  "
    >
       <div class="w-1/2 flex justify-center">
        <HeaderContainer>
        <template #:default>
            <h2 class="w-full text-4xl font-normal">Teams</h2> 
        </template>
        <template v-slot:subTitle>
            <h2 class="w-full text-xl font-light">
                It is amazing working here!  {{ success }}
            </h2>
        </template>
      </HeaderContainer>
       </div>
      <div class=" flex flex-row w-full h-full justify-center">
          <AddNewJobForm/>
      </div>
    </div>
</template>


<script>
import HeaderContainer from '../components/HeaderContainer.vue';
import AddNewJobForm from '../components/AddNewJobForm.vue';
import {  mapStores, mapState} from "pinia";
import {useJobsStore } from "@/stores/jobs"


export default{
    name: "AddNewJoPage",
    components: { HeaderContainer, AddNewJobForm },
    computed:{
    ...mapState(useJobsStore, ['success']),
   },
}

</script>