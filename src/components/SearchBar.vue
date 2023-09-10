<template>
    <div class="searchBarWrapper m-4 bg-slate-100f h-12 w-full ">
        <div class="searchIconWrapper items-center rounded-lg  bg-slate-300s  w-full h-full "
            @submit.prevent="handleUserSubmition"
        >
          <form class=" flex flex-row flex-nowrap h-full w-full  border border-yellow-600 space-x-1 rounded-full">
            <div  class=" flex flex-col items-center justify-center w-7 px-3 h-full">
                            <!-- icon -->
             </div>   
             <label for="proffession" class="text-sm h-full flex items-center">proffession</label>
            <input
               :value="userInput"
               @input="userFormInput"
               id="proffession"
               type="text"
               class="relative h-full w-1/2 flex flex-row bg-slate-100  px-4 border-3 border-orange-500 " 
               placeholder=" search job"
            />

            <span class="bg-blue-300 px-2 h-full flex items-center">
                in
            </span>
            <label for="area" class="text-sm h-full flex items-center">area</label>
            <input
               :value="userLocation"
                @input="userLocation = $event.target.value"
                id="area"
               type="text"
               class="relative h-full w-1/2 flex flex-row bg-slate-100  px-4 border-3 border-orange-500 " 
               placeholder="location"
            />
             <div class="searchIconContainer flex flex-col items-center justify-center px-4 hover:bg-my-green-1
                bg-slate-200c w-max h-full rounded-r-full"
              >
                <button type="submit">
                    search
                </button>            
             </div>
             <div class="absolute top-20 h-12 bg-blue-400">                
             </div>
          </form>  
        </div>
    </div>
</template>





<script>


export default{
    name: "SearchBar",
    data() {
        return {
            userInput: "",
            userLocation: "",
        };
    },
    methods: {
        userFormInput(event) {
            this.userInput = event.target.value;
            let isEmit = this.$emit;
        },
        handleUserSubmition(){
           this.$router.push({
                name: "searchResults", 
                query:{ userInput: this.userInput, location: this.userLocation}
           })  
        }
    },
    components: { 
    }
}

</script>