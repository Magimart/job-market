<template>

    <input
        type="text"
        :value="inputValue"
        class="relative h-full w-full m-2 flex flex-row bg-slate-100  px-4 border-3 border-orange-500 " 
        placeholder="this is a reusable component"
        @input="handleUserData"
    />
    
</template>


<script>
  
  export default {
        name:"TextInput",
      
       props:{
        inputValue: {
                type: String,
                required: true
            },
            
        },
        methods:{
            
            handleUserData($event){
              this.$emit("handleUserData", $event.target.value)
            },
        },
     
  }
</script>


