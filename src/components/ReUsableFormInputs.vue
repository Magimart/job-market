<template>
    <div class="searchBarWrapper m-4 bg-slate-100f h-12 w-full ">
        <div class="searchIconWrapper items-center rounded-lg  bg-slate-300s  w-full h-full ">
          <form class=" flex flex-row flex-nowrap h-full w-full  border border-yellow-600 space-x-1 rounded-full">
             <div class="flex flex-row w-full">
                <h2>proffession</h2>
            <ReUsableInput 
                v-model="userInput"  
            />  
             </div>          
            <span class="bg-blue-300 px-2 h-full flex items-center">
                in
            </span>
            <div class="flex flex-row w-full">
            <h2>location</h2>
            <ReUsableInput 
                v-model="userLocation"  
            />  
             </div> 
             <div class="searchIconContainer flex flex-col items-center justify-center px-4 hover:bg-my-green-1
                bg-slate-200c w-max h-full rounded-r-full"
              >
                search
             </div>
            
          </form>  
        </div>
    </div>
</template>



<script>
import ReUsableInput from './IsReUsableInputs.vue';


export default{
    name: "SearchBarWIthReUsableInputs",
    data() {
        return {
            userInput: "",
            userLocation: "",
        };
    },
    methods: {
        isUserInput(payload) {
            this.userInput = payload;
        },
    },
    components: { ReUsableInput }
}

</script>