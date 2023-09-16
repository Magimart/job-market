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
            <span class="  bg-orange-300 p-0.5">123
                <span class="bg-green-400 px-0.5 ">jobs matched</span>
            </span>                    
        </div> 
    </div>
</template>


<script>


export default{
    name: "SearchResultNav",
    computed: {
       userOnSearchResultPage(){
          return this.$route.name === "searchResults"          
        } 
    },
}

</script>